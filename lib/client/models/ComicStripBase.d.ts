/**
 * Base comic strip, returned in search results
 */
export type ComicStripBase = {
    /**
     * Comic strip unique ID
     */
    uid: string;
    /**
     * Comic strip title
     */
    title: string;
    /**
     * Title of the periodical the comic strip was published in
     */
    periodical?: string;
    /**
     * Year from which the comic strip was published
     */
    publishedYearFrom?: number;
    /**
     * Month from which the comic strip was published
     */
    publishedMonthFrom?: number;
    /**
     * Day from which the comic strip was published
     */
    publishedDayFrom?: number;
    /**
     * Year to which the comic strip was published
     */
    publishedYearTo?: number;
    /**
     * Month to which the comic strip was published
     */
    publishedMonthTo?: number;
    /**
     * Day to which the comic strip was published
     */
    publishedDayTo?: number;
    /**
     * Number of pages
     */
    numberOfPages?: number;
    /**
     * Starting year of comic strip story
     */
    yearFrom?: number;
    /**
     * Ending year of comic strip story
     */
    yearTo?: number;
};
