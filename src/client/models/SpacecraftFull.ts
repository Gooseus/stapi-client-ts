/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationBase } from './OrganizationBase';
import type { SpacecraftClassBase } from './SpacecraftClassBase';
import type { SpacecraftType } from './SpacecraftType';

/**
 * Full spacecraft, returned when queried using UID
 */
export type SpacecraftFull = {
    /**
     * Spacecraft unique ID
     */
    uid: string;
    /**
     * Spacecraft name
     */
    name: string;
    /**
     * Spacecraft registry
     */
    registry?: string;
    /**
     * Status of a spacecraft (in prime reality, if spacecraft was in more than one realities)
     */
    status?: string;
    /**
     * Date the spacecraft status was last known
     */
    dateStatus?: string;
    spacecraftClass?: SpacecraftClassBase;
    owner?: OrganizationBase;
    operator?: OrganizationBase;
    /**
     * Spacecraft types
     */
    spacecraftTypes?: Array<SpacecraftType>;
};

