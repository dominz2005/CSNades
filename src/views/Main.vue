<script setup>
    import { allNades } from '@/lineups/all';

    const maps = [
        { id: "mirage", title: "Mirage" },
        { id: "dust2", title: "Dust 2" },
        { id: "overpass", title: "Overpass" },
        { id: "ancient", title: "Ancient" },
        { id: "inferno", title: "Inferno" },
        { id: "anubis", title: "Anubis" },
        { id: "nuke", title: "Nuke" },
    ];
</script>

<template>
    <main class="min-h-screen w-full bg-neutral-950 py-10 flex items-center">
        <div class="max-w-7xl mx-auto px-6 flex-1">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <RouterLink 
                    v-for="(item, index) in maps" 
                    :to="{ name: item.id }"
                    :key="index"
                    class="group relative rounded-2xl overflow-hidden cursor-pointer"
                >
                    <div 
                        class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        :style="`background-image: url('/img/maps/background/${item.id}.webp')`"
                    ></div>
                    <div class="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition"></div>
                    <div class="relative z-10 p-6 h-48 flex flex-col justify-between">
                        <div class="flex items-center gap-4">
                            <img 
                                :src="`/img/maps/icons/${item.id}.webp`"
                                class="w-12 h-12 object-contain drop-shadow-lg"
                            >
                            <h2 class="text-white text-xl font-semibold">
                                {{ item.title }}
                            </h2>
                        </div>
                        <div class="flex items-end justify-between">
                            <p class="text-sm text-gray-300">
                                Grenades
                            </p>
                            <div class="text-2xl font-bold text-white">
                                {{ allNades.filter(nade => nade.map == item.id).length }}
                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/30 transition"></div>
                </RouterLink>
            </div>
        </div>
    </main>
</template>