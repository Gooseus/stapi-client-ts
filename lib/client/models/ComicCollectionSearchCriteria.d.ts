import type { RequestSort } from './RequestSort';
/**
 * Comic collection search criteria
 */
export type ComicCollectionSearchCriteria = {
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
     * Comic collection title
     */
    title?: string;
    /**
     * Starting year the comic collection was published
     */
    publishedYearFrom?: number;
    /**
     * Ending year the comic collection was published
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
     * Starting stardate of comic collection stories
     */
    stardateFrom?: number;
    /**
     * Ending stardate of comic collections stories
     */
    stardateTo?: number;
    /**
     * Starting year of comic collection stories
     */
    yearFrom?: number;
    /**
     * Ending year of comic collections stories
     */
    yearTo?: number;
    /**
     * Whether it should be an photonovel collection
     */
    photonovel?: boolean;
};
