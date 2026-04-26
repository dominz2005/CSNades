import { dust2Nades } from "./dust2";
import { mirageNades, mirageInstaNades } from "./mirage";
import { overpassNades } from "./overpass";
import { ancientNades, ancientInstaNades } from "./ancient";
import { infernoNades, infernoInstaNades } from "./inferno";
import { anubisNades, anubisInstaNades } from "./anubis";
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

export const allInstaNades = [
    ...ancientInstaNades.map(nade => ({ ...nade, map: 'ancient' })),
    ...anubisInstaNades.map(nade => ({ ...nade, map: 'anubis' })),
    ...infernoInstaNades.map(nade => ({ ...nade, map: 'inferno' })),
    ...mirageInstaNades.map(nade => ({ ...nade, map: 'mirage' })),
];