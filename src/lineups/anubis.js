import { MouseAction, MovementTypes, PrecisionTypes, GrenadeTypes, Techniques, AimingTypes } from "@/assets/constants"

const rawNades = [
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 66.5, y: 50.3 },
        landPos: { x: 73.4, y: 24.2 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Backsite From Water",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 744.054932 666.237244 -44.000000;setang 8.051948 77.388039 0.000000",
            dir: "A Site/Backsite",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
            groups: ["Left A Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 66.5, y: 50.3 },
        landPos: { x: 71.4, y: 21.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Window From Water Left",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 744.031250 625.930664 -88.000000;setang -0.363278 78.909218 0.000000",
            dir: "A Site/Window/From Left",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Left A Entry"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 66.5, y: 50.3 },
        landPos: { x: 72.9, y: 32.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Whole Site From Water",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 744.038452 625.968750 -88.000000;setang -0.396246 79.071274 0.000000",
            dir: "A Site/Site Flash",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["Left A Entry"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 83.6, y: 36.6 },
        landPos: { x: 72.1, y: 46.1 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Water From Main",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1638.108643 1441.432617 -88.000000;setang -18.249279 -97.907684 0.000000",
            dir: "A Site/Water Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 76.0, y: 51.4 },
        landPos: { x: 67.6, y: 30.0 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Plat Bricks From Water",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1149.968750 610.032593 -124.896118;setang -31.020090 117.252045 0.000000",
            dir: "A Site/Plat Bricks",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Right A Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 76.0, y: 51.4 },
        landPos: { x: 71.4, y: 21.3 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Window From Water Right",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1149.967529 610.059326 -124.896118;setang -4.125278 93.990181 0.000000",
            dir: "A Site/Window/From Right",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Right A Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 76.0, y: 51.4 },
        landPos: { x: 64.8, y: 37.7 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Camera From Water",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "etpos 1259.958374 600.031250 -52.000000;setang -23.265255 125.631371 -0.000000",
            dir: "A Site/Camera",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Right A Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 41.1, y: 19.5 },
        landPos: { x: 76.6, y: 46.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Main Blockage From CT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -607.961853 2270.968750 88.015625;setang -26.400028 -38.081718 0.000000",
            dir: "A Site/Main/Blockage/From CT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 73.6, y: 35.9 },
        landPos: { x: 76.6, y: 46.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Main Blockage From Site",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1140.994995 1405.039185 -59.930908;setang -30.459017 -141.899979 -0.000000",
            dir: "A Site/Main/Blockage/From Site",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 83.3, y: 26.4 },
        landPos: { x: 83.5, y: 30.6 },
        information: {
            selfFlash: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Main Close From Pillar",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1623.427612 1873.872070 -8.468750;setang 5.741750 -130.382690 0.000000",
            dir: "A Site/Main/Pillar/Close",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 83.3, y: 26.4 },
        landPos: { x: 84.0, y: 34.5 },
        information: {
            selfFlash: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Main Far From Pillar",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1615.335815 1833.002563 -6.843750;setang 6.302750 -131.372635 0.00000",
            dir: "A Site/Main/Pillar/Far",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 27.9, y: 68.9 },
        landPos: { x: 36.5, y: 51.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Backsite From Long",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1267.942749 -314.837402 68.209152;setang -26.400297 88.578125 0.000000",
            dir: "B Site/Backsite/From Long",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["B Entry Easy"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 27.9, y: 68.9 },
        landPos: { x: 34.9, y: 56.6 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Connector From Long V2",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1267.958862 -314.821655 68.210358;setang -26.236120 89.541039 0.000000",
            dir: "B Site/Connector/Version 2",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["B Entry Easy", "B Entry Full"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 27.9, y: 68.9 },
        landPos: { x: 28.35, y: 42.1 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "CT From Long",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1267.926147 -314.786865 68.206917;setang -46.498222 81.620750 0.000000",
            dir: "B Site/CT/From TT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["B Entry Full"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 27.9, y: 68.9 },
        landPos: { x: 34.6, y: 41.5 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Temple From Long",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.EXACT,
            command: "setpos -1267.937134 -314.500610 68.203690;setang -45.838493 69.383820 0.000000",
            dir: "B Site/Temple/From TT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["B Entry Full"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 27.9, y: 68.9 },
        landPos: { x: 34.9, y: 56.6 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Connector From Long V1",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1267.958862 -314.821655 68.210358;setang -49.237194 66.836945 0.000000",
            dir: "B Site/Connector/Version 1",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["B Entry Easy", "B Entry Full"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 34.0, y: 89.4 },
        landPos: { x: 28.3, y: 47.7 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "CT For Rush From Ruins",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -938.356750 -1363.427246 129.125000;setang -12.112164 100.166969 0.000000",
            dir: "B Site/CT/For Rush",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 33.8, y: 48.8 },
        landPos: { x: 37.0, y: 56.7 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Connector From Site",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -959.968323 744.054626 60.500000;setang -29.173164 -98.924995 -0.000000",
            dir: "B Site/Connector Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 40.3, y: 52.6 },
        landPos: { x: 33.8, y: 52.7 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.RIGHT,
            aiming: AimingTypes.NORMAL,
            title: "Full Site From Backsite",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -578.958679 496.956360 102.031250;setang -28.612383 179.835144 0.000000",
            dir: "B Site/God Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 53.1, y: 61.1 },
        landPos: { x: 36.5, y: 51.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Backsite From Water",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 165.600357 33.083534 -88.000000;setang -71.512062 149.073120 0.000000",
            dir: "B Site/Backsite/From Water",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["B Entry From Water"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 53.1, y: 61.1 },
        landPos: { x: 28.5, y: 38.2 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Backsite From Water",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 165.628479 33.039577 -88.000000;setang -50.623341 143.204910 0.000000",
            dir: "B Site/Backsite/From Water",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["B Entry From Water"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 37.3, y: 61.8 },
        landPos: { x: 39.5, y: 49.2 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Backsite From Connector",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -789.968750 52.053066 -27.953125;setang -23.761036 72.213165 0.000000",
            dir: "B Site/Backsite/Molotov",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
            groups: ["B Entry From Connector"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 37.3, y: 61.8 },
        landPos: { x: 34.6, y: 41.5 },
        information: {
            technique: Techniques.CROUCHJUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Temple From Connector",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -789.968750 52.032421 -27.953125;setang -22.705465 65.126808 0.000000",
            dir: "B Site/Temple/From Connector",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["B Entry From Connector"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 46.6, y: 96.6 },
        landPos: { x: 50.4, y: 49.6 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Mid From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -299.308960 -1723.968750 66.000000;setang -12.376455 84.959885 0.000000",
            dir: "Mid",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 46.6, y: 96.6 },
        landPos: { x: 50.4, y: 49.6 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Connector From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -299.308960 -1723.968750 66.000000;setang -12.376455 84.959885 0.000000",
            dir: "Mid/Connector",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 46.6, y: 96.6 },
        landPos: { x: 56.5, y: 53.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Window From TT",
            movement: MovementTypes.WALKING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos -299.978333 -1723.968750 66.000000;setang -19.009537 77.864830 -0.000000",
            dir: "Mid/Window",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.DESTRUCTION,
        throwPos: { x: 29.6, y: 85.5 },
        landPos: { x: 56.5, y: 53.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Window From TT",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos -1151.940430 -1144.015381 128.000000;setang 9.502462 47.538017 0.000000",
            dir: "Mid/Window",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 40.4, y: 75.1 },
        landPos: { x: 59.7, y: 38.1 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Cameras From Top Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -605.012390 -630.968201 128.000000;setang -13.993455 61.991955 0.000000",
            dir: "Mid/Cameras Entry",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 56.6, y: 76.6 },
        landPos: { x: 56.6, y: 33.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "B Connector From Top Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 223.027634 -711.968750 63.265686;setang -21.385433 89.978867 0.000000",
            dir: "Mid/Temple Entry",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 41.1, y: 72.9 },
        landPos: { x: 49.9, y: 60.0 },
        information: {
            selfFlash: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Bridge From Top Mid",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos -584.340027 -519.533691 128.000000;setang 13.792539 67.734024 0.000000",
            dir: "Mid/Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 26.6, y: 44.0 },
        landPos: { x: 61.3, y: 60.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Water From B",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1335.937256 1052.012695 64.031250;setang -10.858562 -31.433996 0.000000",
            dir: "Water/From B",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 41.1, y: 19.5 },
        landPos: { x: 61.3, y: 60.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.CROUCH,
            title: "Water From CT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -543.021545 2270.904297 88.015625;setang -30.790630 -66.213219 0.000000",
            dir: "Water/From CT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 26.6, y: 44.0 },
        landPos: { x: 67.3, y: 64.4 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Stairs From B",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1329.120728 900.036316 64.000000;setang -23.398714 -23.115124 0.000000",
            dir: "Water/Stairs/From B",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 58.2, y: 49.6 },
        landPos: { x: 50.1, y: 52.5 },
        information: {
            selfFlash: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Mid From Doors",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1503.062256 2652.453613 69.424965;setang -2.607015 -37.227917 0.000000",
            dir: "Mid/CT Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
];

const rawInsta = [
    {
        throwPos: { x: 41.5, y: 22.3 },
        landPos: { x: 67.3, y: 64.4 },
        title: "CT Instant Stairs Smokes",
        dir: "Insta Stairs Smokes",
        exec: "anubis",
        shortcut: "F6",
        spawns: [
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STATIONARY,
                precision: PrecisionTypes.RELAXED,
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STATIONARY,
                precision: PrecisionTypes.RELAXED,
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STATIONARY,
                precision: PrecisionTypes.RELAXED,
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STEP,
                precision: PrecisionTypes.DYNAMIC,
            },
        ]
    },
];

export const anubisNades = rawNades.map(nade => {
    const slug = nade.information.title
        .toLowerCase()
        .replace(/\s+/g, '_');

    return {
        id: slug, ...nade,
    };
});
export const anubisInstaNades = rawInsta.map(nade => {
    const slug = nade.title
        .toLowerCase()
        .replace(/\s+/g, '_');

    return {
        id: slug, ...nade,
    };
});