import type { RequestSort } from './RequestSort';
/**
 * Character search criteria
 */
export type CharacterSearchCriteria = {
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
     * Character name
     */
    name?: string;
    /**
     * Character gender
     */
    gender?: string;
    /**
     * Whether it should be a deceased character
     */
    deceased?: boolean;
    /**
     * Whether it should be a hologram
     */
    hologram?: boolean;
    /**
     * Whether it should be a fictional character (from universe point of view)
     */
    fictionalCharacter?: boolean;
    /**
     * Whether it should be a mirror universe character
     */
    mirror?: boolean;
    /**
     * Whether it should be a alternate reality character
     */
    alternateReality?: boolean;
};
