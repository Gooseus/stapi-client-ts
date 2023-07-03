/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestSort } from './RequestSort';

/**
 * Video release search criteria (V2)
 */
export type VideoReleaseV2SearchCriteria = {
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
     * Video release title
     */
    title?: string;
    /**
     * Starting year of video release story
     */
    yearFrom?: number;
    /**
     * Ending year of video release story
     */
    yearTo?: number;
    /**
     * Minimal run time, in minutes
     */
    runTimeFrom?: number;
    /**
     * Minimal run time, in minutes
     */
    runTimeTo?: number;
    /**
     * Whether it should be a documentary
     */
    documentary?: boolean;
    /**
     * Whether it should contain special features
     */
    specialFeatures?: boolean;
};

