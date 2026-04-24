export const GrenadeTypes = {
    SMOKE: 'smoke',
    FLASH: 'flash',
    FIRE: 'fire',
    HE: 'he',
    DESTRUCTION: 'destruction',
};

export const Techniques = {
    STANDING: '',
    JUMP: 'Jump',
    CROUCH: 'Crouch',
    CROUCHJUMP: 'Crouch Jump',
};

export const MouseAction = {
    LEFT: 'Left Click',
    RIGHT: 'Right Click',
    MIDDLE: 'Middle Click',
};

export const AimingTypes = {
    NORMAL: 'Normal',
    CROUCH: 'Crouch',
};

export const MovementTypes = {
    STATIONARY: 'Stationary',
    WALKING: 'Walking',
    CROUCHING: 'Crouching',
    RUNNING: 'Running',
    STEP: 'Step',
    JUMPSTEP: 'Jump Step',
};

export const PrecisionTypes = {
    EXACT: 'Exact',           // Wymaga co do piksela ustawienia celownika
    RELAXED: 'Relaxed',       // Wybacza drobne przesunięcia celownika
    DYNAMIC: 'Dynamic',       // Bardzo zależny od timingu (np. rzut w biegu)
    SIMPLE: 'Simple',         // Łatwy rzut, niemal niemożliwy do zepsucia
};

export const ViewMode = {
    LAND: 'land',
    THROW: 'throw'
};

export const lineupDir = "https://pub-19fffafaffb44084b539d1ea7788bad8.r2.dev/"