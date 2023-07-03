import type { AstronomicalObjectHeader } from './AstronomicalObjectHeader';
import type { AstronomicalObjectV2Type } from './AstronomicalObjectV2Type';
/**
 * Base astronomical object, returned in search results (V2)
 */
export type AstronomicalObjectV2Base = {
    /**
     * Astronomical object's unique ID
     */
    uid: string;
    /**
     * Astronomical object name
     */
    name: string;
    astronomicalObjectType: AstronomicalObjectV2Type;
    location?: AstronomicalObjectHeader;
};
