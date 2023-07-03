import type { AstronomicalObjectHeader } from './AstronomicalObjectHeader';
import type { AstronomicalObjectType } from './AstronomicalObjectType';
/**
 * Base astronomical object, returned in search results
 */
export type AstronomicalObjectBase = {
    /**
     * Astronomical object's unique ID
     */
    uid: string;
    /**
     * Astronomical object name
     */
    name: string;
    astronomicalObjectType: AstronomicalObjectType;
    location?: AstronomicalObjectHeader;
};
