import type { AstronomicalObjectV2Base } from './AstronomicalObjectV2Base';
import type { AstronomicalObjectV2Type } from './AstronomicalObjectV2Type';
/**
 * Full astronomical object, returned when queried using UID (V2)
 */
export type AstronomicalObjectV2Full = {
    /**
     * Astronomical object's unique ID
     */
    uid: string;
    /**
     * Astronomical object name
     */
    name: string;
    astronomicalObjectType: AstronomicalObjectV2Type;
    location?: AstronomicalObjectV2Base;
    /**
     * Astronomical objects located in this astronomical object, like planets in a star system
     */
    astronomicalObjects?: Array<AstronomicalObjectV2Base>;
};
