import type { RequestSort } from './RequestSort';
/**
 * Book search criteria (V2)
 */
export type BookV2SearchCriteria = {
    /**
     * Zero-based page number
     */
    pageNumber?: number;
    /**
     * Page size
     */
    pageSize?: number;
    sort?: RequestSort;
    /**
     * Book title
     */
    title?: string;
    /**
     * Starting year the book was published
     */
    publishedYearFrom?: number;
    /**
     * Ending year the book was published
     */
    publishedYearTo?: number;
    /**
     * Minimal number of pages
     */
    numberOfPagesFrom?: number;
    /**
     * Maximal number of pages
     */
    numberOfPagesTo?: number;
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
     * Whether it should be a novel
     */
    novel?: boolean;
    /**
     * Whether it should be a reference book
     */
    referenceBook?: boolean;
    /**
     * Whether it should be a biography book
     */
    biographyBook?: boolean;
    /**
     * Whether it should be a role playing book
     */
    rolePlayingBook?: boolean;
    /**
     * Whether it should be an unauthorized publication
     */
    unauthorizedPublication?: boolean;
    /**
     * Whether it should be an e-book
     */
    ebook?: boolean;
    /**
     * Whether it should be an anthology
     */
    anthology?: boolean;
    /**
     * Whether it should be novelization
     */
    novelization?: boolean;
    /**
     * Whether it should be an audiobook
     */
    audiobook?: boolean;
    /**
     * Whether it should be an audiobook, abridged
     */
    audiobookAbridged?: boolean;
    /**
     * Starting year the audiobook was published
     */
    audiobookPublishedYearFrom?: number;
    /**
     * Ending year the audiobook was published
     */
    audiobookPublishedYearTo?: number;
    /**
     * Minimal audiobook run time, in minutes
     */
    audiobookRunTimeFrom?: number;
    /**
     * Maximal audiobook run time, in minutes
     */
    audiobookRunTimeTo?: number;
};
