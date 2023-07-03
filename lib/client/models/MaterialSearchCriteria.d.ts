import type { RequestSort } from './RequestSort';
/**
 * Material search criteria
 */
export type MaterialSearchCriteria = {
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
     * Material name
     */
    name?: string;
    /**
     * Whether it should be a chemical compound
     */
    chemicalCompound?: boolean;
    /**
     * Whether it should be a biochemical compound
     */
    biochemicalCompound?: boolean;
    /**
     * Whether it should be a drug
     */
    drug?: boolean;
    /**
     * Whether it should be a poisonous substance
     */
    poisonousSubstance?: boolean;
    /**
     * Whether it should be an explosive
     */
    explosive?: boolean;
    /**
     * Whether it should be a gemstone
     */
    gemstone?: boolean;
    /**
     * Whether it should be an alloy or a composite
     */
    alloyOrComposite?: boolean;
    /**
     * Whether it should be a fuel
     */
    fuel?: boolean;
    /**
     * Whether it should be a mineral
     */
    mineral?: boolean;
    /**
     * Whether it should be a precious material
     */
    preciousMaterial?: boolean;
};
