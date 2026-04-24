<script setup>
    import Dust2Map from '@/maps/Dust2Map.vue';

    import MapView from '../components/MapView.vue';

    import { dust2Nades } from '@/lineups/dust2';
</script>

<template>
    <MapView map-name="dust2" :nades="dust2Nades" aspect-ratio="937 / 1000">
        <template #map>
            <Dust2Map />
        </template>
    </MapView>
</template>