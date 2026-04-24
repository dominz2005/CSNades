<script setup>
    import { ref, computed } from 'vue';

    import { GrenadeTypes } from '@/assets/constants';

    import ThrowIcon from './ThrowIcon.vue';
    
    const props = defineProps({
        map: { type: String, required: true },
        type: { 
            type: String, 
            required: true,
            validator: (value) => Object.values(GrenadeTypes).includes(value)
        },
        fromThrow: { type: Boolean, default: false },
        endList: { type: Array, required: true },
        mainPos: { type: Object, required: true },
        isVisible: { type: Boolean, default: true },
        isActive: { type: Boolean, default: false },
        aspectRatio: { type: String, required: true },
        currentLevel: { type: Number, required: true },
        scale: { type: Number, default: 1 }
    });

    const containerRef = ref(null);
    const hoveredTitle = ref(null);
    const tooltipX = ref(0);
    const tooltipY = ref(0);

    const setHover = (title) => hoveredTitle.value = title;
    const clearHover = () => hoveredTitle.value = null;
    const moveTooltip = (e) => {
        const rect = containerRef.value.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        tooltipX.value = x / props.scale;
        tooltipY.value = y / props.scale;
    };

    const getPositionStyle = (pos) => ({
        left: `${pos.x}%`,
        top: `${pos.y}%`
    });

    const uniqueendList = computed(() => {
        const list = props.endList || [];
        
        const counts = {};
        list.forEach(item => {
            const posKey = JSON.stringify(item.pos);
            counts[posKey] = (counts[posKey] || 0) + 1;
        });

        return list.filter(item => {
            const posKey = JSON.stringify(item.pos);
            return counts[posKey] === 1;
        });
    });

    const groupedThrows = computed(() => {
        const list = props.endList || [];
        const groups = {};

        list.forEach(item => {
            const posKey = JSON.stringify(item.pos);
            
            if (!groups[posKey]) {
                groups[posKey] = {
                    pos: item.pos,
                    nades: []
                };
            }
            groups[posKey].nades.push(item);
        });

        return Object.values(groups).filter(group => group.nades.length >= 2);
    });

    const checkLevel = computed(() => {
        const hasLevelInfo = props.endList.some(item => item.information.level != null);
        
        if (!hasLevelInfo) return props.currentLevel == 1;

        return props.endList.some(item => item.information.level == props.currentLevel);
    });

    defineEmits(['toggle']);
</script>

<template>
    <div ref="containerRef" v-if="isVisible && checkLevel" @click.stop>
        <div class="absolute -translate-x-1/2 -translate-y-1/2 z-10 opacity-70 transition hover:opacity-100 hover:scale-110 cursor-pointer" :style="getPositionStyle(mainPos)" @click="$emit('toggle')">
            <h3 class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 z-20 font-bold text-2xl pointer-events-none" v-if="endList.length > 1">{{ endList.length }}</h3>
            <ThrowIcon :type="type" :show-grenades="!fromThrow" />
        </div>
        <svg class="absolute inset-0 w-full h-full pointer-events-none z-5" :viewBox="`0 0 ${aspectRatio.replace('/', '')}`" v-for="(item, index) in endList" :key="index" v-if="isActive">
            <line 
                :x1="item.pos.x + '%'" 
                :y1="item.pos.y + '%'" 
                :x2="mainPos.x + '%'" 
                :y2="mainPos.y + '%'" 
                stroke="#e5e7eb" 
                stroke-width="2" 
                stroke-dasharray="5 4" 
            />
        </svg>
        <RouterLink 
            v-for="(item, index) in uniqueendList" v-if="isActive"
            :key="index" 
            :to="{ name: 'nade-details', params: { map: map, type: type, id: item.id } }" 
            class="block absolute -translate-x-1/2 -translate-y-1/2 z-10 opacity-70 transition hover:opacity-100 hover:scale-110" 
            :style="getPositionStyle(item.pos)" 
            @mouseenter="setHover(item.information.title)"
            @mousemove="moveTooltip"
            @mouseleave="clearHover"
        >
            <ThrowIcon :type="type" :show-grenades="fromThrow" />
        </RouterLink>
        <div class="block absolute -translate-x-1/2 -translate-y-1/2 z-10" v-for="(item, index) in groupedThrows" :key="index" :style="getPositionStyle(item.pos)" v-if="isActive">
            <ThrowIcon :type="type" :show-grenades="fromThrow" />
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 rounded-full flex gap-2 items-center justify-center">
                <RouterLink 
                    v-for="(n, nIndex) in item.nades" 
                    :key="nIndex"
                    :to="{ name: 'nade-details', params: { map: map, type: type, id: n.id } }" 
                    class="size-7 bg-white rounded-full border border-gray-600 opacity-90 transition hover:opacity-100 hover:scale-105 cursor-pointer" 
                    @mouseenter="setHover(n.information.title)"
                    @mousemove="moveTooltip"
                    @mouseleave="clearHover"
                />
            </div>
        </div>
        
        <div
            v-if="hoveredTitle"
            class="absolute min-w-24 z-50 px-2 py-1 text-xs text-white bg-zinc-900 border border-zinc-700 rounded shadow-lg pointer-events-none"
            :style="{ transform: 'translate(-50%, -120%)', left: tooltipX + 'px', top: tooltipY + 'px' }"
        >
            {{ hoveredTitle }}
        </div>
    </div>
</template>