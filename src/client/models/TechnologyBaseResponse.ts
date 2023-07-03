/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { TechnologyBase } from './TechnologyBase';

/**
 * Response object for technology search
 */
export type TechnologyBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of technology matching given criteria
     */
    technology?: Array<TechnologyBase>;
};

