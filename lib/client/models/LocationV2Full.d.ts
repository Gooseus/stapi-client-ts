/**
 * Full location, returned when queried using UID (V2)
 */
export type LocationV2Full = {
    /**
     * Location unique ID
     */
    uid: string;
    /**
     * Location name
     */
    name: string;
    /**
     * Whether it's an earthly location
     */
    earthlyLocation?: boolean;
    /**
     * Whether it's a Qo'noS location
     */
    qonosLocation?: boolean;
    /**
     * Whether it's a fictional location
     */
    fictionalLocation?: boolean;
    /**
     * Whether it's a mythological location
     */
    mythologicalLocation?: boolean;
    /**
     * Whether it's a religious location
     */
    religiousLocation?: boolean;
    /**
     * Whether it's a geographical location
     */
    geographicalLocation?: boolean;
    /**
     * Whether it's a body of water
     */
    bodyOfWater?: boolean;
    /**
     * Whether it's a country
     */
    country?: boolean;
    /**
     * Whether it's a subnational entity
     */
    subnationalEntity?: boolean;
    /**
     * Whether it's a settlement
     */
    settlement?: boolean;
    /**
     * Whether it's a US settlement
     */
    usSettlement?: boolean;
    /**
     * Whether it's a Bajoran settlement
     */
    bajoranSettlement?: boolean;
    /**
     * Whether it's a colony
     */
    colony?: boolean;
    /**
     * Whether it's a landform
     */
    landform?: boolean;
    /**
     * Whether it's a road
     */
    road?: boolean;
    /**
     * Whether it's a structure
     */
    structure?: boolean;
    /**
     * Whether it's a shipyard
     */
    shipyard?: boolean;
    /**
     * Whether it's a building interior
     */
    buildingInterior?: boolean;
    /**
     * Whether it's a establishment
     */
    establishment?: boolean;
    /**
     * Whether it's a medical establishment
     */
    medicalEstablishment?: boolean;
    /**
     * Whether it's a DS9 establishment
     */
    ds9Establishment?: boolean;
    /**
     * Whether it's a school
     */
    school?: boolean;
    /**
     * Whether it's a restaurant
     */
    restaurant?: boolean;
    /**
     * Whether it's a residence
     */
    residence?: boolean;
    /**
     * Whether this location is from mirror universe
     */
    mirror?: boolean;
    /**
     * Whether this location is from alternate reality
     */
    alternateReality?: boolean;
};
