<script setup>
    import AncientMap from '@/maps/AncientMap.vue';

    import MapView from '../components/MapView.vue';

    import { ancientNades } from '@/lineups/ancient';
</script>

<template>
    <MapView map-name="ancient" :nades="ancientNades" aspect-ratio="880 / 1000">
        <template #map>
            <AncientMap />
        </template>
    </MapView>
</template>