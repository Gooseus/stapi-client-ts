/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base conflict, returned in search results
 */
export type ConflictBase = {
    /**
     * Conflict unique ID
     */
    uid: string;
    /**
     * Conflict name
     */
    name: string;
    /**
     * Starting year of the conflict
     */
    yearFrom?: number;
    /**
     * Ending year of the conflict
     */
    yearTo?: number;
    /**
     * Whether it was an Earth conflict
     */
    earthConflict?: boolean;
    /**
     * Whether this conflict is part of war involving Federation
     */
    federationWar?: boolean;
    /**
     * Whether this conflict is part of war involving the Klingons
     */
    klingonWar?: boolean;
    /**
     * Whether this conflict is a Dominion war battle
     */
    dominionWarBattle?: boolean;
    /**
     * Whether this conflict is from alternate reality
     */
    alternateReality?: boolean;
};

