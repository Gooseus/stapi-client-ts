import type { OrganizationBase } from './OrganizationBase';
import type { SpacecraftType } from './SpacecraftType';
import type { SpacecraftV2Base } from './SpacecraftV2Base';
import type { SpeciesBase } from './SpeciesBase';
import type { TechnologyV2Base } from './TechnologyV2Base';
import type { WeaponV2Base } from './WeaponV2Base';
/**
 * Full spacecraft class, returned when queried using UID (V3)
 */
export type SpacecraftClassV3Full = {
    /**
     * Spacecraft class unique ID
     */
    uid: string;
    /**
     * Spacecraft class name
     */
    name: string;
    /**
     * Number of decks
     */
    numberOfDecks?: number;
    /**
     * Crew
     */
    crew?: string;
    /**
     * Whether it's a warp-capable spacecraft class
     */
    warpCapable?: boolean;
    /**
     * Whether this spacecraft class is from mirror universe
     */
    mirror?: boolean;
    /**
     * Whether this spacecraft class is from alternate reality
     */
    alternateReality?: boolean;
    /**
     * Starting period when this spacecraft class was in use
     */
    activeFrom?: string;
    /**
     * Ending period when this spacecraft class was in use
     */
    activeTo?: string;
    species?: SpeciesBase;
    /**
     * Owners
     */
    owners?: Array<OrganizationBase>;
    /**
     * Operators
     */
    operators?: Array<OrganizationBase>;
    /**
     * Affiliations
     */
    affiliations?: Array<OrganizationBase>;
    /**
     * Spacecraft types
     */
    spacecraftTypes?: Array<SpacecraftType>;
    /**
     * Armaments
     */
    armaments?: Array<WeaponV2Base>;
    /**
     * Defenses
     */
    defenses?: Array<TechnologyV2Base>;
    /**
     * Spacecrafts
     */
    spacecrafts?: Array<SpacecraftV2Base>;
};
