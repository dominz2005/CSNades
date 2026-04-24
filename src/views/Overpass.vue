<script setup>
    import OverpassMap from '@/maps/OverpassMap.vue';

    import MapView from '../components/MapView.vue';

    import { overpassNades } from '@/lineups/overpass';
</script>

<template>
    <MapView map-name="overpass" :nades="overpassNades" aspect-ratio="1274 / 1632">
        <template #map>
            <OverpassMap />
        </template>
    </MapView>
</template>