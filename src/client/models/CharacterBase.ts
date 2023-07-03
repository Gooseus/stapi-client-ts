/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BloodType } from './BloodType';
import type { Gender } from './Gender';
import type { MaritalStatus } from './MaritalStatus';

/**
 * Base character, returned in search results
 */
export type CharacterBase = {
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
};

