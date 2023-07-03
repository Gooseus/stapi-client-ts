import type { RequestSort } from './RequestSort';
/**
 * Medical condition search criteria
 */
export type MedicalConditionSearchCriteria = {
    /**
     * Zero-based page number
     */
    pageNumber?: number;
    /**
     * Page size
     */
    pageSize?: number;
    sort?: RequestSort;
    /**
     * Medical condition name
     */
    name?: string;
    /**
     * Whether it should be a psychological condition
     */
    psychologicalCondition?: boolean;
};
