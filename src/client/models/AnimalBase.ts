/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base animal, returned in search results
 */
export type AnimalBase = {
    /**
     * Animal unique ID
     */
    uid: string;
    /**
     * Animal name
     */
    name: string;
    /**
     * Whether it's an earth animal
     */
    earthAnimal?: boolean;
    /**
     * Whether it's an earth insect
     */
    earthInsect?: boolean;
    /**
     * Whether it's an avian
     */
    avian?: boolean;
    /**
     * Whether it's a canine
     */
    canine?: boolean;
    /**
     * Whether it's a feline
     */
    feline?: boolean;
};

