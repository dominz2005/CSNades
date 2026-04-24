import { dust2Nades } from "./dust2";
import { mirageNades } from "./mirage";
import { overpassNades } from "./overpass";
import { ancientNades } from "./ancient";
import { infernoNades } from "./inferno";
import { anubisNades } from "./anubis";
import { nukeNades } from "./nuke";

export const allNades = [
    ...mirageNades.map(nade => ({ ...nade, map: 'mirage' })),
    ...dust2Nades.map(nade => ({ ...nade, map: 'dust2' })),
    ...overpassNades.map(nade => ({ ...nade, map: 'overpass' })),
    ...ancientNades.map(nade => ({ ...nade, map: 'ancient' })),
    ...infernoNades.map(nade => ({ ...nade, map: 'inferno' })),
    ...anubisNades.map(nade => ({ ...nade, map: 'anubis' })),
    ...nukeNades.map(nade => ({ ...nade, map: 'nuke' })),
];