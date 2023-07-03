/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationHeader } from './OrganizationHeader';
import type { SpacecraftClassHeader } from './SpacecraftClassHeader';

/**
 * Base spacecraft, returned in search results
 */
export type SpacecraftBase = {
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
    spacecraftClass?: SpacecraftClassHeader;
    owner?: OrganizationHeader;
    operator?: OrganizationHeader;
};

