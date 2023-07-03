import type { BookBase } from './BookBase';
import type { BookSeriesBase } from './BookSeriesBase';
import type { CharacterBase } from './CharacterBase';
import type { CompanyBase } from './CompanyBase';
import type { Reference } from './Reference';
import type { StaffBase } from './StaffBase';
/**
 * Full book collection, returned when queried using UID
 */
export type BookCollectionFull = {
    /**
     * Book collection unique ID
     */
    uid?: string;
    /**
     * Book collection title
     */
    title?: string;
    /**
     * Year the book collection was published
     */
    publishedYear?: number;
    /**
     * Month the book collection was published
     */
    publishedMonth?: number;
    /**
     * Day the book collection was published
     */
    publishedDay?: number;
    /**
     * Number of pages
     */
    numberOfPages?: number;
    /**
     * Starting stardate of book collection stories
     */
    stardateFrom?: number;
    /**
     * Ending stardate of book collection stories
     */
    stardateTo?: number;
    /**
     * Starting year of book collection stories
     */
    yearFrom?: number;
    /**
     * Ending year of book collection stories
     */
    yearTo?: number;
    /**
     * Book series this book collection is included in
     */
    bookSeries?: Array<BookSeriesBase>;
    /**
     * Authors of the book collection
     */
    authors?: Array<StaffBase>;
    /**
     * Artists involved in the book collection
     */
    artists?: Array<StaffBase>;
    /**
     * Editors involved in the book collection
     */
    editors?: Array<StaffBase>;
    /**
     * Book collection publishers
     */
    publishers?: Array<CompanyBase>;
    /**
     * Characters appearing in the book collection
     */
    characters?: Array<CharacterBase>;
    /**
     * References
     */
    references?: Array<Reference>;
    /**
     * Books included in this book collection
     */
    books?: Array<BookBase>;
};
