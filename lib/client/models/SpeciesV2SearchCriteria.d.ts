import type { RequestSort } from './RequestSort';
/**
 * Animal search criteria
 */
export type SpeciesV2SearchCriteria = {
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
     * Species name
     */
    name?: string;
    /**
     * Whether it should be an extinct species
     */
    extinctSpecies?: boolean;
    /**
     * Whether it should be a warp-capable species
     */
    warpCapableSpecies?: boolean;
    /**
     * Whether it should be an extra-galactic species
     */
    extraGalacticSpecies?: boolean;
    /**
     * Whether it should be a humanoid species
     */
    humanoidSpecies?: boolean;
    /**
     * Whether it should be a reptilian species
     */
    reptilianSpecies?: boolean;
    /**
     * Whether it should be an avian species
     */
    avianSpecies?: boolean;
    /**
     * Whether it should be a non-corporeal species
     */
    nonCorporealSpecies?: boolean;
    /**
     * Whether it should be a shapeshifting species
     */
    shapeshiftingSpecies?: boolean;
    /**
     * Whether it should be a spaceborne species
     */
    spaceborneSpecies?: boolean;
    /**
     * Whether it should be a telepathic species
     */
    telepathicSpecies?: boolean;
    /**
     * Whether it should be a trans-dimensional species
     */
    transDimensionalSpecies?: boolean;
    /**
     * Whether it should be a unnamed species
     */
    unnamedSpecies?: boolean;
    /**
     * Whether this species should be from alternate reality
     */
    alternateReality?: boolean;
};
