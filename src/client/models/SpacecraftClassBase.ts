/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationHeader } from './OrganizationHeader';
import type { SpeciesHeader } from './SpeciesHeader';

/**
 * Base spacecraft class, returned in search results
 */
export type SpacecraftClassBase = {
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
    owner?: OrganizationHeader;
    operator?: OrganizationHeader;
    affiliation?: OrganizationHeader;
};

