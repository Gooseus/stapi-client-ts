/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base medical condition, returned in search results
 */
export type MedicalConditionBase = {
    /**
     * Medical condition unique ID
     */
    uid: string;
    /**
     * Medical condition name
     */
    name: string;
    /**
     * Whether it's a psychological condition
     */
    psychologicalCondition?: boolean;
};

