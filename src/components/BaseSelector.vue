<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        items: {
            type: Array,
            required: true, // [{ id, title }]
        },
        modelValue: {
            type: [String, Number, null],
            default: null
        },
        color: {
            type: String,
            default: 'violet' // sky | violet | orange itd.
        }
    });

    const emit = defineEmits(['update:modelValue']);

    const select = (id) => {
        emit('update:modelValue', props.modelValue === id ? null : id);
    };

    const activeClass = computed(() => {
        return {
            violet: 'bg-violet-500/20 text-violet-300 border-violet-400/30',
            sky: 'bg-sky-500/20 text-sky-300 border-sky-400/30',
            orange: 'bg-orange-500/20 text-orange-300 border-orange-400/30',
        }[props.color] || 'bg-zinc-600';
    });
</script>

<template>
    <div class="flex flex-wrap gap-2">
        <button
            v-for="item in items"
            :key="item.id"
            @click="select(item.id)"
            class="px-3 py-1 rounded text-sm border transition-all"
            :class="modelValue === item.id
                ? activeClass
                : 'bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700'"
        >
            {{ item.title }}
        </button>
    </div>
</template>