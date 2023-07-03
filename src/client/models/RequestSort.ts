/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestSortClause } from './RequestSortClause';

/**
 * Request sort
 */
export type RequestSort = {
    /**
     * List of request sort rules
     */
    clauses?: Array<RequestSortClause>;
};

