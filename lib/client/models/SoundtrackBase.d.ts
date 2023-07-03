/**
 * Base soundtrack, returned in search results
 */
export type SoundtrackBase = {
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
};
