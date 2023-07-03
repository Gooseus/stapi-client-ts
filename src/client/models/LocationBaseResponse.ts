/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocationBase } from './LocationBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';

/**
 * Response object for locations search
 */
export type LocationBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of locations matching given criteria
     */
    locations?: Array<LocationBase>;
};

