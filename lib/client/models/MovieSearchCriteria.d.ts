import type { RequestSort } from './RequestSort';
/**
 * Movie search criteria
 */
export type MovieSearchCriteria = {
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
     * Movie title
     */
    title?: string;
    /**
     * Starting stardate of movie story
     */
    stardateFrom?: number;
    /**
     * Ending stardate of movie story
     */
    stardateTo?: number;
    /**
     * Starting year of movie story
     */
    yearFrom?: number;
    /**
     * Ending year of movie story
     */
    yearTo?: number;
    /**
     * Minimal date the movie was first released in the United States
     */
    usReleaseDateFrom?: string;
    /**
     * Maximal date the movie was first released in the United States
     */
    usReleaseDateTo?: string;
};
