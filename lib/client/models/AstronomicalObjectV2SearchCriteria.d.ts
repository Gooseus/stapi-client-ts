import type { AstronomicalObjectV2Type } from './AstronomicalObjectV2Type';
import type { RequestSort } from './RequestSort';
/**
 * Astronomical object search criteria (V2)
 */
export type AstronomicalObjectV2SearchCriteria = {
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
     * Astronomical object name
     */
    name?: string;
    astronomicalObjectType?: AstronomicalObjectV2Type;
    /**
     * Astronomical object's location unique ID
     */
    locationUid?: string;
};
