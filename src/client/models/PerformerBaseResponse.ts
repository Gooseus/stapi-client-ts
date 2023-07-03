/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PerformerBase } from './PerformerBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';

/**
 * Response object for performers search
 */
export type PerformerBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of performers matching given criteria
     */
    performers?: Array<PerformerBase>;
};

