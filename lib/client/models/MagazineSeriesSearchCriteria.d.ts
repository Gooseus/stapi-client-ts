import type { RequestSort } from './RequestSort';
/**
 * Animal search criteria
 */
export type MagazineSeriesSearchCriteria = {
    /**
     * Zero-based page number
     */
    pageNumber?: number;
    /**
     * Page size
     */
    pageSize?: number;
    sort?: RequestSort;
    /**
     * Magazine series title
     */
    title?: string;
    /**
     * Starting year the magazine series was published
     */
    publishedYearFrom?: number;
    /**
     * Ending year the magazine series was published
     */
    publishedYearTo?: number;
    /**
     * Minimal number of issues
     */
    numberOfIssuesFrom?: number;
    /**
     * Maximal number of issues
     */
    numberOfIssuesTo?: number;
};
