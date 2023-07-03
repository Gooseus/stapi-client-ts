/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { SeasonBase } from './SeasonBase';

/**
 * Response object for seasons search
 */
export type SeasonBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of seasons matching given criteria
     */
    seasons?: Array<SeasonBase>;
};

