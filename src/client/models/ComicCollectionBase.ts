/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base comic collection, returned in search results
 */
export type ComicCollectionBase = {
    /**
     * Comic collection unique ID
     */
    uid: string;
    /**
     * Comic collection title
     */
    title: string;
    /**
     * Year the comic collection was published
     */
    publishedYear?: number;
    /**
     * Month the comic collection was published
     */
    publishedMonth?: number;
    /**
     * Day the comic collection was published
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
     * Starting stardate of comic collection stories
     */
    stardateFrom?: number;
    /**
     * Ending stardate of comic collection stories
     */
    stardateTo?: number;
    /**
     * Starting year of comic collection stories
     */
    yearFrom?: number;
    /**
     * Ending year of comic collection stories
     */
    yearTo?: number;
    /**
     * Whether it's a photonovel collection
     */
    photonovel?: boolean;
};

