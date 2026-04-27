import { MouseAction, MovementTypes, PrecisionTypes, GrenadeTypes, Techniques, AimingTypes } from "@/assets/constants"

const rawNades = [
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 73.4, y: 45.4 },
        landPos: { x: 43.8, y: 91.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Ticket Booth From Top Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 360.075562 -691.968628 -100.042786;setang -50.885986 -126.630371 0.000000",
            dir: "A Site/CT/From Mid",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 89.8, y: 54.4 },
        landPos: { x: 43.8, y: 91.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Ticket Booth From Ramp",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1081.907959 -1022.136230 -196.462952;setang -29.172007 -144.252197 0.000000",
            dir: "A Site/CT/From TT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal A Combo"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 82.9, y: 69.0 },
        landPos: { x: 48.2, y: 69.8 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Jungle And Connector from TRoof",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 814.937378 -1548.918579 -45.000000;setang -29.436005 -176.823166 0.000000",
            dir: "A Site/Fast Combo/Jungle and Connector",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Fast A Combo"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 82.9, y: 69.0 },
        landPos: { x: 52.9, y: 69.1 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.MIDDLE,
            aiming: AimingTypes.NORMAL,
            title: "Stairs from TRoof",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 814.937378 -1548.918579 -45.000000;setang -1.254002 -179.265244 0.000000",
            dir: "A Site/Fast Combo/Stairs",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Fast A Combo"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 73.4, y: 45.4 },
        landPos: { x: 39.9, y: 65.5 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Jungle From Top Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 360.075439 -691.968750 -100.042786;setang -50.721157 -149.829391 0.000000",
            dir: "A Site/Jungle/From Mid",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 40.0, y: 62.6 },
        landPos: { x: 39.9, y: 65.5 },
        information: {
            oneWay: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "One Way Jungle For CT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -992.061401 -1304.832764 -95.540283;setang -15.345146 -82.473335 0.000000",
            dir: "A Site/Jungle/One Way",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 73.4, y: 45.4 },
        landPos: { x: 67.4, y: 68.0 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Main From Top Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 360.075653 -691.968567 -100.042786;setang -61.644203 -106.860252 0.000000",
            dir: "A Site/Main/From Mid",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 85.7, y: 54.9 },
        landPos: { x: 52.9, y: 69.1 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Stairs from Ramp",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 907.692383 -1036.031250 -195.156250;setang -65.373138 -160.023346 0.000000",
            dir: "A Site/Normal Combo/Stairs",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal A Combo"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 85.7, y: 54.9 },
        landPos: { x: 48.2, y: 69.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Jungle And Connector from Ramp",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 907.692383 -1036.031250 -195.156250;setang -56.397099 -161.607422 0.000000",
            dir: "A Site/Normal Combo/Jungle and Connector",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal A Combo"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 66.2, y: 35.7 },
        landPos: { x: 65.9, y: 86.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Palace From Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -4.342773 -338.715454 -99.328125;setang -11.682086 -89.040512 0.000000",
            dir: "A Site/Palace/From Mid",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 24.2, y: 47.9 },
        landPos: { x: 65.9, y: 86.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Palace From CT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1711.934937 -761.044800 -104.000000;setang -32.637108 -39.042496 0.000000",
            dir: "A Site/Palace/From CT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 93.8, y: 49.8 },
        landPos: { x: 64.7, y: 81.0 },
        information: {
            oneWay: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Palace One Way From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.EXACT,
            command: "setpos 1258.352783 -871.968750 -80.000000;setang -59.830177 -136.719727 0.000000",
            dir: "A Site/Palace/One Way/From TT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 64.6, y: 91.0 },
        landPos: { x: 64.7, y: 81.0 },
        information: {
            oneWay: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Palace One Way From Palace",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 49.862152 -2375.968750 24.000000;setang 44.978031 102.200470 0.000000",
            dir: "A Site/Palace/One Way/From Inside",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 67.3, y: 78.9 },
        landPos: { x: 64.5, y: 73.1 },
        information: {
            selfFlash: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Ramp From Under Balcony",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 151.968750 -1914.034424 -104.000000;setang -7.723170 -105.303566 0.000000",
            dir: "A Site/Ramp Flash",
            images: ["lineup.jpg", "position.jpg"],
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 40.3, y: 87.8 },
        landPos: { x: 46.6, y: 85.3 },
        information: {
            selfFlash: true,
            technique: Techniques.STATIONARY,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Site Flash From Trash",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.EXACT,
            command: "setpos -1022.868347 -2269.521729 -104.000000;setang -68.674255 75.242310 0.000000",
            dir: "A Site/Site Flash",
            images: ["lineup.jpg", "position.jpg"],
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 63.6, y: 65.5 },
        landPos: { x: 46.6, y: 85.3 },
        information: {
            technique: Techniques.STATIONARY,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Triple Fire From Tetris",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -30.468750 -1418.046753 -104.343750;setang -19.075258 -138.237610 0.000000",
            dir: "A Site/Triple Fire",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 77.7, y: 87.2 },
        landPos: { x: 64.7, y: 81.0 },
        information: {
            technique: Techniques.STATIONARY,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Balcony From Palace",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos 568.101990 -2224.031250 24.000000;setang -9.505346 -164.541611 0.000000",
            dir: "A Site/Wood/From Palace",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 74.8, y: 68.1 },
        landPos: { x: 64.7, y: 81.0 },
        information: {
            technique: Techniques.STATIONARY,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Balcony From Ramp",
            movement: MovementTypes.STEP,
            precision: PrecisionTypes.EXACT,
            command: "setpos -30.468750 -1418.046753 -104.343750;setang -19.075258 -138.237610 0.000000",
            dir: "A Site/Wood/From Ramp",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 15.8, y: 15.3 },
        landPos: { x: 38.4, y: 9.6 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Appartments from Default",
            movement: MovementTypes.STEP,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -2094.930420 413.640411 -96.000000;setang 8.149642 28.051899 0.000000",
            dir: "B Site/Appartments Fire",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 13.5, y: 6.7 },
        landPos: { x: 17.8, y: 6.1 },
        information: {
            selfFlash: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Appartments from Default",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -2114.774902 685.254150 -79.235291;setang -14.917201 -81.079109 0.000000",
            dir: "B Site/Appartments Flash From Van",
            images: ["lineup.jpg", "position.jpg"],
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 60.2, y: 3.5 },
        landPos: { x: 4.4, y: 18.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Bench From Back Alley",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -160.034119 887.966187 -71.671814;setang -43.561260 -166.384125 -0.000000",
            dir: "B Site/Bench",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Simple B Entry", "Complex B Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 60.2, y: 3.5 },
        landPos: { x: 19.5, y: 34.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Window From Back Alley",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -160.034119 887.966187 -71.671814;setang -50.788254 -146.452347 0.000000",
            dir: "B Site/Window/TT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Simple B Entry", "Complex B Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 60.2, y: 3.5 },
        landPos: { x: 9.5, y: 34.9 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Door From Back Alley",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -160.034119 887.966187 -71.671814;setang -43.165184 -151.072220 0.000000",
            dir: "B Site/Door",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Simple B Entry", "Complex B Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 60.2, y: 3.5 },
        landPos: { x: 36.7, y: 21.3 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Deep Short From Back Alley",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -160.059875 887.957703 -71.671631;setang -46.036304 -134.539490 0.000000",
            dir: "B Site/Short/Deep",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Simple B Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 8.7, y: 11.0 },
        landPos: { x: 41.3, y: 11.6 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Deep Apartments From Van",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -2392.031250 596.049072 -64.000000;setang -10.165234 -1.084410 -0.000000",
            dir: "B Site/Deep Appartments",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.DESTRUCTION,
        throwPos: { x: 46.8, y: 25.8 },
        landPos: { x: 46.7, y: 11.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Deep Apartments From Short",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -752.031860 -58.026733 -99.911682;setang -35.245289 87.058517 0.000000",
            dir: "B Site/Deep Appartments Destruction",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 50.3, y: 10.4 },
        landPos: { x: 30.0, y: 14.7 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.CROUCH,
            title: "Left Arch From Back Alley",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -623.072693 615.968750 -15.815552;setang -74.084991 -169.627487 0.000000",
            dir: "B Site/Short/Left Arch",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Double Arch", "Complex B Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 47.3, y: 12.7 },
        landPos: { x: 30.0, y: 22.2 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Right Arch From Back Alley",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -705.792236 521.095703 -15.515747;setang -28.347042 142.159531 0.000000",
            dir: "B Site/Short/Right Arch",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Double Arch", "Complex B Entry"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 37.0, y: 9.7 },
        landPos: { x: 15.1, y: 6.7 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Van From Kitchen",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1167.874268 648.829041 -16.000000;setang -8.151038 170.803665 0.000000",
            dir: "B Site/Van Fire",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 17.3, y: 15.4 },
        landPos: { x: 19.5, y: 34.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Window From Default",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1969.043823 450.031250 -96.140625;setang -8.151038 -141.346405 0.000000",
            dir: "B Site/Window/From Site",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 97.4, y: 26.5 },
        landPos: { x: 48.7, y: 49.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Connector From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1422.954590 36.470421 -104.000000;setang -20.592058 -158.311142 0.000000",
            dir: "Mid/Connector/Normal",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Mid To B"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 97.4, y: 26.5 },
        landPos: { x: 48.7, y: 49.3 },
        information: {
            oneWay: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Connector One Way From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.EXACT,
            command: "setpos 1422.954590 36.470421 -104.000000;setang -39.897221 -157.618408 0.000000",
            dir: "Mid/Connector/One Way",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Mid To B"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 75.5, y: 15.8 },
        landPos: { x: 20.1, y: 19.7 },
        information: {
            oneWay: true,
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "B Site Short Cover",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 473.968750 402.056488 -189.312500;setang -41.019035 -175.181717 0.000000",
            dir: "B Site/Short Cover",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Mid To B"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 97.4, y: 26.5 },
        landPos: { x: 44.9, y: 33.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Short From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1422.935303 36.435543 -104.000000;setang -33.858265 -174.187317 0.000000",
            dir: "Mid/Short/From TT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Mid To A"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 73.4, y: 45.4 },
        landPos: { x: 44.9, y: 33.3 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Short From Top Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 360.075562 -691.968628 -100.042786;setang -25.080278 160.963684 0.000000",
            dir: "Mid/Short/From Mid",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 72.2, y: 43.8 },
        landPos: { x: 36.9, y: 43.8 },
        information: {
            technique: Techniques.CROUCH,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.CROUCH,
            title: "Window From Top Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 343.305267 -621.615112 -99.035095;setang -39.798248 178.156738 0.000000",
            dir: "Mid/Window/From Mid",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 97.4, y: 26.5 },
        landPos: { x: 36.9, y: 43.8 },
        information: {
            technique: Techniques.CROUCHJUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.CROUCH,
            title: "Window From TT",
            movement: MovementTypes.CROUCHING,
            precision: PrecisionTypes.EXACT,
            command: "setpos 1422.968384 36.468174 -104.000000;setang -24.024269 -166.300003 0.000000",
            dir: "Mid/Window/From TT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Mid To B", "Mid To A"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 28.7, y: 58.6 },
        landPos: { x: 36.9, y: 43.8 },
        information: {
            oneWay: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "One Way Window From CT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1488.030151 -1173.968750 -185.805359;setang -47.619247 67.207870 0.000000",
            dir: "Mid/Window/One Way",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
        }
    },
    {
        type: GrenadeTypes.HE,
        throwPos: { x: 37.8, y: 52.4 },
        landPos: { x: 36.9, y: 43.8 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.RIGHT,
            aiming: AimingTypes.NORMAL,
            title: "Window Smoke Destruction",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1120.031250 -967.456360 -104.000000;setang -11.946227 86.149841 0.000000",
            dir: "Mid/Window/Smoke Destruction",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 49.6, y: 52.9 },
        landPos: { x: 40.7, y: 39.1 },
        information: {
            selfFlash: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.MIDDLE,
            aiming: AimingTypes.NORMAL,
            title: "Underpass Entry",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -608.063660 -912.860718 -169.565918;setang -20.460247 130.270828 0.000000",
            dir: "Under/Entry",
            images: ["lineup.jpg", "position.jpg"],
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 40.6, y: 37.4 },
        landPos: { x: 47.6, y: 44.4 },
        information: {
            selfFlash: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Underpass Exit",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1042.742432 -286.649292 -304.000000;setang -8.217232 -72.679222 0.000000",
            dir: "Under/Exit/Flash",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["Underpass Exit"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 40.6, y: 37.4 },
        landPos: { x: 46.7, y: 37.6 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Underpass Exit",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos -1042.742432 -286.649292 -304.000000;setang -8.217232 -72.679222 0.000000",
            dir: "Under/Exit/Smoke",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Underpass Exit"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 60.6, y: 17.4 },
        landPos: { x: 18.4, y: 7.1 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Plat Full Cover",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.EXACT,
            command: "setpos -148.031250 358.049530 18.950928;setang -58.278049 168.054337 0.000000",
            dir: "B Site/Plat Cover",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 77.3, y: 65.3 },
        landPos: { x: 76.4, y: 70.8 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Ramp TT Entry",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 560.045105 -1399.968750 -191.352173;setang -27.159056 -17.639561 0.000000",
            dir: "A Site/Ramp TT Entry",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 72.4, y: 72.9 },
        landPos: { x: 71.4, y: 66.9 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Ramp TT Exit",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 320.885376 -1711.942505 -115.515625;setang 39.435024 149.145309 0.000000",
            dir: "A Site/Ramp TT Exit",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 63.6, y: 65.5 },
        landPos: { x: 64.7, y: 81.0 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Balcony From Tetris",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -77.320190 -1475.528687 -104.000000;setang 1.485018 -72.155670 0.000000",
            dir: "A Site/Wood/From Tetris",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
        }
    },
    {
        type: GrenadeTypes.HE,
        throwPos: { x: 45.3, y: 54.8 },
        landPos: { x: 48.7, y: 50.7 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.RIGHT,
            aiming: AimingTypes.NORMAL,
            title: "Connector Smoke Destruction",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -807.958984 -1055.968750 -104.000000;setang -31.713003 62.586258 0.000000",
            dir: "Mid/Connector/Smoke Destruction",
            images: ["lineup.jpg", "position.jpg"],
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 61.3, y: 91.3 },
        landPos: { x: 43.8, y: 91.3 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Ticket Booth From Fire Box",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -129.687012 -2412.957520 -100.156250;setang -2.837998 166.605316 -0.000000",
            dir: "A Site/Fire Box/Ticket",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Fire Box Combo"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 61.3, y: 91.3 },
        landPos: { x: 48.2, y: 69.8 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Jungle And Connector From Fire Box",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -129.687012 -2412.957520 -100.156250;setang 2.046010 121.791435 0.000000",
            dir: "A Site/Fire Box/Jungle and Connector",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Fire Box Combo"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 61.3, y: 91.3 },
        landPos: { x: 52.9, y: 69.1 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Stairs From Fire Box",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -129.687012 -2412.957520 -100.156250;setang -16.730991 111.033348 0.000000",
            dir: "A Site/Fire Box/Stairs",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Fire Box Combo"]
        }
    },
];

const rawInsta = [
    {
        throwPos: { x: 93.4, y: 30.9 },
        landPos: { x: 36.9, y: 43.8 },
        title: "TT Instant Mid Window Smokes",
        dir: "Insta Mid Smokes",
        exec: "mirage",
        shortcut: "F6",
        spawns: [
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STEP,
                precision: PrecisionTypes.RELAXED,
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STEP,
                precision: PrecisionTypes.RELAXED,
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STEP,
                precision: PrecisionTypes.RELAXED,
            },
            {
                technique: Techniques.JUMP,
                mouseAction: MouseAction.LEFT,
                aiming: AimingTypes.NORMAL,
                movement: MovementTypes.STEP,
                precision: PrecisionTypes.DYNAMIC,
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

export const mirageNades = rawNades.map(nade => {
    const slug = nade.information.title
        .toLowerCase()
        .replace(/\s+/g, '_');

    return {
        id: slug, ...nade,
    };
});
export const mirageInstaNades = rawInsta.map(nade => {
    const slug = nade.title
        .toLowerCase()
        .replace(/\s+/g, '_');

    return {
        id: slug, ...nade,
    };
});