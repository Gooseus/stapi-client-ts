/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StaffHeader } from './StaffHeader';

/**
 * Base movie, returned in search results
 */
export type MovieBase = {
    /**
     * Movie unique ID
     */
    uid: string;
    /**
     * Movie title
     */
    title: string;
    mainDirector?: StaffHeader;
    /**
     * Movie title in Bulgarian
     */
    titleBulgarian?: string;
    /**
     * Movie title in Catalan
     */
    titleCatalan?: string;
    /**
     * Movie title in Chinese traditional
     */
    titleChineseTraditional?: string;
    /**
     * Movie title in German
     */
    titleGerman?: string;
    /**
     * Movie title in Italian
     */
    titleItalian?: string;
    /**
     * Movie title in Japanese
     */
    titleJapanese?: string;
    /**
     * Movie title in Polish
     */
    titlePolish?: string;
    /**
     * Movie title in Russian
     */
    titleRussian?: string;
    /**
     * Movie title in Serbian
     */
    titleSerbian?: string;
    /**
     * Movie title in Spanish
     */
    titleSpanish?: string;
    /**
     * Starting stardate of movie story
     */
    stardateFrom?: number;
    /**
     * Ending stardate of movie story
     */
    stardateTo?: number;
    /**
     * Starting year of movie story
     */
    yearFrom?: number;
    /**
     * Ending year of movie story
     */
    yearTo?: number;
    /**
     * Date the movie was first released in the United States
     */
    usReleaseDate?: string;
};

