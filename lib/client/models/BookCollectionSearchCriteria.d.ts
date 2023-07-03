import type { RequestSort } from './RequestSort';
/**
 * Book collection search criteria
 */
export type BookCollectionSearchCriteria = {
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
     * Book collection title
     */
    title?: string;
    /**
     * Starting year the book collection was published
     */
    publishedYearFrom?: number;
    /**
     * Ending year the book collection was published
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
     * Starting stardate of book collection stories
     */
    stardateFrom?: number;
    /**
     * Ending stardate of book collections stories
     */
    stardateTo?: number;
    /**
     * Starting year of book collection stories
     */
    yearFrom?: number;
    /**
     * Ending year of book collections stories
     */
    yearTo?: number;
};
