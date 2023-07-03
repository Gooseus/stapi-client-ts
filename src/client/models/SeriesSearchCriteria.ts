/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestSort } from './RequestSort';

/**
 * Series search criteria
 */
export type SeriesSearchCriteria = {
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
     * Series title
     */
    title?: string;
    /**
     * Series abbreviation
     */
    abbreviation?: string;
    /**
     * Minimal year the series production started
     */
    productionStartYearFrom?: number;
    /**
     * Maximal year the series production started
     */
    productionStartYearTo?: number;
    /**
     * Minimal year the series production ended
     */
    productionEndYearFrom?: number;
    /**
     * Maximal year the series production ended
     */
    productionEndYearTo?: number;
    /**
     * Minimal date the series originally ran from
     */
    originalRunStartDateFrom?: string;
    /**
     * Maximal date the series originally ran from
     */
    originalRunStartDateTo?: string;
    /**
     * Minimal date the series originally ran to
     */
    originalRunEndDateFrom?: string;
    /**
     * Maximal date the series originally ran to
     */
    originalRunEndDateTo?: string;
};

