/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AstronomicalObjectV2Base } from './AstronomicalObjectV2Base';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';

/**
 * Response object for astronomical objects search (v2)
 */
export type AstronomicalObjectV2BaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of astronomical objects matching given criteria
     */
    astronomicalObjects?: Array<AstronomicalObjectV2Base>;
};

