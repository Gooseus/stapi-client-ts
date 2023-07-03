import type { ResponseSortClause } from './ResponseSortClause';
/**
 * Response sort
 */
export type ResponseSort = {
    /**
     * List of response sort rules
     */
    clauses?: Array<ResponseSortClause>;
};
