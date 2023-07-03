/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base title, returned in search results
 */
export type TitleBase = {
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
     * Whether it's a position
     */
    position?: boolean;
    /**
     * Whether this title is from mirror universe
     */
    mirror?: boolean;
};

