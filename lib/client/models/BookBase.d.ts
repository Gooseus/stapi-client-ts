/**
 * Base book, returned in search results
 */
export type BookBase = {
    /**
     * Book unique ID
     */
    uid: string;
    /**
     * Book title
     */
    title: string;
    /**
     * Year the book was published
     */
    publishedYear?: number;
    /**
     * Month the book was published
     */
    publishedMonth?: number;
    /**
     * Day the book was published
     */
    publishedDay?: number;
    /**
     * Number of pages
     */
    numberOfPages?: number;
    /**
     * Starting stardate of book story
     */
    stardateFrom?: number;
    /**
     * Ending stardate of book story
     */
    stardateTo?: number;
    /**
     * Starting year of book story
     */
    yearFrom?: number;
    /**
     * Ending year of book story
     */
    yearTo?: number;
    /**
     * Whether it's a novel
     */
    novel: boolean;
    /**
     * Whether it's a reference book
     */
    referenceBook: boolean;
    /**
     * Whether it's a biography book
     */
    biographyBook: boolean;
    /**
     * Whether it's a role playing book
     */
    rolePlayingBook: boolean;
    /**
     * Whether it's an e-book
     */
    ebook: boolean;
    /**
     * Whether it's an anthology
     */
    anthology: boolean;
    /**
     * Whether it's a novelization
     */
    novelization: boolean;
    /**
     * Whether it's an audiobook, or has been release as an audiobook in addition to other form
     */
    audiobook: boolean;
    /**
     * If it's an audiobook, whether it's been abridged
     */
    audiobookAbridged: boolean;
    /**
     * Year the audiobook was published
     */
    audiobookPublishedYear?: number;
    /**
     * Month the audiobook was published
     */
    audiobookPublishedMonth?: number;
    /**
     * Day the audiobook was published
     */
    audiobookPublishedDay?: number;
    /**
     * Audiobook run time, in minutes
     */
    audiobookRunTime?: number;
    /**
     * Book's production number
     */
    productionNumber?: string;
};
