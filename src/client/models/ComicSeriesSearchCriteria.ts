/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestSort } from './RequestSort';

/**
 * Comic series search criteria
 */
export type ComicSeriesSearchCriteria = {
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
     * Comic series title
     */
    title?: string;
    /**
     * Starting year the comic series was published
     */
    publishedYearFrom?: number;
    /**
     * Ending year the comic series was published
     */
    publishedYearTo?: number;
    /**
     * Minimal number of issues
     */
    numberOfIssuesFrom?: number;
    /**
     * Maximal number of issues
     */
    numberOfIssuesTo?: number;
    /**
     * Starting stardate of comic series stories
     */
    stardateFrom?: number;
    /**
     * Starting stardate of comic series stories
     */
    stardateTo?: number;
    /**
     * Starting year of comic series stories
     */
    yearFrom?: number;
    /**
     * Ending year of comic series stories
     */
    yearTo?: number;
    /**
     * Whether it should be a miniseries
     */
    miniseries?: boolean;
    /**
     * Whether it should be photonovel series
     */
    photonovelSeries?: boolean;
};

