/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestSort } from './RequestSort';

/**
 * Animal search criteria
 */
export type TechnologyV2SearchCriteria = {
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
     * Technology name
     */
    name?: string;
    /**
     * Whether it should be a Borg technology
     */
    borgTechnology?: boolean;
    /**
     * Whether it should be a Borg component
     */
    borgComponent?: boolean;
    /**
     * Whether it should be a communications technology
     */
    communicationsTechnology?: boolean;
    /**
     * Whether it should be a computer technology
     */
    computerTechnology?: boolean;
    /**
     * Whether it should be a technology related to computer programming
     */
    computerProgramming?: boolean;
    /**
     * Whether it should be a subroutine
     */
    subroutine?: boolean;
    /**
     * Whether it should be a database
     */
    database?: boolean;
    /**
     * Whether it should be a energy technology
     */
    energyTechnology?: boolean;
    /**
     * Whether it should be a fictional technology
     */
    fictionalTechnology?: boolean;
    /**
     * Whether it should be a holographic technology
     */
    holographicTechnology?: boolean;
    /**
     * Whether it should be a identification technology
     */
    identificationTechnology?: boolean;
    /**
     * Whether it should be a life support technology
     */
    lifeSupportTechnology?: boolean;
    /**
     * Whether it should be a sensor technology
     */
    sensorTechnology?: boolean;
    /**
     * Whether it should be a shield technology
     */
    shieldTechnology?: boolean;
    /**
     * Whether it should be a security technology
     */
    securityTechnology?: boolean;
    /**
     * Whether it should be a propulsion technology
     */
    propulsionTechnology?: boolean;
    /**
     * Whether it should be a spacecraft component
     */
    spacecraftComponent?: boolean;
    /**
     * Whether it should be a warp technology
     */
    warpTechnology?: boolean;
    /**
     * Whether it should be a transwarp technology
     */
    transwarpTechnology?: boolean;
    /**
     * Whether it should be a time travel technology
     */
    timeTravelTechnology?: boolean;
    /**
     * Whether it should be a military technology
     */
    militaryTechnology?: boolean;
    /**
     * Whether it should be a victual technology
     */
    victualTechnology?: boolean;
    /**
     * Whether it should be a tool
     */
    tool?: boolean;
    /**
     * Whether it should be a culinary tool
     */
    culinaryTool?: boolean;
    /**
     * Whether it should be a engineering tool
     */
    engineeringTool?: boolean;
    /**
     * Whether it should be a household tool
     */
    householdTool?: boolean;
    /**
     * Whether it should be a medical equipment
     */
    medicalEquipment?: boolean;
    /**
     * Whether it's a transporter technology
     */
    transporterTechnology?: boolean;
    /**
     * Whether it's a transportation technology
     */
    transportationTechnology?: boolean;
    /**
     * Whether it's a weapon component
     */
    weaponComponent?: boolean;
    /**
     * Whether it's an artificial lifeform component
     */
    artificialLifeformComponent?: boolean;
};

