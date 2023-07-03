/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComicStripBase } from './ComicStripBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';

/**
 * Response object for comic strip search
 */
export type ComicStripBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of comic strips matching given criteria
     */
    comicStrips?: Array<ComicStripBase>;
};

