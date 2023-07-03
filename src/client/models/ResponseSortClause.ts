/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseSortDirection } from './ResponseSortDirection';

/**
 * Single response sort clause
 */
export type ResponseSortClause = {
    /**
     * Field name results are sorted by
     */
    name: string;
    direction: ResponseSortDirection;
    /**
     * Order in which this clause was applied
     */
    clauseOrder: number;
};

