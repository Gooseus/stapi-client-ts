/**
 * Base book collection, returned in search results
 */
export type BookCollectionBase = {
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
};
