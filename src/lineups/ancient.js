import { MouseAction, MovementTypes, PrecisionTypes, GrenadeTypes, Techniques, AimingTypes } from "@/assets/constants"

const rawNades = [
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 8.7, y: 63.2 },
        landPos: { x: 33.7, y: 18.9 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "A CT Lane From Outside A",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -2143.972656 -1003.968750 52.828064;setang -30.030106 61.157955 0.000000",
            dir: "A Site/CT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal A Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 8.7, y: 63.2 },
        landPos: { x: 27.3, y: 31.4 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "A Donut From Outside A",
            movement: MovementTypes.JUMPSTEP,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos -2143.968750 -1003.951843 52.821655;setang -37.389126 72.509933 0.000000",
            dir: "A Site/Donut",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal A Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 8.7, y: 63.2 },
        landPos: { x: 9.8, y: 16.5 },
        information: {
            technique: Techniques.CROUCHJUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.CROUCH,
            title: "A Plat From Outside A",
            movement: MovementTypes.NORMAL,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -2143.967529 -1003.968323 52.826355;setang -48.939240 90.002991 0.000000",
            dir: "A Site/Plat",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal A Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 58.8, y: 4.1 },
        landPos: { x: 10.4, y: 35.2 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "A Main From CT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -66.027893 1771.940430 101.464455;setang -27.951139 -147.171036 0.000000",
            dir: "A Site/Main",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 36.9, y: 17.9 },
        landPos: { x: 25.9, y: 24.1 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.MIDDLE,
            aiming: AimingTypes.NORMAL,
            title: "A Site From CT Lane",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -877.984924 1143.145386 136.156845;setang -45.837231 -148.557114 0.000000",
            dir: "A Site/Site",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 43.5, y: 88.1 },
        landPos: { x: 66.3, y: 60.1 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Lamp Room From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -735.968750 -2135.972168 -103.489014;setang -33.462059 62.643040 0.000000",
            dir: "B Site/Cave/From TT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 91.7, y: 74.4 },
        landPos: { x: 76.3, y: 37.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Cave From Ruins",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -735.968750 -2135.972168 -103.489014;setang -33.462059 62.643040 0.000000",
            dir: "B Site/Cave/From Ruins",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal B Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 91.7, y: 74.4 },
        landPos: { x: 77.9, y: 30.9 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Short From Ruins",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1255.945190 -1483.953735 90.154114;setang -10.395222 109.337852 0.000000",
            dir: "B Site/Short/From Back",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal B Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 91.7, y: 74.4 },
        landPos: { x: 91.3, y: 35.1 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Long From Ruins",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1255.945190 -1483.953735 90.154114;setang -4.686223 88.415855 0.000000",
            dir: "B Site/Long/From Back",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal B Entry"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 91.7, y: 74.4 },
        landPos: { x: 78.4, y: 41.6 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Cave Exit From Ruins",
            movement: MovementTypes.STEP,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos 1255.937378 -1483.950439 90.149933;setang 1.286780 110.294655 0.000000",
            dir: "B Site/Site Fire/From Back",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
            groups: ["Normal B Entry", "Rush B Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 91.7, y: 74.4 },
        landPos: { x: 85.9, y: 40.8 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Full Site From Ruins",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.SIMPLE,
            command: "setpos 1255.972290 -1483.937256 90.158646;setang -50.985405 98.285706 0.000000",
            dir: "B Site/Site",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Rush B Entry"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 74.3, y: 45.8 },
        landPos: { x: 76.8, y: 37.7 },
        information: {
            selfFlash: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Cave Exit",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 539.968750 -182.947632 216.607880;setang -15.213220 147.320801 0.000000",
            dir: "B Site/Cave Exit",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 77.6, y: 39.2 },
        landPos: { x: 73.4, y: 41.7 },
        information: {
            selfFlash: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Cave Entry",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 648.031250 118.031563 196.781250;setang -21.219326 -30.648249 0.000000",
            dir: "B Site/CT Cave Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.DESTRUCTION,
        throwPos: { x: 77.6, y: 33.0 },
        landPos: { x: 77.6, y: 60.0 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Lane Destruction",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos 655.544128 385.969757 184.956055;setang -10.857314 -78.102196 0.000000",
            dir: "B Site/Lane Destruction",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 87.6, y: 62.9 },
        landPos: { x: 77.9, y: 30.9 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Short From Doors",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1058.198608 -936.844055 67.512627;setang -34.320404 109.736603 0.000000",
            dir: "B Site/Short/From Doors",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Doors B Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 87.6, y: 62.9 },
        landPos: { x: 91.3, y: 35.1 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Long From Doors",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1058.198608 -936.844055 67.512627;setang -3.795396 64.559532 0.000000",
            dir: "B Site/Long/From Doors",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Doors B Entry"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 87.6, y: 62.9 },
        landPos: { x: 78.4, y: 41.6 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Cave Exit From Doors",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1058.198608 -936.844055 67.512627;setang -30.360464 111.683441 0.000000",
            dir: "B Site/Site Fire/From Doors",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
            groups: ["Doors B Entry"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 87.6, y: 62.9 },
        landPos: { x: 76.8, y: 37.7 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Far Site From Doors",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1058.244141 -936.980042 67.512627;setang -3.597518 106.511642 0.000000",
            dir: "B Site/TT Flash/Far",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["Doors B Entry"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 87.6, y: 62.9 },
        landPos: { x: 82.0, y: 47.1 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.MIDDLE,
            aiming: AimingTypes.NORMAL,
            title: "Close Site From Doors",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1058.244141 -936.980042 67.512627;setang -3.597518 106.511642 0.000000",
            dir: "B Site/TT Flash/Close",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["Doors B Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 58.8, y: 4.1 },
        landPos: { x: 92.4, y: 49.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Ramp From CT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -66.039001 1771.968750 101.465118;setang -44.385521 -56.517601 0.000000",
            dir: "B Site/Ramp Entry",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 43.5, y: 88.1 },
        landPos: { x: 41.8, y: 45.7 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Donut From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -735.968750 -2135.972168 -103.489014;setang -27.357491 93.476685 0.000000",
            dir: "Mid/Donut",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 43.5, y: 88.1 },
        landPos: { x: 48.5, y: 36.4 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Top Mid From TT",
            movement: MovementTypes.JUMPSTEP,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos -735.965088 -2135.968750 -103.489868;setang -21.318521 85.526489 -0.000000",
            dir: "Mid/From TT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 43.5, y: 88.1 },
        landPos: { x: 57.5, y: 58.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Heaven From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -735.963318 -2135.968750 -103.490356;setang -29.238565 67.871422 0.000000",
            dir: "Mid/Heaven",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 24.3, y: 47.5 },
        landPos: { x: 32.3, y: 44.7 },
        information: {
            selfFlash: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Donut To Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1487.054443 -233.524658 170.000000;setang 8.348509 -41.328423 0.000000",
            dir: "Mid/Flash From Donut",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
];

const rawInsta = [
    {
        throwPos: { x: 52.2, y: 8.4 },
        landPos: { x: 39.5, y: 58.3 },
        title: "CT Instant Bottom Mid Smokes",
        dir: "Insta Mid CT Smokes",
        exec: "ancient_ct",
        shortcut: "F6",
        spawns: [
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.WALKING,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '23.29%', top: '30.78%', width: '8%', height: '17%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STEP,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '32.96%', top: '40.16%', width: '7%', height: '15%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STEP,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '46.29%', top: '40.16%', width: '7%', height: '15%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STEP,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '59.79%', top: '40.16%', width: '7%', height: '15%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.WALKING,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '67.46%', top: '31.25%', width: '9%', height: '17%' }
            },
        ]
    },
    {
        throwPos: { x: 52.2, y: 8.4 },
        landPos: { x: 88.1, y: 62.8 },
        title: "CT Instant B Doors Smokes",
        dir: "Insta B Doors Smokes",
        exec: "ancient_ct",
        shortcut: "F6",
        spawns: [
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.RUNNING,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '23.29%', top: '30.78%', width: '8%', height: '17%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.RUNNING,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '32.96%', top: '40.16%', width: '7%', height: '15%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.RUNNING,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '46.29%', top: '40.16%', width: '7%', height: '15%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.RUNNING,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '59.79%', top: '40.16%', width: '7%', height: '15%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.RUNNING,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '67.46%', top: '31.25%', width: '9%', height: '17%' }
            },
        ]
    },
    {
        throwPos: { x: 49.1, y: 92 },
        landPos: { x: 48.5, y: 36.4 },
        title: "TT Instant Top Mid Smokes",
        dir: "Insta Mid TT Smokes",
        exec: "ancient_tt",
        shortcut: "F7",
        spawns: [
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.JUMPSTEP,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '21.71%', top: '46.41%', width: '10%', height: '28%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.JUMPSTEP,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '57.46%', top: '34.84%', width: '7%', height: '23%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.JUMPSTEP,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '69.38%', top: '42.34%', width: '13%', height: '31%' }
            },
        ]
    },
];

export const ancientNades = rawNades.map(nade => {
    const slug = nade.information.title
        .toLowerCase()
        .replace(/\s+/g, '_');

    return {
        id: slug, ...nade,
    };
});
export const ancientInstaNades = rawInsta.map(nade => {
    const slug = nade.title
        .toLowerCase()
        .replace(/\s+/g, '_');

    return {
        id: slug, ...nade,
    };
});