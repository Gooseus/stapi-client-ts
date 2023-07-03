/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base occupations, returned in search results
 */
export type OccupationBase = {
    /**
     * Occupation unique ID
     */
    uid: string;
    /**
     * Occupation name
     */
    name: string;
    /**
     * Whether it's a legal occupation
     */
    legalOccupation?: boolean;
    /**
     * Whether it's a medical occupation
     */
    medicalOccupation?: boolean;
    /**
     * Whether it's a scientific occupation
     */
    scientificOccupation?: boolean;
};

