/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CharacterBase } from './CharacterBase';
import type { ComicsBase } from './ComicsBase';
import type { ComicSeriesBase } from './ComicSeriesBase';
import type { CompanyBase } from './CompanyBase';
import type { Reference } from './Reference';
import type { StaffBase } from './StaffBase';

/**
 * Full comic collection, returned when queried using UID
 */
export type ComicCollectionFull = {
    /**
     * Comic collection unique ID
     */
    uid: string;
    /**
     * Comic collection title
     */
    title: string;
    /**
     * Year the comic collection was published
     */
    publishedYear?: number;
    /**
     * Month the comic collection was published
     */
    publishedMonth?: number;
    /**
     * Day the comic collection was published
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
     * Starting stardate of comic collection stories
     */
    stardateFrom?: number;
    /**
     * Ending stardate of comic collection stories
     */
    stardateTo?: number;
    /**
     * Starting year of comic collection stories
     */
    yearFrom?: number;
    /**
     * Ending year of comic collection stories
     */
    yearTo?: number;
    /**
     * Whether it's a photonovel collection
     */
    photonovel?: boolean;
    /**
     * Comic series this comic collection is included in
     */
    comicSeries?: Array<ComicSeriesBase>;
    /**
     * Writers involved in the comic collection
     */
    writers?: Array<StaffBase>;
    /**
     * Artists involved in the comic collection
     */
    artists?: Array<StaffBase>;
    /**
     * Editors involved in the comic collection
     */
    editors?: Array<StaffBase>;
    /**
     * Other staff involved in the comic collection
     */
    staff?: Array<StaffBase>;
    /**
     * Comic collection publishers
     */
    publishers?: Array<CompanyBase>;
    /**
     * Characters appearing in the comic collection
     */
    characters?: Array<CharacterBase>;
    /**
     * References
     */
    references?: Array<Reference>;
    /**
     * Comics included in this comic collection
     */
    comics?: Array<ComicsBase>;
};

