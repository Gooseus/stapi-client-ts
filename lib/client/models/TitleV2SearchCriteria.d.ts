import type { RequestSort } from './RequestSort';
/**
 * Animal search criteria
 */
export type TitleV2SearchCriteria = {
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
     * Title name
     */
    name?: string;
    /**
     * Whether it should be a military rank
     */
    militaryRank?: boolean;
    /**
     * Whether it should be a fleet rank
     */
    fleetRank?: boolean;
    /**
     * Whether it should be a religious title
     */
    religiousTitle?: boolean;
    /**
     * Whether it should be a education title
     */
    educationTitle?: boolean;
    /**
     * Whether this title should be from mirror universe
     */
    mirror?: boolean;
};
