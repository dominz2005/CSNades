import { MouseAction, MovementTypes, PrecisionTypes, GrenadeTypes, Techniques, AimingTypes } from "@/assets/constants"

const rawNades = [
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 28.4, y: 59.7 },
        landPos: { x: 37.6, y: 11.1 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Bank From Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -2875.947754 -1402.937500 504.980713;setang -32.604034 80.441872 0.000000",
            dir: "A Site/Bank/From Mid",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Far A Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 28.4, y: 59.7 },
        landPos: { x: 50.0, y: 14.9 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Trash From Mid",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -2875.957031 -1402.969849 504.978882;setang -34.881065 68.495865 0.000000",
            dir: "A Site/Trash/From Mid",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Far A Entry"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 35.2, y: 12.0 },
        landPos: { x: 30.1, y: 11.6 },
        information: {
            selfFlash: true,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.RIGHT,
            aiming: AimingTypes.NORMAL,
            title: "Site From Van",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -2603.855225 1102.105225 548.000000;setang -16.929031 176.306992 -0.000000",
            dir: "A Site/CT Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 1.8, y: 38.5 },
        landPos: { x: 50.0, y: 14.9 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Trash From Long",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -3940.236328 -258.911133 603.971924;setang -8.382033 28.731083 0.000000",
            dir: "A Site/Trash/From Long",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 41.7, y: 45.1 },
        landPos: { x: 50.0, y: 14.9 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Trash From Short",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -2296.003174 -632.031250 455.664215;setang 0.461967 80.309830 0.000000",
            dir: "A Site/Trash/From Short",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["A Entry From Short"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 41.7, y: 45.1 },
        landPos: { x: 50.3, y: 20.0 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "A Site Truck",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.EXACT,
            command: "setpos -2296.003174 -632.031250 455.664215;setang 1.220966 72.752869 0.000000",
            dir: "A Site/Truck Fire",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
            groups: ["A Entry From Short"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 41.7, y: 45.1 },
        landPos: { x: 43.7, y: 22.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "A Site God Flash",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -2294.180420 -632.062744 455.507965;setang -2.376034 82.487839 0.000000",
            dir: "A Site/TT Flash",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["A Entry From Short"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 56.0, y: 46.8 },
        landPos: { x: 76.3, y: 24.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Barrels From Connector",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1731.967041 -704.031250 164.000000;setang 5.774973 51.998840 0.000000",
            dir: "B Site/Barrels",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
            groups: ["B Entry From Connector"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 56.0, y: 46.8 },
        landPos: { x: 68.4, y: 36.9 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Bridge From Connector",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1731.967041 -704.031250 164.000000;setang 8.645972 23.783834 0.000000",
            dir: "B Site/Bridge",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["B Entry From Connector"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 56.0, y: 46.8 },
        landPos: { x: 55.7, y: 23.4 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Heaven From Connector",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1731.967041 -704.031250 164.000000;setang -23.232004 88.298775 0.000000",
            dir: "B Site/Heaven/From Connector",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["B Entry From Connector"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 83.4, y: 70.9 },
        landPos: { x: 55.7, y: 23.4 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Heaven From Alley",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos -578.755920 -2023.968628 212.391418;setang -2.211005 114.800705 0.000000",
            dir: "B Site/Heaven/From TT",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 56.0, y: 46.8 },
        landPos: { x: 78.7, y: 34.6 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Entry From Connector",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1731.967041 -704.031250 164.000000;setang 7.754995 33.287834 0.000000",
            dir: "B Site/Entry Flash",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["B Entry From Connector"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 46.0, y: 14.2 },
        landPos: { x: 85.4, y: 45.1 },
        information: {
            technique: Techniques.CROUCHJUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.CROUCH,
            title: "Monster From CT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -2116.505371 993.136292 548.000000;setang -17.919018 -49.473339 0.000000",
            dir: "B Site/Monster",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 53.7, y: 53.6 },
        landPos: { x: 58.9, y: 52.2 },
        information: {
            selfFlash: true,
            technique: Techniques.CROUCHJUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.CROUCH,
            title: "Connector Deep",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1839.968750 -1071.957397 164.000000;setang -52.173222 179.351227 0.000000",
            dir: "Connector/Deep",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["Connector Exit"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 53.7, y: 53.6 },
        landPos: { x: 58.9, y: 52.2 },
        information: {
            selfFlash: true,
            technique: Techniques.CROUCH,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.CROUCH,
            title: "Connector Simple",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1839.968750 -1071.957397 164.000000;setang -48.477196 164.105423 0.000000",
            dir: "Connector/Simple",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["Connector Exit"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 41.7, y: 41.3 },
        landPos: { x: 37.6, y: 62.2 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Fountain From Short",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -2289.822021 -455.942017 454.976715;setang 1.319787 -94.716698 0.000000",
            dir: "Fountain/Flash",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["Fountain Push"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 41.7, y: 41.3 },
        landPos: { x: 45.6, y: 72.2 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Fountain From Short",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -2292.691895 -455.968323 455.242340;setang -0.957212 -83.166740 0.000000",
            dir: "Fountain/Smoke",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Fountain Push"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 35.7, y: 82.5 },
        landPos: { x: 15.3, y: 68.9 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Long From Playground",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -2565.967773 -2603.481445 545.369751;setang 0.329788 138.332291 0.000000",
            dir: "Long",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 81.5, y: 78.3 },
        landPos: { x: 40.5, y: 53.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Short From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -695.947876 -2372.287354 215.705338;setang -51.381195 142.490173 0.000000",
            dir: "Short",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 78.6, y: 75.5 },
        landPos: { x: 33.2, y: 50.7 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Toilets From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -829.218750 -2226.095947 307.828125;setang -20.658201 147.308182 0.000000",
            dir: "Toilets",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 78.6, y: 75.5 },
        landPos: { x: 29.1, y: 50.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Toilets Deep From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -829.218750 -2226.095947 307.828125;setang -20.724174 146.120316 0.000000",
            dir: "Toilets/Deep",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
];

export const overpassNades = rawNades.map(nade => {
    const slug = nade.information.title
        .toLowerCase()
        .replace(/\s+/g, '_');

    return {
        id: slug, ...nade,
    };
});