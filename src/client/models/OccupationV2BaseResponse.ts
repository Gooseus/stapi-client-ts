/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OccupationV2Base } from './OccupationV2Base';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';

/**
 * Response object for occupations search (V2)
 */
export type OccupationV2BaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of occupations matching given criteria
     */
    occupations?: Array<OccupationV2Base>;
};

