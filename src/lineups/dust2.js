import { MouseAction, MovementTypes, PrecisionTypes, GrenadeTypes, Techniques, AimingTypes } from "@/assets/constants"

const rawNades = [
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 58.2, y: 66.9 },
        landPos: { x: 75.9, y: 13.4 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Backsite From Outside Long",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 148.031250 182.792068 72.156677;setang -35.046074 73.497963 0.000000",
            dir: "A Site/Backsite",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal A Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 58.2, y: 66.9 },
        landPos: { x: 82.7, y: 23.6 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "CT From Outside Long",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 148.031250 182.792068 72.156677;setang -36.993103 66.864983 0.000000",
            dir: "A Site/CT/From TT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal A Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 83.0, y: 47.4 },
        landPos: { x: 82.7, y: 23.6 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "CT From Long",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos 1100.331177 1052.055054 61.523193;setang -20.592142 42.742058 0.000000",
            dir: "A Site/CT/From lONG",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 58.2, y: 66.9 },
        landPos: { x: 80.8, y: 18.1 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Site From Outside Long",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 148.031250 183.776031 72.156677;setang -30.591164 68.152000 0.000000",
            dir: "A Site/Site",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal A Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 65.0, y: 34.1 },
        landPos: { x: 67.7, y: 24.2 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Short Close Entry",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 148.031250 183.776031 72.156677;setang -30.591164 68.152000 0.000000",
            dir: "A Site/Short/Entry Close",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Short A Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 65.0, y: 34.1 },
        landPos: { x: 67.7, y: 18.9 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.MIDDLE,
            aiming: AimingTypes.NORMAL,
            title: "Short Far Entry",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 148.031250 183.776031 72.156677;setang -30.591164 68.152000 0.000000",
            dir: "A Site/Short/Entry Far",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Short A Entry"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 40.0, y: 14.5 },
        landPos: { x: 9.4, y: 17.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Big Box From CT Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.EXACT,
            command: "setpos -618.028381 2549.982910 -18.244995;setang -18.249121 174.972961 0.000000",
            dir: "B Site/Big Box",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
            groups: ["B Entry From CT Mid"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 40.0, y: 14.5 },
        landPos: { x: 19.8, y: 19.3 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Doors Entry From CT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -618.034363 2549.986572 -18.244995;setang -35.904049 -139.172745 0.000000",
            dir: "B Site/Doors Entry",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["B Entry From CT Mid"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 23.1, y: 61.4 },
        landPos: { x: 24.2, y: 21.9 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Doors From Outside Tunnels",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1332.029785 491.968750 72.000000;setang -56.727127 87.009377 0.000000",
            dir: "B Site/Doors",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal B Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 23.1, y: 61.4 },
        landPos: { x: 23.0, y: 12.0 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Window From Outside Tunnels",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1332.029785 491.968750 72.000000;setang -50.919067 89.154243 0.000000",
            dir: "B Site/Window",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal B Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 23.1, y: 61.4 },
        landPos: { x: 7.8, y: 13.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Plat From Outside Tunnels",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1332.029785 491.968750 72.000000;setang -51.480083 107.766304 0.000000",
            dir: "B Site/Plat",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal B Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 23.1, y: 61.4 },
        landPos: { x: 17.0, y: 13.6 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Site From Outside Tunnels",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1332.029785 491.968750 72.000000;setang -52.470112 96.810417 0.000000",
            dir: "B Site/Site/Smoke",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal B Entry"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 29.4, y: 14.7 },
        landPos: { x: 19.1, y: 10.3 },
        information: {
            technique: Techniques.CROUCHJUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.CROUCH,
            title: "Site From Under Window",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1273.968750 2575.956787 130.081116;setang -2.937195 15.696205 0.000000",
            dir: "B Site/Site/Fire",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 30.5, y: 24.6 },
        landPos: { x: 23.4, y: 22.8 },
        information: {
            selfFlash: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.RIGHT,
            aiming: AimingTypes.NORMAL,
            title: "B Doors Enter",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1037.968628 2102.061279 50.705750;setang 3.167999 164.825333 0.000000",
            dir: "B Site/Doors Entry/Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 10.8, y: 13.8 },
        landPos: { x: 8.1, y: 25.4 },
        information: {
            selfFlash: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Tunnel Flash From Plat",
            movement: MovementTypes.WALKING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos -1786.737915 2618.168945 95.545792;setang 6.071800 -79.046867 0.000000",
            dir: "B Site/Tunnel Flash/From Plat",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 12.8, y: 30.9 },
        landPos: { x: 8.1, y: 25.4 },
        information: {
            selfFlash: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Tunnel Flash From Car",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1764.971680 1814.092896 66.153862;setang -12.573197 -25.190914 0.000000",
            dir: "B Site/Tunnel Flash/From Car",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 48.2, y: 42.2 },
        landPos: { x: 50.7, y: 24.1 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.CROUCH,
            title: "CT From XBOX",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.EXACT,
            command: "setpos -275.062622 1345.342651 -58.989990;setang -11.781198 129.315109 0.000000",
            dir: "CT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 77.9, y: 18.9 },
        landPos: { x: 89.6, y: 43.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Long From Elevator",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1004.965454 2379.968750 85.216515;setang -7.524241 -64.257088 0.000000",
            dir: "Long/CT Flash",
            images: ["lineup.jpg", "position.jpg"],
            group: ["CT Long Control"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 77.9, y: 18.9 },
        landPos: { x: 69.5, y: 55.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Long Doors From Elevator",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -275.062622 1345.342651 -58.989990;setang -11.781198 129.315109 0.000000",
            dir: "Long/Double Doors",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            group: ["CT Long Control"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 54.8, y: 86.7 },
        landPos: { x: 85.0, y: 45.2 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Long Corner From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1.636414 -660.059448 70.197701;setang -18.084206 57.510075 0.000000",
            dir: "Long/Long Corner",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            group: ["TT Long Entry"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 59.3, y: 75.6 },
        landPos: { x: 65.6, y: 52.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Long Entry From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 197.210220 -179.571167 72.000000;setang -4.488179 76.385834 0.000000",
            dir: "Long/TT Flash",
            images: ["lineup.jpg", "position.jpg"],
            group: ["TT Long Entry"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 43.4, y: 78.1 },
        landPos: { x: 51.5, y: 39.8 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Short From Suicide",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos -491.857117 -308.449585 64.480789;setang -17.754223 79.619675 0.000000",
            dir: "Short Fire",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
            groups: ["Mid Control"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 43.4, y: 78.1 },
        landPos: { x: 44.3, y: 35.3 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Mid Doors From Suicide",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -491.971924 -228.033386 64.018974;setang -25.905298 86.750565 0.000000",
            dir: "Mid/Doors/From Suicide",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Mid Control"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 67.6, y: 24.6 },
        landPos: { x: 45.7, y: 38.2 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Mid From A Short",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 526.319336 2068.044678 191.031158;setang -4.389220 -143.889252 0.000000",
            dir: "Mid/CT Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 68.6, y: 80.0 },
        landPos: { x: 44.3, y: 35.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Mid Doors From Outside Long",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 572.031250 -395.962280 71.983307;setang -17.556242 116.912659 0.000000",
            dir: "Mid/Doors/From Outside Long",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 47.1, y: 86.7 },
        landPos: { x: 44.3, y: 35.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Mid Doors From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.EXACT,
            command: "setpos -344.234436 -660.031250 151.032806;setang -14.883316 92.693481 0.000000",
            dir: "Mid/Doors/From TT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Mid Control"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 48.2, y: 42.2 },
        landPos: { x: 44.2, y: 33.3 },
        information: {
            selfFlash: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Mid Doors Entry From XBOX",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -275.031250 1345.354858 -58.990356;setang -37.554520 59.990417 0.000000",
            dir: "Mid/Doors Entry Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 28.7, y: 42.8 },
        landPos: { x: 42.1, y: 39.5 },
        information: {
            selfFlash: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Lower Tunnel Exit",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1125.923462 1272.684692 -46.104309;setang -19.272566 33.029419 0.000000",
            dir: "Mid/Lower Tunnel",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 48.3, y: 32.1 },
        landPos: { x: 45.7, y: 38.2 },
        information: {
            selfFlash: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Tunnel Entry From Close Mid Doors",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -276.035156 1744.031250 -41.200195;setang -18.150494 122.591347 0.000000",
            dir: "Mid/Tunnel Entry/Flash",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["Lower Tunnel Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 48.3, y: 32.1 },
        landPos: { x: 45.7, y: 43.9 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Tunnel Entry From Close Mid Doors",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -276.035156 1744.031250 -41.200195;setang -28.116541 122.360374 0.000000",
            dir: "Mid/Tunnel Entry/smoke",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Lower Tunnel Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 42.6, y: 87.3 },
        landPos: { x: 48.1, y: 39.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "XBOX Easy Smoke",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -511.996216 -662.537842 186.162476;setang -4.224493 83.915344 0.000000",
            dir: "Mid/XBOX/Easy",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 46.0, y: 95.0 },
        landPos: { x: 48.1, y: 39.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "XBOX Full Smoke",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -403.810242 -1051.966309 167.033524;setang -7.920493 87.779259 0.000000",
            dir: "Mid/XBOX/Full",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 67.6, y: 49.7 },
        landPos: { x: 67.7, y: 24.2 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.CROUCH,
            title: "CT Deep Smoke",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 516.029358 983.629028 64.430634;setang -53.163048 89.016006 0.000000",
            dir: "A Site/CT/Deep",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 96.9, y: 57.5 },
        landPos: { x: 81.7, y: 16.0 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Site From Pit Plat",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos 1768.968750 668.082886 119.937500;setang 5.741978 107.231956 0.000000",
            dir: "A Site/Site/Fire",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 72.6, y: 59.7 },
        landPos: { x: 65.6, y: 52.8 },
        information: {
            selfFlash: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Long Doors Exit Far",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 740.935120 565.968750 64.282921;setang -40.557098 152.177765 0.000000",
            dir: "Long/Double Doors/Exit Flash/Far",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 72.6, y: 59.7 },
        landPos: { x: 81.7, y: 16.0 },
        information: {
            selfFlash: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Long Doors Exit Close",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 740.935120 565.968750 64.282921;setang -57.387119 51.956860 0.000000",
            dir: "Long/Double Doors/Exit Flash/Close",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 15.8, y: 35.3 },
        landPos: { x: 17.4, y: 33.4 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.CROUCH,
            title: "Whole B Site From Car",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1616.347290 1641.301758 66.142120;setang -4.752133 48.359756 0.000000",
            dir: "B Site/Site From Car",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 46.2, y: 17.7 },
        landPos: { x: 45.7, y: 38.2 },
        information: {
            selfFlash: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Whole Mid From CT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -337.031250 2423.968994 -27.441956;setang -20.460142 -90.339195 0.000000",
            dir: "Mid/Whole Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
];

export const dust2Nades = rawNades.map(nade => {
    const slug = nade.information.title
        .toLowerCase()
        .replace(/\s+/g, '_');

    return {
        id: slug, ...nade,
    };
});