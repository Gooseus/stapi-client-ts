/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base comic series, returned in search results
 */
export type ComicSeriesBase = {
    /**
     * Comic series unique ID
     */
    uid: string;
    /**
     * Comic series title
     */
    title: string;
    /**
     * Year from which the comic series was published
     */
    publishedYearFrom?: number;
    /**
     * Month from which the comic series was published
     */
    publishedMonthFrom?: number;
    /**
     * Day from which the comic series was published
     */
    publishedDayFrom?: number;
    /**
     * Year to which the comic series was published
     */
    publishedYearTo?: number;
    /**
     * Month to which the comic series was published
     */
    publishedMonthTo?: number;
    /**
     * Day to which the comic series was published
     */
    publishedDayTo?: number;
    /**
     * Number of issues
     */
    numberOfIssues?: number;
    /**
     * Starting stardate of comic series stories
     */
    stardateFrom?: number;
    /**
     * Ending stardate of comic series stories
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
     * Whether it's a miniseries
     */
    miniseries?: boolean;
    /**
     * Whether it's a photonovel series
     */
    photonovelSeries?: boolean;
};

