/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AstronomicalObjectV2Base } from './AstronomicalObjectV2Base';
import type { CharacterBase } from './CharacterBase';

/**
 * Full species, returned when queried using UID (V2)
 */
export type SpeciesV2Full = {
    /**
     * Species unique ID
     */
    uid: string;
    /**
     * Species name
     */
    name: string;
    homeworld?: AstronomicalObjectV2Base;
    quadrant?: AstronomicalObjectV2Base;
    /**
     * Whether it's an extinct species
     */
    extinctSpecies?: boolean;
    /**
     * Whether it's a warp-capable species
     */
    warpCapableSpecies?: boolean;
    /**
     * Whether it's an extra-galactic species
     */
    extraGalacticSpecies?: boolean;
    /**
     * Whether it's a humanoid species
     */
    humanoidSpecies?: boolean;
    /**
     * Whether it's a reptilian species
     */
    reptilianSpecies?: boolean;
    /**
     * Whether it's an avian species
     */
    avianSpecies?: boolean;
    /**
     * Whether it's a non-corporeal species
     */
    nonCorporealSpecies?: boolean;
    /**
     * Whether it's a shapeshifting species
     */
    shapeshiftingSpecies?: boolean;
    /**
     * Whether it's a spaceborne species
     */
    spaceborneSpecies?: boolean;
    /**
     * Whether it's a telepathic species
     */
    telepathicSpecies?: boolean;
    /**
     * Whether it's a trans-dimensional species
     */
    transDimensionalSpecies?: boolean;
    /**
     * Whether it's a unnamed species
     */
    unnamedSpecies?: boolean;
    /**
     * Whether this species is from alternate reality
     */
    alternateReality?: boolean;
    /**
     * Characters belonging to the species
     */
    characters?: Array<CharacterBase>;
};

