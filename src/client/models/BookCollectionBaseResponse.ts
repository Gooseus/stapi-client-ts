/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BookCollectionBase } from './BookCollectionBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';

/**
 * Response object for book collections search
 */
export type BookCollectionBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of book collections matching given criteria
     */
    bookCollections?: Array<BookCollectionBase>;
};

