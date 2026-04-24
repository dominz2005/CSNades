<script setup>
    import { useRoute } from 'vue-router';
    import { ref, computed } from 'vue';
    
    import 'viewerjs/dist/viewer.css';
    
    import { component as Viewer } from 'v-viewer';

    import { allNades } from '@/lineups/all';
    import { lineupDir, MouseAction, Techniques } from '@/assets/constants';

    import LeftClick from '@/icons/LeftClick.vue';
    import MiddleClick from '@/icons/MiddleClick.vue';
    import RightClick from '@/icons/RightClick.vue';
    import JumpIcon from '@/icons/JumpIcon.vue';
    import CrouchJumpIcon from '@/icons/CrouchJumpIcon.vue';
    import CrouchIcon from '@/icons/CrouchIcon.vue';

    import Arrow from '@/icons/Arrow.vue';
    import Camera from '@/icons/Camera.vue';
    import Crosshair from '@/icons/Crosshair.vue';
    import Command from '@/icons/Command.vue';

    const route = useRoute();

    const selectedGroup = ref(null);
    const videoVisible = ref(true);
    const currentImg = ref(0);

    const toggleGroupFilter = (group) => {
        selectedGroup.value = selectedGroup.value === group ? null : group;
    };

    const nade = computed(() => {
        return allNades.find(n => 
            n.id == route.params.id &&
            n.map == route.params.map &&
            n.type == route.params.type
        );
    });

    const showLineup = () => {
        videoVisible.value = false;
        currentImg.value = 0;
    };
    
    const nextImg = () => {
        currentImg.value = (currentImg.value + 1) % nade.value.information.images.length;
    }
    const previousImg = () => {
        currentImg.value = (currentImg.value - 1) % nade.value.information.images.length;
    }

    const copyCommand = async () => {
        try {
            await navigator.clipboard.writeText(nade.value.information.command);
            alert('Skopiowano do schowka!');
        } catch (err) {
            console.error('Błąd kopiowania:', err);
        }
    };

    const relatedNades = computed(() => {
        if (!nade.value?.information?.groups) return [];

        const groups = selectedGroup.value
            ? [selectedGroup.value]
            : nade.value.information.groups;

        return allNades.filter(n =>
            n.id !== nade.value.id &&
            n.map === nade.value.map &&
            n.information?.groups?.some(g => groups.includes(g))
        );
    });
</script>

<template>
    <main class="px-5 min-h-lvh flex flex-col gap-10" v-if="nade">
        <div class="py-10 box-border h-lvh flex flex-col gap-10">
            <RouterLink :to="{ name: nade.map }" class="flex gap-2 items-center group">
                <Arrow class="size-8 text-white rotate-180" />
                <p class="text-white text-2xl font-medium  group-hover:underline">
                    {{ nade.map.charAt(0).toUpperCase() + nade.map.slice(1) }} 
                    {{ nade.type.charAt(0).toUpperCase() + nade.type.slice(1) }}: 
                    {{ nade.information.title }}
                </p>
            </RouterLink>
            <div class="flex flex-1">
                <div class="w-full">
                    <video v-if="videoVisible" :src="`${lineupDir}${nade.map}/${nade.information.dir}/video.mp4`" class="w-full h-full object-cover" controls playsinline autoplay loop muted preload="metadata"></video>
                    <div class="w-full h-full" v-else>
                        <viewer class="w-full h-full relative" :options="{ toolbar: false, navbar: false, title: false }">
                            <div class="absolute left-5 top-1/2 -translate-y-1/2 bg-white rounded-full cursor-pointer" @click="previousImg">
                                <Arrow class="size-10 rotate-180" />
                            </div>
                            <div class="absolute right-5 top-1/2 -translate-y-1/2 bg-white rounded-full cursor-pointer" @click="nextImg">
                                <Arrow class="size-10" />
                            </div>
                            <img 
                                :src="`${lineupDir}${nade.map}/${nade.information.dir}/${nade.information.images[currentImg]}`" 
                                class="w-full h-full object-cover cursor-zoom-in"
                            />
                        </viewer>
                    </div>
                </div>
                <div class="p-5 py-0 min-w-84 max-w-96 flex flex-col">
                    <div class="flex bg-zinc-800 h-13 rounded-lg p-0.5 gap-0.5">
                        <div class="text-white flex items-center justify-center gap-3 flex-1 transition-colors hover:bg-zinc-700 rounded-lg cursor-pointer":class="{ 'bg-zinc-700' : videoVisible }" @click="videoVisible = true">
                            <Camera class="size-4" />
                            <p>Video</p>
                        </div>
                        <div class="text-white flex items-center justify-center gap-3 flex-1 transition-colors hover:bg-zinc-700 rounded-lg cursor-pointer":class="{ 'bg-zinc-700' : !videoVisible }" @click="showLineup">
                            <Crosshair class="size-4" />
                            <p>Lineup</p>
                        </div>
                    </div>
                    <div class="mt-10">
                        <h2 class="text-white text-lg mb-1.5">Technique</h2>
                        <div class="flex items-center gap-2">
                            <div class="text-white flex gap-1">
                                <JumpIcon class="size-5" v-if="nade.information.technique == Techniques.JUMP" />
                                <CrouchIcon class="size-5" v-if="nade.information.technique == Techniques.CROUCH" />
                                <CrouchJumpIcon class="size-5" v-if="nade.information.technique == Techniques.CROUCHJUMP" />
                                <LeftClick class="size-5" v-if="nade.information.mouseAction == MouseAction.LEFT" />
                                <MiddleClick class="size-5" v-if="nade.information.mouseAction == MouseAction.MIDDLE" />
                                <RightClick class="size-5" v-if="nade.information.mouseAction == MouseAction.RIGHT" />
                            </div>
                            <p class="text-white font-medium">
                                {{ nade.information.technique ? `${nade.information.technique} + ${nade.information.mouseAction}` : nade.information.mouseAction }}
                            </p>
                        </div>
                    </div>
                    <div class="mt-5">
                        <h2 class="text-white text-lg mb-1.5">Aiming</h2>
                        <p class="text-white font-medium">{{ nade.information.aiming }}</p>
                    </div>
                    <div class="mt-5">
                        <h2 class="text-white text-lg mb-1.5">Movement</h2>
                        <p class="text-white font-medium">{{ nade.information.movement }}</p>
                    </div>
                    <div class="mt-5">
                        <h2 class="text-white text-lg mb-1.5">Precision</h2>
                        <p class="text-white font-medium">{{ nade.information.precision }}</p>
                    </div>
                    <div class="mt-5" v-if="nade.information.groups?.length">
                        <h2 class="text-white text-lg mb-1.5">Groups</h2>

                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="group in nade.information.groups"
                                :key="group"
                                @click="toggleGroupFilter(group)"
                                class="px-2 py-1 rounded text-sm cursor-pointer transition-colors"
                                :class="selectedGroup === group
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'"
                            >
                                {{ group }}
                            </span>
                        </div>
                    </div>
                    <div class="mt-10 w-full bg-zinc-800 h-13 rounded-lg text-white flex gap-3 justify-center items-center cursor-pointer transition-colors hover:bg-zinc-700" @click="copyCommand">
                        <Command class="size-4" />
                        <p>Copy Command</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="groups mt-10 pb-10" v-if="relatedNades.length">
            <h2 class="text-white text-lg mb-3">Related Lineups</h2>

            <div class="grid grid-cols-3 gap-3">
                <RouterLink
                    v-for="item in relatedNades"
                    :key="item.id"
                    :to="{ name: 'nade-details', params: { id: item.id, type: item.type, map: item.map } }"
                    class="bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-lg overflow-hidden text-white"
                >
                    <div class="w-full bg-zinc-900">
                        <img
                            v-if="item.information.images?.length"
                            :src="`${lineupDir}${item.map}/${item.information.dir}/${item.information.images[0]}`"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div class="p-3 flex flex-col gap-1">
                        <p class="font-medium text-sm">
                            {{ item.information.title }}
                        </p>

                        <p class="text-xs text-zinc-400">
                            {{ item.information.groups?.join(', ') }}
                        </p>
                    </div>
                </RouterLink>
            </div>
        </div>
    </main>
    
    <main v-else class="flex justify-center items-center w-full h-full">
        <p>Nie znaleziono granatu.</p>
    </main>
</template>