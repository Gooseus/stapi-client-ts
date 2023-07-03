/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base weapon, returned in search results
 */
export type WeaponBase = {
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
     * Whether this weapon is from mirror universe
     */
    mirror?: boolean;
    /**
     * Whether this weapon is from alternate reality
     */
    alternateReality?: boolean;
};

