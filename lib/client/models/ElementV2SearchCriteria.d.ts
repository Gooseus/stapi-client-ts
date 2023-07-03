import type { RequestSort } from './RequestSort';
/**
 * Element search criteria
 */
export type ElementV2SearchCriteria = {
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
     * Element name
     */
    name?: string;
    /**
     * Element symbol
     */
    symbol?: string;
    /**
     * Whether it should be a transuranic
     */
    transuranic?: boolean;
    /**
     * Whether it should belong to Gamma series
     */
    gammaSeries?: boolean;
    /**
     * Whether it should belong to Hypersonic series
     */
    hypersonicSeries?: boolean;
    /**
     * Whether it should belong to Mega series
     */
    megaSeries?: boolean;
    /**
     * Whether it should belong to Omega series
     */
    omegaSeries?: boolean;
    /**
     * Whether it should belong to Transonic series
     */
    transonicSeries?: boolean;
    /**
     * Whether it should belong to World series
     */
    worldSeries?: boolean;
};
