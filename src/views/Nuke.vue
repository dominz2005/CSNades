<script setup>
    import { ref } from 'vue';

    import NukeMap from '@/maps/NukeMap.vue';

    import MapView from '../components/MapView.vue';

    import { nukeNades } from '@/lineups/nuke';

    const currentLevel = ref(1);
</script>

<template>
    <MapView map-name="nuke" :nades="nukeNades" aspect-ratio="1558 / 848" :current-level="currentLevel">
        <template #controls>
            <div class="bg-zinc-700 text-white flex flex-col rounded-xl overflow-hidden">
                <p class="p-4 pb-2 text-xl transition-colors cursor-pointer":class="currentLevel == 1 ? 'bg-zinc-600' : 'hover:bg-zinc-600/40'" @click="currentLevel = 1">1</p>
                <p class="p-4 pt-2 text-xl transition-colors cursor-pointer":class="currentLevel == 2 ? 'bg-zinc-600' : 'hover:bg-zinc-600/40'" @click="currentLevel = 2">2</p>
            </div>
        </template>
        <template #map>
            <NukeMap :current-level="currentLevel" />
        </template>
    </MapView>
</template>