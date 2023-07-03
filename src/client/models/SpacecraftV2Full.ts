/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationBase } from './OrganizationBase';
import type { SpacecraftClassV2Base } from './SpacecraftClassV2Base';
import type { SpacecraftType } from './SpacecraftType';

/**
 * Full spacecraft, returned when queried using UID (V2)
 */
export type SpacecraftV2Full = {
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
    spacecraftClass?: SpacecraftClassV2Base;
    owner?: OrganizationBase;
    operator?: OrganizationBase;
    affiliation?: OrganizationBase;
    /**
     * Spacecraft types
     */
    spacecraftTypes?: Array<SpacecraftType>;
};

