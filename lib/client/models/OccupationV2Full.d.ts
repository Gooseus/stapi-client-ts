import type { CharacterBase } from './CharacterBase';
/**
 * Full occupation, returned when queried using UID (V2)
 */
export type OccupationV2Full = {
    /**
     * Occupation unique ID
     */
    uid: string;
    /**
     * Occupation name
     */
    name: string;
    /**
     * Whether it's an arts occupation
     */
    artsOccupation?: boolean;
    /**
     * Whether it's a communication occupation
     */
    communicationOccupation?: boolean;
    /**
     * Whether it's an economic occupation
     */
    economicOccupation?: boolean;
    /**
     * Whether it's an education occupation
     */
    educationOccupation?: boolean;
    /**
     * Whether it's an entertainment occupation
     */
    entertainmentOccupation?: boolean;
    /**
     * Whether it's an illegal occupation
     */
    illegalOccupation?: boolean;
    /**
     * Whether it's a legal occupation
     */
    legalOccupation?: boolean;
    /**
     * Whether it's a medical occupation
     */
    medicalOccupation?: boolean;
    /**
     * Whether it's a scientific occupation
     */
    scientificOccupation?: boolean;
    /**
     * Whether it's a sports occupation
     */
    sportsOccupation?: boolean;
    /**
     * Whether it's a victual occupation
     */
    victualOccupation?: boolean;
    /**
     * Characters with this occupation
     */
    characters?: Array<CharacterBase>;
};
