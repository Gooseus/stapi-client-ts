/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base book series, returned in search results
 */
export type BookSeriesBase = {
    /**
     * Book series unique ID
     */
    uid: string;
    /**
     * Book series title
     */
    title: string;
    /**
     * Year from which the book series was published
     */
    publishedYearFrom?: number;
    /**
     * Month from which the book series was published
     */
    publishedMonthFrom?: number;
    /**
     * Year to which the book series was published
     */
    publishedYearTo?: number;
    /**
     * Month to which the book series was published
     */
    publishedMonthTo?: number;
    /**
     * Number of pages
     */
    numberOfBooks?: number;
    /**
     * Starting year of book series stories
     */
    yearFrom?: number;
    /**
     * Ending year of book series stories
     */
    yearTo?: number;
    /**
     * Whether it's a miniseries
     */
    miniseries?: boolean;
    /**
     * Whether it's a e-book series
     */
    ebookSeries?: boolean;
};

