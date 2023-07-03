import type { RequestSort } from './RequestSort';
/**
 * Book series search criteria
 */
export type BookSeriesSearchCriteria = {
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
     * Book series title
     */
    title?: string;
    /**
     * Starting year the book series was published
     */
    publishedYearFrom?: number;
    /**
     * Ending year the book series was published
     */
    publishedYearTo?: number;
    /**
     * Minimal number of books
     */
    numberOfBooksFrom?: number;
    /**
     * Maximal number of books
     */
    numberOfBooksTo?: number;
    /**
     * Starting year of book series stories
     */
    yearFrom?: number;
    /**
     * Ending year of book series stories
     */
    yearTo?: number;
    /**
     * Whether it should be a miniseries
     */
    miniseries?: boolean;
    /**
     * Whether it should be an e-book series
     */
    ebookSeries?: boolean;
};
