<script setup>
    import { GrenadeTypes } from '@/assets/constants';

    import SmokeIcon from '@/icons/SmokeIcon.vue';
    import FlashIcon from '@/icons/FlashIcon.vue';
    import FireIcon from '@/icons/FireIcon.vue';
    import HeIcon from '@/icons/HeIcon.vue';
    import DestructionIcon from '@/icons/DestructionIcon.vue';
    
    const props = defineProps({
        type: { 
            type: String, 
            required: true,
            validator: (value) => Object.values(GrenadeTypes).includes(value)
        },
        showGrenades: { type: Boolean, required: true },
    });
</script>

<template>
    <div v-if="showGrenades">
        <SmokeIcon class="w-13" v-if="type == GrenadeTypes.SMOKE" />
        <FlashIcon class="w-13" v-if="type == GrenadeTypes.FLASH" />
        <FireIcon class="w-13" v-if="type == GrenadeTypes.FIRE" />
        <HeIcon class="w-13" v-if="type == GrenadeTypes.HE" />
        <DestructionIcon class="w-13" v-if="type == GrenadeTypes.DESTRUCTION" />
    </div>
    <div v-else class="size-13 border-2 bg-171717 border-gray-200 bg-gray-200/40 border-dashed rounded-full opacity-90 transition hover:opacity-100 hover:scale-105 cursor-pointer"></div>
</template>