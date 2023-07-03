import type { CharacterBase } from './CharacterBase';
/**
 * Full occupation, returned when queried using UID
 */
export type OccupationFull = {
    /**
     * Occupation unique ID
     */
    uid: string;
    /**
     * Occupation name
     */
    name: string;
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
     * Characters with this occupation
     */
    characters?: Array<CharacterBase>;
};
