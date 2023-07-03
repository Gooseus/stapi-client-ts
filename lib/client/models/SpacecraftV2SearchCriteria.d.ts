import type { RequestSort } from './RequestSort';
/**
 * Animal search criteria
 */
export type SpacecraftV2SearchCriteria = {
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
     * Spacecraft name
     */
    name?: string;
    /**
     * Spacecraft registry
     */
    registry?: string;
    /**
     * Spacecraft status
     */
    status?: string;
};
