/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BloodType } from './BloodType';
import type { CharacterRelation } from './CharacterRelation';
import type { CharacterSpecies } from './CharacterSpecies';
import type { EpisodeBase } from './EpisodeBase';
import type { Gender } from './Gender';
import type { MaritalStatus } from './MaritalStatus';
import type { MovieBase } from './MovieBase';
import type { OccupationBase } from './OccupationBase';
import type { OrganizationBase } from './OrganizationBase';
import type { PerformerBase } from './PerformerBase';
import type { TitleBase } from './TitleBase';

/**
 * Full character, returned when queried using UID
 */
export type CharacterFull = {
    /**
     * Character unique ID
     */
    uid: string;
    /**
     * Character name
     */
    name: string;
    gender?: Gender;
    /**
     * Year the character was born
     */
    yearOfBirth?: number;
    /**
     * Month the character was born
     */
    monthOfBirth?: number;
    /**
     * Day the character was born
     */
    dayOfBirth?: number;
    /**
     * Place of birth
     */
    placeOfBirth?: string;
    /**
     * Year the character died
     */
    yearOfDeath?: number;
    /**
     * Month the character died
     */
    monthOfDeath?: number;
    /**
     * Day the character died
     */
    dayOfDeath?: number;
    /**
     * Place of death
     */
    placeOfDeath?: string;
    /**
     * Height in centimeters
     */
    height?: number;
    /**
     * Weight in kilograms
     */
    weight?: number;
    /**
     * Whether this character is deceased
     */
    deceased?: boolean;
    bloodType?: BloodType;
    maritalStatus?: MaritalStatus;
    /**
     * Serial number
     */
    serialNumber?: string;
    /**
     * Hologram activation date
     */
    hologramActivationDate?: string;
    /**
     * Hologram status
     */
    hologramStatus?: string;
    /**
     * Hologram date status
     */
    hologramDateStatus?: string;
    /**
     * Whether this character is a hologram
     */
    hologram?: boolean;
    /**
     * Whether this character is a fictional character (from universe point of view)
     */
    fictionalCharacter?: boolean;
    /**
     * Whether this character is from mirror universe
     */
    mirror?: boolean;
    /**
     * Whether this character is from alternate reality
     */
    alternateReality?: boolean;
    /**
     * Performers who played this character
     */
    performers?: Array<PerformerBase>;
    /**
     * Episodes in which this character appeared
     */
    episodes?: Array<EpisodeBase>;
    /**
     * Movies in which this character appeared
     */
    movies?: Array<MovieBase>;
    /**
     * Species this character belongs to
     */
    characterSpecies?: Array<CharacterSpecies>;
    /**
     * Relations with other characters
     */
    characterRelations?: Array<CharacterRelation>;
    /**
     * Titles this character holds
     */
    titles?: Array<TitleBase>;
    /**
     * Occupations of this character
     */
    occupations?: Array<OccupationBase>;
    /**
     * Organizations this character has affiliation with
     */
    organizations?: Array<OrganizationBase>;
};

