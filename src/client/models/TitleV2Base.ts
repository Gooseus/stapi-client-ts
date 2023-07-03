/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base title, returned in search results (V2)
 */
export type TitleV2Base = {
    /**
     * Title unique ID
     */
    uid: string;
    /**
     * Title name
     */
    name: string;
    /**
     * Whether it's a military rank
     */
    militaryRank?: boolean;
    /**
     * Whether it's a fleet rank
     */
    fleetRank?: boolean;
    /**
     * Whether it's a religious title
     */
    religiousTitle?: boolean;
    /**
     * Whether it's a education title
     */
    educationTitle?: boolean;
    /**
     * Whether this title is from mirror universe
     */
    mirror?: boolean;
};

