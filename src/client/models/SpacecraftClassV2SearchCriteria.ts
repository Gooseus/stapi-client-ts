/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestSort } from './RequestSort';

/**
 * Animal search criteria
 */
export type SpacecraftClassV2SearchCriteria = {
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
     * Spacecraft class name
     */
    name?: string;
    /**
     * Whether it should be a warp-capable spacecraft class
     */
    warpCapableSpecies?: boolean;
    /**
     * Whether this spacecraft class should be from mirror universe
     */
    mirror?: boolean;
    /**
     * Whether this spacecraft class should be from alternate reality
     */
    alternateReality?: boolean;
};

