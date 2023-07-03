/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestSort } from './RequestSort';

/**
 * Episode search criteria
 */
export type EpisodeSearchCriteria = {
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
     * Episode title
     */
    title?: string;
    /**
     * Minimal season number
     */
    seasonNumberFrom?: number;
    /**
     * Maximal season number
     */
    seasonNumberTo?: number;
    /**
     * Minimal episode number in season
     */
    episodeNumberFrom?: number;
    /**
     * Maximal episode number in season
     */
    episodeNumberTo?: number;
    /**
     * Production serial number
     */
    productionSerialNumber?: string;
    /**
     * Whether it should be a feature length episode
     */
    featureLength?: boolean;
    /**
     * Starting stardate of episode story
     */
    stardateFrom?: number;
    /**
     * Ending stardate of episode story
     */
    stardateTo?: number;
    /**
     * Starting year of episode story
     */
    yearFrom?: number;
    /**
     * Ending year of episode story
     */
    yearTo?: number;
    /**
     * Minimal date the episode was first aired in the United States
     */
    usAirDateFrom?: string;
    /**
     * Maximal date the episode was first aired in the United States
     */
    usAirDateTo?: string;
    /**
     * Minimal date the episode script was completed
     */
    finalScriptDateFrom?: string;
    /**
     * Maximal date the episode script was completed
     */
    finalScriptDateTo?: string;
};

