import type { CharacterBase } from './CharacterBase';
import type { LocationBase } from './LocationBase';
import type { LocationV2Base } from './LocationV2Base';
import type { OrganizationBase } from './OrganizationBase';
/**
 * Base conflict, returned in search results (V2)
 */
export type ConflictV2Full = {
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
     * Whether it is an Earth conflict
     */
    earthConflict?: boolean;
    /**
     * Whether this conflict is a part of war involving Federation
     */
    federationWar?: boolean;
    /**
     * Whether this conflict is a part of war involving the Klingons
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
    /**
     * Locations this conflict occurred at
     */
    locations?: Array<LocationBase>;
    /**
     * Organization involved in conflict on first side
     */
    firstSideBelligerents?: Array<OrganizationBase>;
    /**
     * Locations involved in conflict on first side
     */
    firstSideLocations?: Array<LocationV2Base>;
    /**
     * Commanders involved in conflict on first side
     */
    firstSideCommanders?: Array<CharacterBase>;
    /**
     * Organization involved in conflict on second side
     */
    secondSideBelligerents?: Array<OrganizationBase>;
    /**
     * Locations involved in conflict on second side
     */
    secondSideLocations?: Array<LocationV2Base>;
    /**
     * Commanders involved in conflict on second side
     */
    secondSideCommanders?: Array<CharacterBase>;
};
