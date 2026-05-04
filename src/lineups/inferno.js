import { MouseAction, MovementTypes, PrecisionTypes, GrenadeTypes, Techniques, AimingTypes } from "@/assets/constants"

const rawNades = [
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 21.0, y: 69.8 },
        landPos: { x: 79.7, y: 51.4 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Arch From TT",
            movement: MovementTypes.WALKING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos -858.968506 450.638672 36.013855;setang -30.096058 16.201122 0.000000",
            dir: "A Site/Arch/From TT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["A Entry From TT"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 21.0, y: 69.8 },
        landPos: { x: 94.0, y: 56.6 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Library From TT",
            movement: MovementTypes.WALKING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos -858.961609 450.634857 36.014465;setang -29.601244 13.354269 0.000000",
            dir: "A Site/Library/From TT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["A Entry From TT"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 21.0, y: 69.8 },
        landPos: { x: 62.2, y: 21.9 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "CT From TT",
            movement: MovementTypes.WALKING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos -858.947144 450.638672 36.013855;setang -39.742065 52.078384 -0.000000",
            dir: "B Site/CT/From TT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 26.7, y: 86.5 },
        landPos: { x: 70.7, y: 66.6 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Left Side Of Top Mid",
            movement: MovementTypes.JUMPSTEP,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -638.393677 -266.968750 66.825943;setang -34.907303 24.801943 0.000000",
            dir: "A Site/Top Mid Left",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 54.9, y: 86.8 },
        landPos: { x: 79.7, y: 51.4 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Arch From Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 626.828674 -264.968750 153.000000;setang -54.384022 50.821098 0.000000",
            dir: "A Site/Arch/From Mid",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["A Full Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 54.9, y: 86.8 },
        landPos: { x: 89.9, y: 77.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Hide Pit From Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 626.759888 -264.970825 153.000000;setang -55.143112 12.436141 0.000000",
            dir: "A Site/Hide Pit/From Mid",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["A Full Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 54.9, y: 86.8 },
        landPos: { x: 90.1, y: 62.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Hide Short From Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 626.707642 -264.968750 153.000000;setang -41.679214 30.484243 0.000000",
            dir: "A Site/Hide Short/From Mid",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["A Full Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 54.9, y: 86.8 },
        landPos: { x: 94.0, y: 56.6 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Library From Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 626.707642 -264.968750 153.000000;setang -39.105228 38.140171 0.000000",
            dir: "A Site/Library/From Mid",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["A Full Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 95.5, y: 85.2 },
        landPos: { x: 90.1, y: 62.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.MIDDLE,
            aiming: AimingTypes.NORMAL,
            title: "Hide Short From Pit",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.SIMPLE,
            command: "setpos 2610.490967 -268.146606 162.062500;setang 3.992885 106.354271 0.000000",
            dir: "A Site/Hide Short/From Pit",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 83.1, y: 54.2 },
        landPos: { x: 89.9, y: 77.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.MIDDLE,
            aiming: AimingTypes.NORMAL,
            title: "Hide Pit From Long",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1963.590088 1235.967163 236.983078;setang -3.828114 -53.860767 0.000000",
            dir: "A Site/Hide Pit/From Long",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 75.6, y: 87.9 },
        landPos: { x: 83.3, y: 82.4 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Balcony Entry",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1607.613159 -274.549072 320.000000;setang -9.768043 -46.729908 0.000000",
            dir: "A Site/Balcony Entry/Smoke",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["A Balcony Entry"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 75.6, y: 87.9 },
        landPos: { x: 87.7, y: 87.9 },
        information: {
            selfFlash: true,
            technique: Techniques.CROUCH,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.CROUCH,
            title: "Balcony Entry",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.SIMPLE,
            command: "setpos 1580.865601 -377.968750 320.000000;setang -26.400091 -29.800926 0.000000",
            dir: "A Site/Balcony Entry/Smoke",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["A Balcony Entry"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 85.4, y: 88.3 },
        landPos: { x: 85.6, y: 80.7 },
        information: {
            selfFlash: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "A Short From Balcony",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1580.865601 -377.968750 320.000000;setang -26.400091 -29.800926 0.000000",
            dir: "A Site/Balcony Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 56.2, y: 74.4 },
        landPos: { x: 71.0, y: 73.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "A Short From Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.SIMPLE,
            command: "setpos 729.031250 219.338974 155.164581;setang -20.361252 44.047276 0.000000",
            dir: "A Site/Short",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 72.8, y: 65.7 },
        landPos: { x: 60.5, y: 69.9 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Mid Entry",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1512.925537 717.955200 193.857559;setang 7.721745 -148.012787 0.000000",
            dir: "A Site/Mid Entry/Smoke",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 68.7, y: 78.4 },
        landPos: { x: 67.8, y: 70.8 },
        information: {
            selfFlash: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Mid Entry",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1355.031250 25.040813 196.013733;setang -19.668291 50.815273 0.000000",
            dir: "A Site/Mid Entry/Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 50.3, y: 37.0 },
        landPos: { x: 41.7, y: 25.1 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Behind New Box From Banana",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 479.056458 2016.968384 199.999954;setang -9.075291 123.481255 0.000000",
            dir: "B Site/Behind Site",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
            groups: ["Full B Entry", "Full B Fire"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 50.3, y: 37.0 },
        landPos: { x: 50.2, y: 26.6 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Boost From Banana",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 479.056458 2016.968384 199.999954;setang -36.729328 134.569321 0.000000",
            dir: "B Site/Boost",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
            groups: ["Full B Entry", "Full B Fire"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 54.2, y: 39.9 },
        landPos: { x: 41.3, y: 13.0 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Dark From Banana",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 662.946411 1880.031250 234.000000;setang 4.388606 115.132248 0.000000",
            dir: "B Site/Dark",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
            groups: ["Full B Entry", "Full B Fire"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 50.3, y: 40.7 },
        landPos: { x: 51.0, y: 12.6 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Coffins From Banana",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 457.284210 1833.328613 199.999969;setang 0.791685 84.904381 0.000000",
            dir: "B Site/Coffins/Molotov",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
            groups: ["Full B Fire"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 48.2, y: 44.6 },
        landPos: { x: 51.0, y: 12.6 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Coffins From Banana",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.EXACT,
            command: "setpos 369.521820 1664.036011 196.453186;setang -1.221315 82.261292 0.000000",
            dir: "B Site/Coffins/Smoke",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Full B Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 42.8, y: 46.8 },
        landPos: { x: 62.2, y: 21.9 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Complete CT From Logs",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.EXACT,
            command: "setpos 120.587143 1593.892456 170.043839;setang -33.066353 59.227116 0.000000",
            dir: "B Site/CT/Complete",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Full B Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 46.3, y: 45.7 },
        landPos: { x: 62.2, y: 21.9 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Easy CT From Banana",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 369.486115 1664.053345 196.453186;setang -33.000336 64.408073 0.000000",
            dir: "B Site/CT/Easy",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Full B Entry"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 42.8, y: 46.8 },
        landPos: { x: 54.9, y: 24.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Close B Entry",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 120.613060 1593.876709 170.043182;setang -1.617393 58.639065 0.000000",
            dir: "B Site/Entry Flash/First",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["Full B Entry"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 42.8, y: 46.8 },
        landPos: { x: 59.0, y: 28.0 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Far B Entry",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 120.613060 1593.876709 170.043182;setang 1.418606 47.254036 0.000000",
            dir: "B Site/Entry Flash/Second",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["Full B Entry"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 61.1, y: 20.8 },
        landPos: { x: 50.3, y: 34.3 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Banana From CT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 970.928589 2779.948975 196.124435;setang -30.195343 -128.413849 0.000000",
            dir: "B Site/CT Flash/Banana",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 68.7, y: 23.0 },
        landPos: { x: 58.0, y: 22.8 },
        information: {
            selfFlash: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.MIDDLE,
            aiming: AimingTypes.NORMAL,
            title: "B Banana Entry From CT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1311.969238 2648.031250 198.488632;setang -48.510403 -179.497742 0.000000",
            dir: "B Site/CT Flash/Entry",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 50.6, y: 27.1 },
        landPos: { x: 54.9, y: 24.3 },
        information: {
            selfFlash: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "B Banana Entry From Boost",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 498.970490 2439.028320 231.000000;setang -16.401402 156.247391 0.000000",
            dir: "B Site/CT Flash/From Boost",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 51.6, y: 10.2 },
        landPos: { x: 52.3, y: 18.0 },
        information: {
            selfFlash: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.RIGHT,
            aiming: AimingTypes.NORMAL,
            title: "B Site Entry From Coffins",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 539.968750 3325.156982 231.000000;setang 10.955599 -92.572723 0.000000",
            dir: "B Site/CT Flash/From Coffin",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 54.5, y: 35.8 },
        landPos: { x: 47.6, y: 39.6 },
        information: {
            selfFlash: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Banana CT Self Flash",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos 759.680420 2165.742432 200.000046;setang 2.045600 -127.717789 0.000000",
            dir: "B Site/CT Flash/Self Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.DESTRUCTION,
        throwPos: { x: 43.1, y: 13.6 },
        landPos: { x: 51.0, y: 37.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Banana Destruction",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos 141.300507 3074.957520 225.562500;setang -5.115392 -68.743797 0.000000",
            dir: "B Site/Destruction",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 21.0, y: 69.8 },
        landPos: { x: 48.7, y: 37.9 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Banana From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -892.063477 484.029236 30.028625;setang -49.302395 48.474960 0.000000",
            dir: "Banana",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 92.7, y: 45.2 },
        landPos: { x: 48.7, y: 37.9 },
        information: {
            oneWay: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Banana One Way From CT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 2447.002441 1660.205566 246.749603;setang -15.510486 170.146072 0.000000",
            dir: "Banana/One Way CT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 84.2, y: 39.2 },
        landPos: { x: 42.8, y: 58.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Banana From CT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 2035.968384 1914.968750 202.945419;setang -38.247498 -158.107925 0.000000",
            dir: "Banana/From CT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 26.0, y: 71.8 },
        landPos: { x: 42.5, y: 59.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Banana From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -656.044556 437.031250 104.036270;setang -8.019414 46.593952 0.000000",
            dir: "Banana/Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 21.0, y: 69.8 },
        landPos: { x: 66.6, y: 69.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Top Mid From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -884.626831 569.968750 31.737244;setang -14.487441 0.064050 0.000000",
            dir: "Mid/Top Mid",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 84.2, y: 54.3 },
        landPos: { x: 40.0, y: 65.4 },
        information: {
            oneWay: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.CROUCH,
            title: "Bottom Mid One Way To Banana",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1946.030029 1235.947388 235.965027;setang -19.569494 -166.357834 0.000000",
            dir: "Mid/Bottom Mid",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 52.5, y: 70.1 },
        landPos: { x: 94.0, y: 56.6 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Library From First Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 228.915527 526.060791 148.568741;setang -29.436560 14.980051 0.000000",
            dir: "Mid To CT To B/Smoke",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Mid To B"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 52.5, y: 70.1 },
        landPos: { x: 70.8, y: 66.0 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Top Mid Full Flash",
            movement: MovementTypes.STEP,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 228.915527 526.060791 148.568741;setang -3.729555 7.291053 0.000000",
            dir: "Mid To CT To B/Flash",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["Mid To B"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 68.1, y: 54.4 },
        landPos: { x: 73, y: 59.8 },
        information: {
            oneWay: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.MIDDLE,
            aiming: AimingTypes.NORMAL,
            title: "Top Mid Long One Way",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1293.038696 1227.931030 245.000000;setang -43.923641 -40.756916 0.000000",
            dir: "One Way Smoke/Long",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 78.2, y: 78.1 },
        landPos: { x: 72.8, y: 81.0 },
        information: {
            oneWay: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.MIDDLE,
            aiming: AimingTypes.NORMAL,
            title: "Top Mid Short One Way",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1749.033203 131.968750 197.629120;setang -14.520639 -151.078796 0.000000",
            dir: "One Way Smoke/Short",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 50.4, y: 40.2 },
        landPos: { x: 45.6, y: 44.6 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Whole Banana",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.SIMPLE,
            command: "setpos 457.229431 1833.358765 199.999969;setang -44.721069 -126.846191 0.000000",
            dir: "Banana/Whole",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
];

const rawInsta = [
    {
        throwPos: { x: 92.6, y: 35.2 },
        landPos: { x: 48.7, y: 37.9 },
        title: "CT Instant Banana Smokes",
        dir: "Insta Banana Smoke",
        exec: "inferno",
        shortcut: "F6",
        spawns: [
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STATIONARY,
                precision: PrecisionTypes.RELAXED,
                position: { left: '43%', top: '11.6%', width: '7%', height: '22%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STATIONARY,
                precision: PrecisionTypes.RELAXED,
                position: { left: '35.88%', top: '28.91%', width: '7%', height: '18%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STATIONARY,
                precision: PrecisionTypes.RELAXED,
                position: { left: '51.54%', top: '40.47%', width: '7%', height: '17%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STATIONARY,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '40.66%', top: '64.22%', width: '6.5%', height: '15%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STATIONARY,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '53.79%', top: '68.44%', width: '7%', height: '17%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STATIONARY,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '61.88%', top: '57.66%', width: '9%', height: '17%' }
            },
        ]
    },
    {
        throwPos: { x: 92.6, y: 35.2 },
        landPos: { x: 50.3, y: 69.0 },
        title: "CT Instant Mid Smokes",
        dir: "Insta Mid CT Smokes",
        exec: "inferno",
        shortcut: "F6",
        spawns: [
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STATIONARY,
                precision: PrecisionTypes.RELAXED,
                position: { left: '43%', top: '11.6%', width: '7%', height: '22%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STATIONARY,
                precision: PrecisionTypes.RELAXED,
                position: { left: '35.88%', top: '28.91%', width: '7%', height: '18%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STATIONARY,
                precision: PrecisionTypes.RELAXED,
                position: { left: '51.54%', top: '40.47%', width: '7%', height: '17%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.JUMP,
                precision: PrecisionTypes.RELAXED,
                position: { left: '40.66%', top: '64.22%', width: '6.5%', height: '15%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.JUMPSTEP,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '53.79%', top: '68.44%', width: '7%', height: '17%' }
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.JUMPSTEP,
                precision: PrecisionTypes.DYNAMIC,
                position: { left: '61.88%', top: '57.66%', width: '9%', height: '17%' }
            },
        ]
    },
];


export const infernoNades = rawNades.map(nade => {
    const slug = nade.information.title
        .toLowerCase()
        .replace(/\s+/g, '_');

    return {
        id: slug, ...nade,
    };
});
export const infernoInstaNades = rawInsta.map(nade => {
    const slug = nade.title
        .toLowerCase()
        .replace(/\s+/g, '_');

    return {
        id: slug, ...nade,
    };
});