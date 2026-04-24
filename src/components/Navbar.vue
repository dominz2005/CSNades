<script setup>
    import { ref, computed, nextTick, watch } from 'vue';
    import { useRoute } from 'vue-router';

    import { useFilterStore } from '@/stores/useFilterStore';

    import { allNades } from '@/lineups/all';
    
    import { GrenadeTypes, ViewMode } from '@/assets/constants';
    
    import BaseSelector from './BaseSelector.vue';

    const route = useRoute();

    const activeElements = ref({});

    const setRef = (el, id) => {
        if (el) {
            activeElements.value[id] = el;
        }
    };

    const filterStore = useFilterStore();

    const indicatorStyle = ref({ height: '0px', transform: 'translateY(0px)', opacity: 0 });

    const updateIndicator = async () => {
        await nextTick();
        
        const activeId = route.name;
        const el = activeElements.value[activeId];
        
        if (el) {
            indicatorStyle.value = {
                height: `${el.offsetHeight}px`,
                transform: `translateY(${el.offsetTop}px)`,
                opacity: 1
            };
        } else {
            indicatorStyle.value.opacity = 0;
        }
    };

    watch(() => route.path, updateIndicator, { immediate: true });

    const nadeTypes = [
        { id: "smoke", title: "Smoke" },
        { id: "flash", title: "Flashbang" },
        { id: "fire", title: "Molotov" },
        { id: "he", title: "HE Grenade" },
        { id: "destruction", title: "Destruction" },
        { id: "combination", title: "Combination" },
    ];
    const maps = [
        { id: "mirage", title: "Mirage" },
        { id: "dust2", title: "Dust 2" },
        { id: "overpass", title: "Overpass" },
        { id: "ancient", title: "Ancient" },
        { id: "inferno", title: "Inferno" },
        { id: "anubis", title: "Anubis" },
        { id: "nuke", title: "Nuke" },
    ];
    
    const combinations = computed(() => {
        const groups = new Set();

        nades.value.forEach(nade => {
            if (!Array.isArray(nade.information?.groups)) return;

            nade.information.groups.forEach(group => {
                groups.add(group);
            });
        });

        return Array.from(groups).map(group => ({
            id: group,
            title: group
        }));
    });

    const nades = computed(() => {
        const map = route.name || 'unknown';

        return allNades.filter(nade => nade.map == map);
    });
</script>

<template>
    <nav class="p-5 min-w-96 max-w-96 flex flex-col relative z-40">
        <div>
            <h2 class="text-white text-xl font-medium">Nades</h2>
            <ul class="mt-5 flex flex-col gap-3">
                <li 
                    v-for="(item, index) in nadeTypes"
                    :key="index"
                    @click="filterStore.toggleNade(item.id)"
                    class="flex items-center justify-between p-2 rounded-sm cursor-pointer box-border border border-transparent"
                    :class="[
                        filterStore.selectedNades.includes(item.id)
                            ? 'bg-zinc-700 border-zinc-500'
                            : 'hover:bg-zinc-800'
                    ]"
                >
                    <div class="flex items-center gap-5">
                        <img class="size-8" :src="`/img/nades/${item.id}.png`">
                        <h3 class="text-white">{{ item.title }}</h3>
                    </div>
                    <p class="text-white" v-if="item.id != 'combination'">{{ nades.filter(nade => nade.type == item.id).length }}</p>
                    <p class="text-white" v-else>{{ combinations.length }}</p>
                </li>
            </ul>
        </div>
        <div v-if="filterStore.selectedNades.includes(GrenadeTypes.SMOKE)" class="flex gap-3 mt-10">
            <button
                @click="filterStore.toggleOneWay()"
                :class="filterStore.modifiers.onlyOneWay ? 'bg-zinc-600 hover:bg-zinc-600/80 border-zinc-400' : 'bg-zinc-700 hover:bg-zinc-700/80'"
                class="px-2 py-2 rounded flex-1 cursor-pointer text-white transition-colors border border-transparent"
            >
                Only One Way
            </button>

            <button
                @click="filterStore.toggleHideOneWay()"
                :class="filterStore.modifiers.hideOneWay ? 'bg-zinc-600 hover:bg-zinc-600/80 border-zinc-400' : 'bg-zinc-700 hover:bg-zinc-700/80'"
                class="px-2 py-2 rounded flex-1 cursor-pointer text-white transition-colors border border-transparent"
            >
                Hide One Way
            </button>
        </div>
        <div v-if="filterStore.selectedNades.includes(GrenadeTypes.FLASH)" class="flex gap-3 mt-5">
            <button
                @click="filterStore.toggleSelfFlash()"
                :class="filterStore.modifiers.onlySelfFlash ? 'bg-zinc-600 hover:bg-zinc-600/80 border-zinc-400' : 'bg-zinc-700 hover:bg-zinc-700/80'"
                class="px-2 py-2 rounded flex-1 cursor-pointer text-white transition-colors border border-transparent"
            >
                Only Self Flash
            </button>

            <button
                @click="filterStore.toggleHideSelfFlash()"
                :class="filterStore.modifiers.hideSelfFlash ? 'bg-zinc-600 hover:bg-zinc-600/80 border-zinc-400' : 'bg-zinc-700 hover:bg-zinc-700/80'"
                class="px-2 py-2 rounded flex-1 cursor-pointer text-white transition-colors border border-transparent"
            >
                Hide Self Flash
            </button>
        </div>
        <div class="mt-10" v-if="filterStore.selectedNades.includes('combination')">
            <BaseSelector 
                v-model="filterStore.selectedCombination"
                :items="combinations"
            />
        </div>
        <div class="mt-5">
            <button
                @click="filterStore.toggleViewMode()"
                class="w-full px-3 py-2 rounded text-white transition-colors"
                :class="filterStore.viewMode === ViewMode.LAND
                    ? 'bg-orange-500 hover:bg-orange-500/80 text-orange-200'
                    : 'bg-sky-500 hover:bg-sky-500/80 text-sky-200'"
            >
                {{
                    filterStore.viewMode == ViewMode.LAND
                        ? 'Show Standing Positions'
                        : 'Show Landing Positions'
                }}
            </button>
        </div>
        <div class="mt-10">
            <h2 class="text-white text-xl font-medium">Maps</h2>
            <ul class="mt-5 flex flex-col gap-3 relative">

                <div class="absolute left-0 w-full bg-zinc-800 rounded-sm transition-all duration-200 ease-in-out -z-10" :style="indicatorStyle"></div>

                <li v-for="(item, index) in maps" :key="index" :ref="el => setRef(el, item.id)">
                    <RouterLink :to="{ name: item.id }" class="flex items-center gap-5 p-2 rounded-sm cursor-pointer">
                        <img class="size-8" :src="`/img/maps/icons/${item.id}.webp`">
                        <h3 class="text-white">{{ item.title }}</h3>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>