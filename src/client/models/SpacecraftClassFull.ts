/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationBase } from './OrganizationBase';
import type { SpacecraftBase } from './SpacecraftBase';
import type { SpacecraftType } from './SpacecraftType';
import type { SpeciesHeader } from './SpeciesHeader';

/**
 * Full spacecraft class, returned when queried using UID
 */
export type SpacecraftClassFull = {
    /**
     * Spacecraft class unique ID
     */
    uid: string;
    /**
     * Spacecraft class name
     */
    name: string;
    /**
     * Number of decks
     */
    numberOfDecks?: number;
    /**
     * Whether it's a warp-capable spacecraft class
     */
    warpCapable?: boolean;
    /**
     * Whether this spacecraft class is from alternate reality
     */
    alternateReality?: boolean;
    /**
     * Starting period when this spacecraft class was in use
     */
    activeFrom?: string;
    /**
     * Ending period when this spacecraft class was in use
     */
    activeTo?: string;
    species?: SpeciesHeader;
    owner?: OrganizationBase;
    operator?: OrganizationBase;
    affiliation?: OrganizationBase;
    /**
     * Spacecraft types
     */
    spacecraftTypes?: Array<SpacecraftType>;
    /**
     * Spacecrafts
     */
    spacecrafts?: Array<SpacecraftBase>;
};

