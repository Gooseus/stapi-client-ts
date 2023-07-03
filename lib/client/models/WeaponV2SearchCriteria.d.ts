import type { RequestSort } from './RequestSort';
/**
 * Animal search criteria
 */
export type WeaponV2SearchCriteria = {
    /**
     * Zero-based page number
     */
    pageNumber?: number;
    /**
     * Page size
     */
    pageSize?: number;
    sort?: RequestSort;
    /**
     * Weapon name
     */
    name?: string;
    /**
     * Whether it should be a hand-help weapon
     */
    handHeldWeapon?: boolean;
    /**
     * Whether it should be a laser technology
     */
    laserTechnology?: boolean;
    /**
     * Whether it should be a plasma technology
     */
    plasmaTechnology?: boolean;
    /**
     * Whether it should be a photonic technology
     */
    photonicTechnology?: boolean;
    /**
     * Whether it should be a phaser technology
     */
    phaserTechnology?: boolean;
    /**
     * Whether it should be a directed energy weapon
     */
    directedEnergyWeapon?: boolean;
    /**
     * Whether it should be an explosive weapon
     */
    explosiveWeapon?: boolean;
    /**
     * Whether it should be a projectile weapon
     */
    projectileWeapon?: boolean;
    /**
     * Whether it should be a fictional weapon
     */
    fictionalWeapon?: boolean;
    /**
     * Whether this weapon should be from mirror universe
     */
    mirror?: boolean;
    /**
     * Whether this weapon should be from alternate reality
     */
    alternateReality?: boolean;
};
