/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base comics, returned in search results
 */
export type ComicsBase = {
    /**
     * Comics unique ID
     */
    uid: string;
    /**
     * Comics title
     */
    title: string;
    /**
     * Year the comics was published
     */
    publishedYear?: number;
    /**
     * Month the comics was published
     */
    publishedMonth?: number;
    /**
     * Day the comics was published
     */
    publishedDay?: number;
    /**
     * Cover publication year
     */
    coverYear?: number;
    /**
     * Cover publication month
     */
    coverMonth?: number;
    /**
     * Cover publication day
     */
    coverDay?: number;
    /**
     * Number of pages
     */
    numberOfPages?: number;
    /**
     * Starting stardate of comic story
     */
    stardateFrom?: number;
    /**
     * Ending stardate of comic story
     */
    stardateTo?: number;
    /**
     * Starting year of comic story
     */
    yearFrom?: number;
    /**
     * Ending year of comic story
     */
    yearTo?: number;
    /**
     * Whether it's a photonovel
     */
    photonovel?: boolean;
    /**
     * Whether it's an adaptation of an episode or a movie
     */
    adaptation?: boolean;
};

