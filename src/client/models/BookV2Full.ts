/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BookCollectionBase } from './BookCollectionBase';
import type { BookSeriesBase } from './BookSeriesBase';
import type { CharacterBase } from './CharacterBase';
import type { CompanyV2Base } from './CompanyV2Base';
import type { Reference } from './Reference';
import type { StaffV2Base } from './StaffV2Base';

/**
 * Full book, returned when queried using UID (V2)
 */
export type BookV2Full = {
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
     * Whether it's an unauthorized publication
     */
    unauthorizedPublication: boolean;
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
     * Book production number
     */
    productionNumber?: string;
    /**
     * Book series this book is included in
     */
    bookSeries?: Array<BookSeriesBase>;
    /**
     * Authors of the book
     */
    authors?: Array<StaffV2Base>;
    /**
     * Artists involved in the book
     */
    artists?: Array<StaffV2Base>;
    /**
     * Editors involved in the book
     */
    editors?: Array<StaffV2Base>;
    /**
     * Audiobook narrators
     */
    audiobookNarrators?: Array<StaffV2Base>;
    /**
     * Book publishers
     */
    publishers?: Array<CompanyV2Base>;
    /**
     * Audiobook publishers
     */
    audiobookPublishers?: Array<CompanyV2Base>;
    /**
     * Characters appearing the book
     */
    characters?: Array<CharacterBase>;
    /**
     * References
     */
    references?: Array<Reference>;
    /**
     * Audiobook references
     */
    audiobookReferences?: Array<Reference>;
    /**
     * Book collections this book is included in
     */
    bookCollections?: Array<BookCollectionBase>;
};

