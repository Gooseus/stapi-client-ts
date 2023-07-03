/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LiteratureBase } from './LiteratureBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';

/**
 * Response object for literature search
 */
export type LiteratureBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of literature matching given criteria
     */
    literature?: Array<LiteratureBase>;
};

