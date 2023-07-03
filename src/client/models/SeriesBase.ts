/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompanyHeader } from './CompanyHeader';

/**
 * Base series, returned in search results
 */
export type SeriesBase = {
    /**
     * Series unique ID
     */
    uid: string;
    /**
     * Series title
     */
    title: string;
    /**
     * Series abbreviation
     */
    abbreviation: string;
    /**
     * Year the series production started
     */
    productionStartYear?: number;
    /**
     * Year the series production ended
     */
    productionEndYear?: number;
    /**
     * Date the series originally ran from
     */
    originalRunStartDate?: string;
    /**
     * Date the series originally ran to
     */
    originalRunEndDate?: string;
    /**
     * Number of seasons
     */
    seasonsCount?: number;
    /**
     * Number of episodes
     */
    episodesCount?: number;
    /**
     * Number of feature length episodes
     */
    featureLengthEpisodesCount?: number;
    productionCompany?: CompanyHeader;
    originalBroadcaster?: CompanyHeader;
};

