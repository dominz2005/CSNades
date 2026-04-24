<script setup>
    import { ref, onMounted, onUnmounted, computed } from 'vue';

    import Nade from '@/components/Nade.vue';

    import { useFilterStore } from '@/stores/useFilterStore';
    import { GrenadeTypes, ViewMode } from '@/assets/constants';
    
    import Dots from '@/icons/Dots.vue';
    import ZoomIn from '@/icons/ZoomIn.vue';
    import ZoomOut from '@/icons/ZoomOut.vue';
    import Refresh from '@/icons/Refresh.vue';

    const props = defineProps({
        nades: {
            type: Array,
            required: true
        },
        mapName: {
            type: String,
            required: true
        },
        aspectRatio: {
            type: String,
            default: '1374 / 1196'
        },
        currentLevel: {
            type: Number,
            default: 1
        }
    });

    const filterStore = useFilterStore();

    const mapContainer = ref(null);
    const scale = ref(1);
    const targetScale = ref(1);
    const isDragging = ref(false);
    const hasDragged = ref(false);
    const position = ref({ x: 0, y: 0 });
    const startPos = ref({ x: 0, y: 0 });

    const activeId = ref(null);

    const setActive = (id) => activeId.value = id;
    const closeAll = () => {
        if (hasDragged.value) {
            hasDragged.value = false;
            return;
        }

        activeId.value = null;
    };

    const MINZOOM = 1;
    const MAXZOOM = 3;

    const restartZoomMove = () => {
        targetScale.value = 1;
        position.value = { x: 0, y: 0 };
        startPos.value = { x: 0, y: 0 };
        
        requestAnimationFrame(smoothZoom);
    };

    const handleZoom = (delta) => {
        const newScale = scale.value + delta;
        targetScale.value = Math.min(Math.max(newScale, MINZOOM), MAXZOOM);

        if (newScale <= MINZOOM) {
            position.value = { x: 0, y: 0 };
            startPos.value = { x: 0, y: 0 };
        }
        
        requestAnimationFrame(smoothZoom);
    };
    const smoothZoom = () => {
        const lerpFactor = 0.15;

        const diff = targetScale.value - scale.value;

        if (Math.abs(diff) < 0.01) {
            scale.value = targetScale.value;
            return;
        }

        scale.value += diff * lerpFactor;

        requestAnimationFrame(smoothZoom);
    }

    const handleMouseDown = (e) => {
        if (scale.value > MINZOOM) {
            isDragging.value = true;
            startPos.value = { x: e.clientX - position.value.x, y: e.clientY - position.value.y };
        }
    };
    const handleMouseUp = (e) => isDragging.value = false;

    const handleMouseMove = (e) => {
        if (!isDragging.value) return;
        
        hasDragged.value = true;

        let newX = e.clientX - startPos.value.x;
        let newY = e.clientY - startPos.value.y;

        if (mapContainer.value) {
            const containerWidth = mapContainer.value.offsetWidth;
            const containerHeight = mapContainer.value.offsetHeight;

            const maxScrollX = (containerWidth * scale.value - containerWidth) / 2;
            const maxScrollY = (containerHeight * scale.value - containerHeight) / 2;
            
            newX = Math.min(Math.max(newX, -maxScrollX), maxScrollX);
            newY = Math.min(Math.max(newY, -maxScrollY), maxScrollY);
        }

        position.value = { x: newX, y: newY };
    }
    
    const getMapCoordinates = (event) => {
        const container = event.currentTarget;
        const rect = container.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        const percX = (x * 100).toFixed(1);
        const percY = (y * 100).toFixed(1);

        const result = { x: percX, y: percY };
        
        const output = `{ x: ${percX}, y: ${percY} }`;
        navigator.clipboard.writeText(output);
        
        console.log("Skopiowano:", output);
        return result;
    };

    const shouldInclude = (nade) => {
        const selected = filterStore.selectedNades;

        const isCombinationSelected = selected.includes("combination");
        const isNormalSelected = selected.includes(nade.type);

        if (!isCombinationSelected) return isNormalSelected;

        if (isCombinationSelected && !nade.information?.groups) return false;

        if (isCombinationSelected && nade.information?.groups) {
            if (filterStore.selectedCombination)
                return nade.information.groups.includes(filterStore.selectedCombination);

            return true;
        }

        return false;
    };

    const groupNades = (getMainPos, getSecondaryPos, listKey) => {
        return props.nades.reduce((acc, nade) => {
            if (!shouldInclude(nade)) return acc;

            const mod = filterStore.modifiers;

            if (nade.type == GrenadeTypes.SMOKE && mod) {
                if (mod.onlyOneWay && !nade.information.oneWay) return acc;
                if (mod.hideOneWay && nade.information.oneWay) return acc;
            }
            if (nade.type == GrenadeTypes.FLASH && mod) {
                if (mod.onlySelfFlash && !nade.information.selfFlash) return acc;
                if (mod.hideSelfFlash && nade.information.selfFlash) return acc;
            }

            const mainPos = getMainPos(nade);
            const secondaryPos = getSecondaryPos(nade);

            const key = `${mainPos.x}-${mainPos.y}.${nade.type}`;

            if (!acc[key]) {
                acc[key] = {
                    type: nade.type,
                    [listKey]: [],
                    landPos: mainPos,
                    throwPos: mainPos
                };
            }

            acc[key][listKey].push({
                pos: secondaryPos,
                information: nade.information,
                id: nade.id
            });

            return acc;
        }, {});
    };

    const groupedNades = computed(() =>
        groupNades(n => n.landPos, n => n.throwPos, 'throwList')
    );

    const groupedThrowNades = computed(() =>
        groupNades(n => n.throwPos, n => n.landPos, 'landList')
    );

    const activeGroupedNades = computed(() =>
        filterStore.viewMode === ViewMode.LAND
            ? groupedNades.value
            : groupedThrowNades.value
    );
    
    onMounted(() => {
        document.addEventListener('click', closeAll);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    });
    onUnmounted(() => {
        document.removeEventListener('click', closeAll);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    });
</script>

<template>
    <main class="flex justify-center items-center w-full h-full ps-96 fixed left-1/2 -translate-x-1/2">
        <div class="absolute right-10 top-10 flex flex-col gap-5 items-end z-30">
            <div class="text-white flex gap-3">
                <div class="p-2 transition-colors bg-[##171717] hover:bg-slate-500/40 rounded-full cursor-pointer":class="targetScale <= MINZOOM ? 'hidden' : ''" @click="restartZoomMove()">
                    <Refresh class="size-7" />
                </div>
                <div class="p-2 transition-colors bg-[##171717] hover:bg-slate-500/40 rounded-full":class="targetScale >= MAXZOOM ? 'opacity-60' : 'cursor-pointer'" @click="handleZoom(0.25)">
                    <ZoomIn class="size-7" />
                </div>
                <div class="p-2 transition-colors bg-[##171717] hover:bg-slate-500/40 rounded-full":class="targetScale <= MINZOOM ? 'opacity-60' : 'cursor-pointer'" @click="handleZoom(-0.25)">
                    <ZoomOut class="size-7" />
                </div>
                <div class="p-2 transition-colors bg-[##171717] hover:bg-slate-500/40 rounded-full cursor-pointer">
                    <Dots class="size-7" />
                </div>
            </div>
            <slot name="controls" />
        </div>
        <div class="w-full max-h-full overflow-hidden origin-center will-change-transform" @mousedown="handleMouseDown" ref="mapContainer">
            <div 
                class="relative h-full max-h-screen mx-auto max-w-screen" 
                :style="{ 
                    transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                    aspectRatio: aspectRatio
                }" 
                @click="getMapCoordinates"
            >
                <div class="select-none">
                    <slot name="map" />
                </div>

                <Nade
                    v-for="(item, index) in activeGroupedNades"
                    :key="index"
                    :map="mapName"
                    :from-throw="filterStore.viewMode == ViewMode.THROW"
                    :type="item.type"
                    :main-pos="filterStore.viewMode == ViewMode.THROW ? item.throwPos : item.landPos"
                    :end-list="filterStore.viewMode == ViewMode.THROW ? item.landList : item.throwList"
                    :is-visible="activeId == null || activeId == index"
                    :is-active="activeId == index"
                    :aspect-ratio="aspectRatio"
                    :current-level="currentLevel"
                    :scale="scale"
                    @toggle="setActive(index)"
                />

            </div>
        </div>
    </main>
</template>