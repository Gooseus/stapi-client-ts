/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComicSeriesBase } from './ComicSeriesBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';

/**
 * Response object for comic series search
 */
export type ComicSeriesBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of comic series matching given criteria
     */
    comicSeries?: Array<ComicSeriesBase>;
};

