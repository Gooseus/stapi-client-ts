/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base material, returned in search results
 */
export type MaterialBase = {
    /**
     * Material unique ID
     */
    uid: string;
    /**
     * Material name
     */
    name: string;
    /**
     * Whether it's a chemical compound
     */
    chemicalCompound?: boolean;
    /**
     * Whether it's a biochemical compound
     */
    biochemicalCompound?: boolean;
    /**
     * Whether it's a drug
     */
    drug?: boolean;
    /**
     * Whether it's a poisonous substance
     */
    poisonousSubstance?: boolean;
    /**
     * Whether it's an explosive
     */
    explosive?: boolean;
    /**
     * Whether it's a gemstone
     */
    gemstone?: boolean;
    /**
     * Whether it's an alloy or a composite
     */
    alloyOrComposite?: boolean;
    /**
     * Whether it's a fuel
     */
    fuel?: boolean;
    /**
     * Whether it's a mineral
     */
    mineral?: boolean;
    /**
     * Whether it's a precious material
     */
    preciousMaterial?: boolean;
};

