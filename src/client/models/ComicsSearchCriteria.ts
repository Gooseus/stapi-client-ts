/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestSort } from './RequestSort';

/**
 * Comics search criteria
 */
export type ComicsSearchCriteria = {
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
     * Comics title
     */
    title?: string;
    /**
     * Starting year the comics was published
     */
    publishedYearFrom?: number;
    /**
     * Ending year the comics was published
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
    /**
     * Starting stardate of comics story
     */
    stardateFrom?: number;
    /**
     * Ending stardate of comics story
     */
    stardateTo?: number;
    /**
     * Starting year of comics story
     */
    yearFrom?: number;
    /**
     * Ending year of comics story
     */
    yearTo?: number;
    /**
     * Whether it should be a photonovel
     */
    photonovel?: boolean;
    /**
     * Whether it should be an adaptation of an episode or a movie
     */
    adaptation?: boolean;
};

