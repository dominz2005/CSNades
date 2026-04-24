<script setup>
    import AnubisMap from '@/maps/AnubisMap.vue';

    import MapView from '../components/MapView.vue';

    import { anubisNades } from '@/lineups/anubis';
</script>

<template>
    <MapView map-name="anubis" :nades="anubisNades" aspect-ratio="1976 / 1976">
        <template #map>
            <AnubisMap />
        </template>
    </MapView>
</template>