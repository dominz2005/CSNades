<script setup>
    import MirageMap from '@/maps/MirageMap.vue';

    import MapView from '../components/MapView.vue';

    import { mirageNades } from '@/lineups/mirage';
</script>

<template>
    <MapView map-name="mirage" :nades="mirageNades">
        <template #map>
            <MirageMap />
        </template>
    </MapView>
</template>