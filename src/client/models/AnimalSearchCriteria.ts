/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestSort } from './RequestSort';

/**
 * Animal search criteria
 */
export type AnimalSearchCriteria = {
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
     * Animal name
     */
    name?: string;
    /**
     * Whether it should be an earth animal
     */
    earthAnimal?: boolean;
    /**
     * Whether it should be an earth insect
     */
    earthInsect?: boolean;
    /**
     * Whether it should be an avian
     */
    avian?: boolean;
    /**
     * Whether it should be a canine
     */
    canine?: boolean;
    /**
     * Whether it should be a feline
     */
    feline?: boolean;
};

