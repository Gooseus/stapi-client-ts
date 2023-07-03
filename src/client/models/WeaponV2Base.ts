/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base weapon, returned in search results (V2)
 */
export type WeaponV2Base = {
    /**
     * Weapon unique ID
     */
    uid: string;
    /**
     * Weapon name
     */
    name: string;
    /**
     * Whether it's hand-help weapon
     */
    handHeldWeapon?: boolean;
    /**
     * Whether it's a laser technology
     */
    laserTechnology?: boolean;
    /**
     * Whether it's a plasma technology
     */
    plasmaTechnology?: boolean;
    /**
     * Whether it's a photonic technology
     */
    photonicTechnology?: boolean;
    /**
     * Whether it's a phaser technology
     */
    phaserTechnology?: boolean;
    /**
     * Whether it's a directed energy weapon
     */
    directedEnergyWeapon?: boolean;
    /**
     * Whether it's an explosive weapon
     */
    explosiveWeapon?: boolean;
    /**
     * Whether it's a projectile weapon
     */
    projectileWeapon?: boolean;
    /**
     * Whether it's a fictional weapon
     */
    fictionalWeapon?: boolean;
    /**
     * Whether this weapon is from mirror universe
     */
    mirror?: boolean;
    /**
     * Whether this weapon is from alternate reality
     */
    alternateReality?: boolean;
};

