/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestSort } from './RequestSort';

/**
 * Magazine search criteria
 */
export type MagazineSearchCriteria = {
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
     * Magazine title
     */
    title?: string;
    /**
     * Starting year the magazine was published
     */
    publishedYearFrom?: number;
    /**
     * Ending year the magazine was published
     */
    publishedYearTo?: number;
    /**
     * Minimal number of pages
     */
    numberOfPagesFrom?: number;
    /**
     * Maximal number of pages
     */
    numberOfPagesTo?: number;
};

