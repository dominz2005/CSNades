<script setup>
    import { ref } from 'vue';

    import ThrowIcon from './ThrowIcon.vue';
import { GrenadeTypes } from '@/assets/constants';
    
    const props = defineProps({
        map: { type: String, required: true },
        fromThrow: { type: Boolean, default: false },
        mainPos: { type: Object, required: true },
        endPos: { type: Object, required: true },
        aspectRatio: { type: String, required: true },
        scale: { type: Number, default: 1 }
    });

    const getPositionStyle = (pos) => ({
        left: `${pos.x}%`,
        top: `${pos.y}%`
    });

    defineEmits(['toggle']);
</script>

<template>
    <div ref="containerRef" @click.stop>
        <div class="absolute -translate-x-1/2 -translate-y-1/2 z-10 opacity-70 transition hover:opacity-100 hover:scale-110 cursor-pointer" :style="getPositionStyle(mainPos)">
            <ThrowIcon :type="GrenadeTypes.SMOKE" :show-grenades="!fromThrow" />
        </div>
        <svg class="absolute inset-0 w-full h-full pointer-events-none z-5" :viewBox="`0 0 ${aspectRatio.replace('/', '')}`">
            <line 
                :x1="endPos.x + '%'" 
                :y1="endPos.y + '%'" 
                :x2="mainPos.x + '%'" 
                :y2="mainPos.y + '%'" 
                stroke="#e5e7eb" 
                stroke-width="2" 
                stroke-dasharray="5 4" 
            />
        </svg>
        <div 
            class="block absolute -translate-x-1/2 -translate-y-1/2 z-10 opacity-70 transition hover:opacity-100 hover:scale-110" 
            :style="getPositionStyle(endPos)" 
        >
            <ThrowIcon :type="GrenadeTypes.SMOKE" :show-grenades="fromThrow" />
        </div>
    </div>
</template>