import type { RequestSort } from './RequestSort';
/**
 * Conflict search criteria
 */
export type ConflictSearchCriteria = {
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
     * Conflict name
     */
    name?: string;
    /**
     * Starting year of the conflict
     */
    yearFrom?: number;
    /**
     * Ending year of the conflict
     */
    yearTo?: number;
    /**
     * Whether it should be an Earth conflict
     */
    earthConflict?: boolean;
    /**
     * Whether this conflict should be a part of war involving Federation
     */
    federationWar?: boolean;
    /**
     * Whether this conflict should be a part of war involving the Klingons
     */
    klingonWar?: boolean;
    /**
     * Whether this conflict should be a Dominion war battle
     */
    dominionWarBattle?: boolean;
    /**
     * Whether this conflict should be from alternate reality
     */
    alternateReality?: boolean;
};
