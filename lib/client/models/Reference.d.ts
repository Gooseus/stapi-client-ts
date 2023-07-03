import type { ReferenceType } from './ReferenceType';
/**
 * Reference of book, comics, video release, etc.
 */
export type Reference = {
    /**
     * Reference unique ID
     */
    uid?: string;
    referenceType?: ReferenceType;
    /**
     * Reference number
     */
    referenceNumber?: string;
};
