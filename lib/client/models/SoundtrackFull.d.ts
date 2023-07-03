import type { CompanyBase } from './CompanyBase';
import type { Reference } from './Reference';
import type { StaffBase } from './StaffBase';
/**
 * Full soundtrack, returned when queried using UID
 */
export type SoundtrackFull = {
    /**
     * Soundtrack unique ID
     */
    uid: string;
    /**
     * Soundtrack title
     */
    title: string;
    /**
     * Release date
     */
    releaseDate?: string;
    /**
     * Length, in seconds
     */
    length?: number;
    /**
     * Labels this soundtrack was released by
     */
    labels?: Array<CompanyBase>;
    /**
     * Composers
     */
    composers?: Array<StaffBase>;
    /**
     * Other musicians that contributed to this soundtrack
     */
    contributors?: Array<StaffBase>;
    /**
     * Orchestrators
     */
    orchestrators?: Array<StaffBase>;
    /**
     * References
     */
    references?: Array<Reference>;
};
