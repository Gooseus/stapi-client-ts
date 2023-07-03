import type { SpeciesHeader } from './SpeciesHeader';
/**
 * Base spacecraft class, returned in search results (V2)
 */
export type SpacecraftClassV2Base = {
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
    species?: SpeciesHeader;
};
