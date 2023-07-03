import type { RequestSort } from './RequestSort';
/**
 * Animal search criteria
 */
export type VideoGameSearchCriteria = {
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
     * Video game title
     */
    title?: string;
    /**
     * Minimal date the video game was first released
     */
    releaseDateFrom?: string;
    /**
     * Minimal date the video game was first released
     */
    releaseDateTo?: string;
};
