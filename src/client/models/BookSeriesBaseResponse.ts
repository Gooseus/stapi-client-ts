/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BookSeriesBase } from './BookSeriesBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';

/**
 * Response object for book series search
 */
export type BookSeriesBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of book series matching given criteria
     */
    bookSeries?: Array<BookSeriesBase>;
};

