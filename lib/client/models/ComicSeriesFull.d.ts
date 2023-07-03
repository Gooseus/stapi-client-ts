import type { ComicsBase } from './ComicsBase';
import type { ComicSeriesBase } from './ComicSeriesBase';
import type { CompanyBase } from './CompanyBase';
/**
 * Full comic series, returned when queried using UID
 */
export type ComicSeriesFull = {
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
    /**
     * Comic series this comic series is included in
     */
    parentSeries?: Array<ComicSeriesBase>;
    /**
     * Child comic series included in this comic series
     */
    childSeries?: Array<ComicSeriesBase>;
    /**
     * Companies that published this comic series
     */
    publishers?: Array<CompanyBase>;
    /**
     * Comics included in this comic series
     */
    comics?: Array<ComicsBase>;
};
