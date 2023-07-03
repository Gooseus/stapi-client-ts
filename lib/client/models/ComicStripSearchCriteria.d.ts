import type { RequestSort } from './RequestSort';
/**
 * Comic strip search criteria
 */
export type ComicStripSearchCriteria = {
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
     * Comic strip title
     */
    title?: string;
    /**
     * Starting year the comic strip was published
     */
    publishedYearFrom?: number;
    /**
     * Ending year the comic strip was published
     */
    publishedYearTo?: number;
    /**
     * Minimal number of pages
     */
    numberOfPagesFrom?: number;
    /**
     * Maximal number of pages
     */
    numberOfPagesTo?: number;
    /**
     * Starting year of comic strip story
     */
    yearFrom?: number;
    /**
     * Ending year of comic strip story
     */
    yearTo?: number;
};
