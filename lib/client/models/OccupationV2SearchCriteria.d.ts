import type { RequestSort } from './RequestSort';
/**
 * Occupation search criteria (V2)
 */
export type OccupationV2SearchCriteria = {
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
     * Occupation name
     */
    name?: string;
    /**
     * Whether it should be an arts occupation
     */
    artsOccupation?: boolean;
    /**
     * Whether it should be a communication occupation
     */
    communicationOccupation?: boolean;
    /**
     * Whether it should be an economic occupation
     */
    economicOccupation?: boolean;
    /**
     * Whether it should be an education occupation
     */
    educationOccupation?: boolean;
    /**
     * Whether it should be an entertainment occupation
     */
    entertainmentOccupation?: boolean;
    /**
     * Whether it should be an illegal occupation
     */
    illegalOccupation?: boolean;
    /**
     * Whether it should be a legal occupation
     */
    legalOccupation?: boolean;
    /**
     * Whether it should be a medical occupation
     */
    medicalOccupation?: boolean;
    /**
     * Whether it should be a scientific occupation
     */
    scientificOccupation?: boolean;
    /**
     * Whether it should be a sports occupation
     */
    sportsOccupation?: boolean;
    /**
     * Whether it should be a victual occupation
     */
    victualOccupation?: boolean;
};
