/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OccupationBase } from './OccupationBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';

/**
 * Response object for occupations search
 */
export type OccupationBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of occupations matching given criteria
     */
    occupations?: Array<OccupationBase>;
};

