<script setup>
    import { useRoute } from 'vue-router';
    import { ref, computed, watch } from 'vue';

    import 'viewerjs/dist/viewer.css';
    
    import { component as Viewer } from 'v-viewer';

    import { allInstaNades } from '@/lineups/all';
    import { lineupDir, MouseAction, Techniques } from '@/assets/constants';
    
    import Arrow from '@/icons/Arrow.vue';
    import JumpIcon from '@/icons/JumpIcon.vue';
    import CrouchIcon from '@/icons/CrouchIcon.vue';
    import CrouchJumpIcon from '@/icons/CrouchJumpIcon.vue';
    import LeftClick from '@/icons/LeftClick.vue';
    import MiddleClick from '@/icons/MiddleClick.vue';
    import RightClick from '@/icons/RightClick.vue';

    const route = useRoute();
    
    const videoVisible = ref([]);

    const nade = computed(() => {
        return allInstaNades.find(n => 
            n.id == route.params.id &&
            n.map == route.params.map &&
            n.type == route.params.type
        );
    });
    
    watch(nade, (newVal) => {
        if (newVal) {
            videoVisible.value = newVal.spawns.map(() => true);
        }
    }, { immediate: true });


    const imgRef = ref(null);

    const handleClick = (e) => {
        const img = imgRef.value;
        const rect = img.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        console.log({
            x: Number(x.toFixed(2)),
            y: Number(y.toFixed(2)),
        });
    };
</script>

<template>
    <main class="max-w-300 mx-auto mb-16 relative">
        <div class="fixed top-24 -ms-52 text-white flex flex-col gap-3 text-xl border-s ps-5">
            <a href="#spawns" class="p-0.5 hover:underline">Spawns</a>
            <a href="#commands" class="p-0.5 hover:underline">Commands</a>
            <a :href="`#spawn${index}`" class="p-0.5 hover:underline" v-for="(item, index) in nade.spawns">Spawn #{{ item.id != undefined ? item.id : index + 1 }}</a>
        </div>
        <RouterLink :to="{ name: nade.map }" class="flex gap-2 items-center group py-1 my-4">
            <Arrow class="size-8 text-white rotate-180" />
            <p class="text-white text-2xl font-medium  group-hover:underline">
                {{ nade.map.charAt(0).toUpperCase() + nade.map.slice(1) }}: 
                {{ nade.title }}
            </p>
        </RouterLink>
        <div>
            <img class="h-160 object-cover" :src="`${lineupDir}${nade.map}/${nade.dir}/smoke.jpg`">
        </div>
        <div class="mt-16" id="spawns">
            <h2 class="mb-4 text-white font-semibold text-4xl">Spawns</h2>
            <div class="relative w-full" @click="handleClick" ref="imgRef">
                <img class="w-full h-160" :src="`${lineupDir}${nade.map}/${nade.dir}/spawns.jpg`">
                <a
                    v-for="(item, index) in nade.spawns" :key="index"
                    :href="`#spawn${index}`"
                    class="absolute block w-4 h-4 border-2 border-zinc-800 bg-zinc-800/10 hover:bg-zinc-800/40 transition-colors duration-75 cursor-pointer transform"
                    :style="item.position"
                ></a>
            </div>
            <p class="italic text-zinc-300 my-4">Click on the spawn above to directly view the lineup</p>
        </div>
        <div class="mt-16" id="commands">
            <h2 class="mb-4 text-white font-semibold text-4xl">Spawn Practice Command</h2>
            <div class="space-y-3">
                <p class="text-zinc-300 leading-relaxed">
                    You can teleport to each spawn for practice with 
                    <span class="font-mono text-white bg-zinc-800/60 px-2 py-0.5 rounded">
                        exec {{ nade.exec }}
                    </span>
                </p>
                <p class="text-zinc-300 leading-relaxed">
                    Then you can use 
                    <span class="font-mono text-white bg-zinc-800/60 px-2 py-0.5 rounded">
                        {{ nade.shortcut }}
                    </span>
                    to teleport to each spawn
                </p>
            </div>
        </div>
        <div class="mt-16" v-for="(item, index) in nade.spawns" :key="index" :id="`spawn${index}`">
            <h2 class="mb-4 text-white font-semibold text-4xl">Spawn #{{ item.id != undefined ? item.id : index + 1 }}</h2>
            <div class="bg-zinc-800 border border-zinc-600 rounded-sm overflow-hidden">
                <div class="h-160">
                    <video v-if="videoVisible[index]" :src="`${lineupDir}${nade.map}/${nade.dir}/Spawn ${index + 1}/video.mp4`" class="w-full object-cover h-160" controls playsinline loop muted preload="metadata"></video>
                    <viewer v-else class="w-full h-full relative" :options="{ toolbar: false, navbar: false, title: false }">
                        <img 
                            :src="`${lineupDir}${nade.map}/${nade.dir}/Spawn ${index + 1}/lineup.jpg`" 
                            class="w-full h-full object-cover cursor-zoom-in"
                        />
                    </viewer>
                </div>
                <div class="flex justify-between p-2 px-4">
                    <p class="text-purple-400 text-lg cursor-pointer p-2" @click="videoVisible[index] = !videoVisible[index]">
                        View {{ videoVisible[index] ? 'Lineup' : 'Video' }}
                    </p>
                    <div class="flex gap-3 text-white justify-center items-center pe-2">
                        <div class="flex items-center gap-2">
                            <div class="text-white flex gap-1">
                                <JumpIcon class="size-5" v-if="item.technique == Techniques.JUMP" />
                                <CrouchIcon class="size-5" v-if="item.technique == Techniques.CROUCH" />
                                <CrouchJumpIcon class="size-5" v-if="item.technique == Techniques.CROUCHJUMP" />
                                <LeftClick class="size-5" v-if="item.mouseAction == MouseAction.LEFT" />
                                <MiddleClick class="size-5" v-if="item.mouseAction == MouseAction.MIDDLE" />
                                <RightClick class="size-5" v-if="item.mouseAction == MouseAction.RIGHT" />
                            </div>
                            <p class="text-white font-medium">
                                {{ item.technique ? `${item.technique} + ${item.mouseAction}` : item.mouseAction }}
                            </p>
                        </div>
                        <p>|</p>
                        <p class="text-white font-medium">{{ item.aiming }}</p>
                        <p>|</p>
                        <p class="text-white font-medium">{{ item.movement }}</p>
                        <p>|</p>
                        <p class="text-white font-medium">{{ item.precision }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>