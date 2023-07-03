import type { RequestSort } from './RequestSort';
/**
 * Location search criteria (V2)
 */
export type LocationV2SearchCriteria = {
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
     * Location name
     */
    name?: string;
    /**
     * Whether it should be an earthly location
     */
    earthlyLocation?: boolean;
    /**
     * Whether it should be a Qo'nos location
     */
    qonosLocation?: boolean;
    /**
     * Whether it should be a fictional location
     */
    fictionalLocation?: boolean;
    /**
     * Whether it should be a mythological location
     */
    mythologicalLocation?: boolean;
    /**
     * Whether it should be a religious location
     */
    religiousLocation?: boolean;
    /**
     * Whether it should be a geographical location
     */
    geographicalLocation?: boolean;
    /**
     * Whether it should be a body of water
     */
    bodyOfWater?: boolean;
    /**
     * Whether it should be a country
     */
    country?: boolean;
    /**
     * Whether it should be a subnational entity
     */
    subnationalEntity?: boolean;
    /**
     * Whether it should be a settlement
     */
    settlement?: boolean;
    /**
     * Whether it should be a US settlement
     */
    usSettlement?: boolean;
    /**
     * Whether it should be a Bajoran settlement
     */
    bajoranSettlement?: boolean;
    /**
     * Whether it should be a colony
     */
    colony?: boolean;
    /**
     * Whether it should be a landform
     */
    landform?: boolean;
    /**
     * Whether it should be a road
     */
    road?: boolean;
    /**
     * Whether it should be a structure
     */
    structure?: boolean;
    /**
     * Whether it should be a shipyard
     */
    shipyard?: boolean;
    /**
     * Whether it should be a building interior
     */
    buildingInterior?: boolean;
    /**
     * Whether it should be a establishment
     */
    establishment?: boolean;
    /**
     * Whether it should be a medical establishment
     */
    medicalEstablishment?: boolean;
    /**
     * Whether it should be a DS9 establishment
     */
    ds9Establishment?: boolean;
    /**
     * Whether it should be a school
     */
    school?: boolean;
    /**
     * Whether it should be a restaurant
     */
    restaurant?: boolean;
    /**
     * Whether it should be a residence
     */
    residence?: boolean;
    /**
     * Whether this location should be from mirror universe
     */
    mirror?: boolean;
    /**
     * Whether this location should be from alternate reality
     */
    alternateReality?: boolean;
};
