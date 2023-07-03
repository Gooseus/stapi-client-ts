/**
 * Base magazine series, returned in search results
 */
export type MagazineSeriesBase = {
    /**
     * Magazine series unique ID
     */
    uid: string;
    /**
     * Magazine series title
     */
    title: string;
    /**
     * Year from which the magazine series was published
     */
    publishedYearFrom?: number;
    /**
     * Month from which the magazine series was published
     */
    publishedMonthFrom?: number;
    /**
     * Year to which the magazine series was published
     */
    publishedYearTo?: number;
    /**
     * Month to which the magazine series was published
     */
    publishedMonthTo?: number;
    /**
     * Number of issues
     */
    numberOfIssues?: number;
};
