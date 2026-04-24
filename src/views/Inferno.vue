<script setup>
    import InfernoMap from '@/maps/InfernoMap.vue';

    import MapView from '../components/MapView.vue';

    import { infernoNades } from '@/lineups/inferno';
</script>

<template>
    <MapView map-name="inferno" :nades="infernoNades" aspect-ratio="1500 / 1491">
        <template #map>
            <InfernoMap />
        </template>
    </MapView>
</template>