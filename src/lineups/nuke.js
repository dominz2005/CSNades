import { MouseAction, MovementTypes, PrecisionTypes, GrenadeTypes, Techniques, AimingTypes } from "@/assets/constants"

const rawNades = [
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 28.5, y: 58.8 },
        landPos: { x: 63.1, y: 39.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Heaven From TT",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos -1216.282837 -1142.968750 -352.000000;setang -39.963097 6.067034 0.000000",
            dir: "A Site/Heaven",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal A Entry"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 48.9, y: 59.2 },
        landPos: { x: 51.4, y: 52.2 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Hut Exit Close",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 160.031250 -1119.941162 -352.000000;setang -3.597091 29.167131 0.000000",
            dir: "A Site/Hut Enter/Close Flash",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["Hut Exit"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 48.9, y: 59.2 },
        landPos: { x: 53.4, y: 52.1 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Hut Exit Far",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 160.031250 -1119.968140 -352.000000;setang -3.828091 28.045147 0.000000",
            dir: "A Site/Hut Enter/Far Flash",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["Hut Exit"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 39.8, y: 58.8 },
        landPos: { x: 52.1, y: 57.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Hut From T Roof",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos -446.946960 -1138.647705 -106.328735;setang 0.857909 0.094152 0.000000",
            dir: "A Site/Hut Fire",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 45.0, y: 38.8 },
        landPos: { x: 55.9, y: 71.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.MIDDLE,
            aiming: AimingTypes.NORMAL,
            title: "Main From T Roof",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -105.050293 -280.061035 -108.000000;setang -9.900000 -58.175030 0.000000",
            dir: "A Site/Main",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Normal A Entry"]
        }
    },
    {
        type: GrenadeTypes.FIRE,
        throwPos: { x: 45.9, y: 47.9 },
        landPos: { x: 58.1, y: 43.6 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Site From T Roof",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -105.050293 -280.061035 -108.000000;setang -9.900000 -58.175030 0.000000",
            dir: "A Site/Site/Fire",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"],
            groups: ["Normal A Entry"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 45.9, y: 47.9 },
        landPos: { x: 56.0, y: 43.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Site From T Roof",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -0.981445 -769.617126 -32.000000;setang 3.959970 11.520958 0.000000",
            dir: "A Site/Site/Flash",
            images: ["lineup.jpg", "position.jpg"],
            groups: ["Normal A Entry"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 65.4, y: 37.6 },
        landPos: { x: 58.8, y: 39.5 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Site From Heaven",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1259.958740 -316.031250 -64.000000;setang -29.535048 -12.206038 0.000000",
            dir: "A Site/Site Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 50.0, y: 66.8 },
        landPos: { x: 52.1, y: 62.9 },
        information: {
            level: 2,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Site From Single Door",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 287.968750 -1398.947876 -711.968750;setang -7.557065 170.055954 0.000000",
            dir: "B Site/Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 51.9, y: 73.9 },
        landPos: { x: 52.5, y: 59.9 },
        information: {
            level: 2,
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Site From Single Door",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos 361.657135 -1679.966553 -670.920166;setang -0.858066 143.623245 0.000000",
            dir: "B Site/Single Entry",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 42.2, y: 77.2 },
        landPos: { x: 53.2, y: 82.5 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Outside Entry",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos -478.048401 -1630.072144 -352.000000;setang -3.927099 -53.518719 0.000000",
            dir: "Outside/Entry",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 58.9, y: 47.2 },
        landPos: { x: 56.1, y: 77.7 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Outside From A",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -478.048401 -1630.072144 -352.000000;setang -3.927099 -53.518719 0.000000",
            dir: "Outside/Flash From A",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 33.0, y: 59.3 },
        landPos: { x: 68.0, y: 80.2 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Garage From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -917.632751 -1142.968750 -352.000000;setang -17.292133 -18.442646 0.000000",
            dir: "Outside/Garage",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Outside To A Main"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 33.0, y: 59.3 },
        landPos: { x: 65.3, y: 92.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Secret From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -917.632751 -1142.968750 -352.000000;setang -11.220132 -29.530682 0.000000",
            dir: "Outside/Secret",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Outside To A Main"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 27.3, y: 60.3 },
        landPos: { x: 59.0, y: 87.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "First Secret Entry From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1268.031250 -1165.511597 -352.000000;setang -45.144154 -24.487324 0.000000",
            dir: "Outside/Secret Enter Close/First",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Secret Entry Close"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 27.3, y: 60.3 },
        landPos: { x: 62.1, y: 88.5 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Second Secret Entry From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1268.031250 -1165.511597 -352.000000;setang -35.211102 -23.332312 0.000000",
            dir: "Outside/Secret Enter Close/Second",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Secret Entry Close"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 27.1, y: 57.1 },
        landPos: { x: 60.2, y: 76.9 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "First Secret Far Entry From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1350.792847 -1040.925903 -352.000000;setang -44.946075 -19.421997 0.000000",
            dir: "Outside/Secret Enter Far/First",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Secret Entry Far"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 27.1, y: 57.1 },
        landPos: { x: 63.8, y: 77.8 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Second Secret Far Entry From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -1350.792847 -1040.925903 -352.000000;setang -20.130028 -22.392010 0.000000",
            dir: "Outside/Secret Enter Far/Second",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Secret Entry Far"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 56.8, y: 12.6 },
        landPos: { x: 50.0, y: 27.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.MIDDLE,
            aiming: AimingTypes.NORMAL,
            title: "Ramp From Ramp",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 749.968750 605.854797 -416.171875;setang 8.315971 -133.239014 0.000000",
            dir: "Ramp/CT Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 49.6, y: 40.2 },
        landPos: { x: 52.4, y: 26.7 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Ramp Left Entry From Trophy",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos 251.948074 -463.968750 -352.000000;setang -4.290029 107.234909 0.000000",
            dir: "Ramp/Front",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 49.6, y: 40.2 },
        landPos: { x: 51.7, y: 21.6 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Ramp Front Entry From Trophy",
            movement: MovementTypes.RUNNING,
            precision: PrecisionTypes.DYNAMIC,
            command: "setpos 251.968750 -355.280212 -352.000000;setang -8.481029 131.424042 0.000000",
            dir: "Ramp/Left",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.DESTRUCTION,
        throwPos: { x: 60.7, y: 55.8 },
        landPos: { x: 47.7, y: 73.3 },
        information: {
            technique: Techniques.STANDING,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Silo From Bridge",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 991.955750 -945.932617 -63.968750;setang -23.793070 -144.788986 0.000000",
            dir: "Silo Destruction",
            images: ["lineup.jpg", "position.jpg", "fire.jpg"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 33.5, y: 62.7 },
        landPos: { x: 52.2, y: 58.0 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Hut From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -891.968750 -1263.958862 -352.000000;setang -15.576035 1.797006 0.000000",
            dir: "Vent Enter/Hut",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Vent Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 33.5, y: 62.7 },
        landPos: { x: 54.6, y: 64.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Front Of Vent From TT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos -891.953308 -927.031250 -352.000000;setang -14.124033 -9.686987 0.000000",
            dir: "Vent Enter/Behind Vent",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"],
            groups: ["Vent Entry"]
        }
    },
    {
        type: GrenadeTypes.SMOKE,
        throwPos: { x: 75.0, y: 50.4 },
        landPos: { x: 47.7, y: 73.3 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Silo From CT",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 1977.156006 -787.255127 -276.750305;setang -17.820093 -155.117996 0.000000",
            dir: "Silo Destruction",
            images: ["lineup.jpg", "position.jpg", "smoke.jpg"]
        }
    },
    {
        type: GrenadeTypes.FLASH,
        throwPos: { x: 54.9, y: 58.6 },
        landPos: { x: 52.9, y: 67.6 },
        information: {
            technique: Techniques.JUMP,
            mouseAction: MouseAction.LEFT,
            aiming: AimingTypes.NORMAL,
            title: "Vent From Tetris",
            movement: MovementTypes.STATIONARY,
            precision: PrecisionTypes.RELAXED,
            command: "setpos 574.046143 -1120.968750 -352.000000;setang -55.506062 -109.710106 0.000000",
            dir: "Vent Flash",
            images: ["lineup.jpg", "position.jpg"]
        }
    },
];

export const nukeNades = rawNades.map(nade => {
    const slug = nade.information.title
        .toLowerCase()
        .replace(/\s+/g, '_');

    return {
        id: slug, ...nade,
    };
});