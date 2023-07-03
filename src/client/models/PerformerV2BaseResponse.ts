/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PerformerV2Base } from './PerformerV2Base';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';

/**
 * Response object for performers search (V2)
 */
export type PerformerV2BaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of performers matching given criteria
     */
    performers?: Array<PerformerV2Base>;
};

