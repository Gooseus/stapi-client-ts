import type { RequestSort } from './RequestSort';
/**
 * Animal search criteria
 */
export type SoundtrackSearchCriteria = {
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
     * Soundtrack title
     */
    title?: string;
    /**
     * Minimal release date
     */
    releaseDateFrom?: string;
    /**
     * Maximal release date
     */
    releaseDateTo?: string;
    /**
     * Minimal length, in seconds
     */
    lengthFrom?: number;
    /**
     * Maximal length, in seconds
     */
    lengthTo?: number;
};
