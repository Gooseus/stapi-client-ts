/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestSortDirection } from './RequestSortDirection';

/**
 * Single request sort clause
 */
export type RequestSortClause = {
    /**
     * Field name results are sorted by
     */
    name: string;
    direction: RequestSortDirection;
    /**
     * Order in which this clause was applied
     */
    clauseOrder: number;
};

