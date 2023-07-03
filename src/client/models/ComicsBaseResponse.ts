/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComicsBase } from './ComicsBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';

/**
 * Response object for comics search
 */
export type ComicsBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of comics matching given criteria
     */
    comics?: Array<ComicsBase>;
};

