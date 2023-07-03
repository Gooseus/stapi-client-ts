/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CharacterBase } from './CharacterBase';
import type { ComicCollectionBase } from './ComicCollectionBase';
import type { ComicSeriesBase } from './ComicSeriesBase';
import type { CompanyBase } from './CompanyBase';
import type { Reference } from './Reference';
import type { StaffBase } from './StaffBase';

/**
 * Full comics, returned when queried using UID
 */
export type ComicsFull = {
    /**
     * Comics unique ID
     */
    uid: string;
    /**
     * Comics title
     */
    title: string;
    /**
     * Year the comics was published
     */
    publishedYear?: number;
    /**
     * Month the comics was published
     */
    publishedMonth?: number;
    /**
     * Day the comics was published
     */
    publishedDay?: number;
    /**
     * Cover publication year
     */
    coverYear?: number;
    /**
     * Cover publication month
     */
    coverMonth?: number;
    /**
     * Cover publication day
     */
    coverDay?: number;
    /**
     * Number of pages
     */
    numberOfPages?: number;
    /**
     * Starting stardate of comic story
     */
    stardateFrom?: number;
    /**
     * Ending stardate of comic story
     */
    stardateTo?: number;
    /**
     * Starting year of comic  story
     */
    yearFrom?: number;
    /**
     * Ending year of comic story
     */
    yearTo?: number;
    /**
     * Whether it's a photonovel
     */
    photonovel?: boolean;
    /**
     * Whether it's an adaptation of an episode or a movie
     */
    adaptation?: boolean;
    /**
     * Comic series this comics is included in
     */
    comicSeries?: Array<ComicSeriesBase>;
    /**
     * Writers involved in the comics
     */
    writers?: Array<StaffBase>;
    /**
     * Artists involved in the comics
     */
    artists?: Array<StaffBase>;
    /**
     * Editors involved in the comics
     */
    editors?: Array<StaffBase>;
    /**
     * Other staff involved in the comics
     */
    staff?: Array<StaffBase>;
    /**
     * Comics publishers
     */
    publishers?: Array<CompanyBase>;
    /**
     * Characters appearing in the comics
     */
    characters?: Array<CharacterBase>;
    /**
     * References
     */
    references?: Array<Reference>;
    /**
     * Comic collections this comics is included in
     */
    comicCollections?: Array<ComicCollectionBase>;
};

