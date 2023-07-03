/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base element, returned in search results (v2)
 */
export type ElementV2Base = {
    /**
     * Element unique ID
     */
    uid: string;
    /**
     * Element name
     */
    name: string;
    /**
     * Element symbol
     */
    symbol?: string;
    /**
     * Element atomic number
     */
    atomicNumber?: number;
    /**
     * Element atomic weight
     */
    atomicWeight?: number;
    /**
     * Whether it's a transuranic
     */
    transuranic?: boolean;
    /**
     * Whether it belongs to Gamma series
     */
    gammaSeries?: boolean;
    /**
     * Whether it belongs to Hypersonic series
     */
    hypersonicSeries?: boolean;
    /**
     * Whether it belongs to Mega series
     */
    megaSeries?: boolean;
    /**
     * Whether it belongs to Omega series
     */
    omegaSeries?: boolean;
    /**
     * Whether it belongs to Transonic series
     */
    transonicSeries?: boolean;
    /**
     * Whether it belongs to World series
     */
    worldSeries?: boolean;
};

