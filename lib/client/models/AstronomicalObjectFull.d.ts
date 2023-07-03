import type { AstronomicalObjectBase } from './AstronomicalObjectBase';
import type { AstronomicalObjectType } from './AstronomicalObjectType';
/**
 * Full astronomical object, returned when queried using UID
 */
export type AstronomicalObjectFull = {
    /**
     * Astronomical object's unique ID
     */
    uid: string;
    /**
     * Astronomical object name
     */
    name: string;
    astronomicalObjectType?: AstronomicalObjectType;
    location?: AstronomicalObjectBase;
    /**
     * Astronomical objects located in this astronomical object, like planets in a star system
     */
    astronomicalObjects: Array<AstronomicalObjectBase>;
};
