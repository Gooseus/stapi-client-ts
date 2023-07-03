/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Object describing response page
 */
export type ResponsePage = {
    /**
     * Zero-based page number
     */
    pageNumber?: number;
    /**
     * Page size
     */
    pageSize?: number;
    /**
     * Number of elements in page
     */
    numberOfElements?: number;
    /**
     * Total elements found
     */
    totalElements?: number;
    /**
     * Total pages found
     */
    totalPages?: number;
    /**
     * Whether it is the first page
     */
    firstPage?: boolean;
    /**
     * Whether it is the last page
     */
    lastPage?: boolean;
};

