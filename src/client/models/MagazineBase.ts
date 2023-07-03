/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base magazine, returned in search results
 */
export type MagazineBase = {
    /**
     * Magazine unique ID
     */
    uid: string;
    /**
     * Magazine title
     */
    title: string;
    /**
     * Year the magazine was published
     */
    publishedYear?: number;
    /**
     * Month the magazine was published
     */
    publishedMonth?: number;
    /**
     * Day the magazine was published
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
     * Magazine issue number
     */
    issueNumber?: string;
};

