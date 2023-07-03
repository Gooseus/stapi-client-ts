import type { CharacterBase } from './CharacterBase';
import type { ComicsBase } from './ComicsBase';
import type { ComicSeriesBase } from './ComicSeriesBase';
import type { CompanyV2Base } from './CompanyV2Base';
import type { Reference } from './Reference';
import type { StaffV2Base } from './StaffV2Base';
/**
 * Full comic collection, returned when queried using UID (V2)
 */
export type ComicCollectionV2Full = {
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
     * Comic series this comic collection includes
     */
    childComicSeries?: Array<ComicSeriesBase>;
    /**
     * Writers involved in the comic collection
     */
    writers?: Array<StaffV2Base>;
    /**
     * Artists involved in the comic collection
     */
    artists?: Array<StaffV2Base>;
    /**
     * Editors involved in the comic collection
     */
    editors?: Array<StaffV2Base>;
    /**
     * Other staff involved in the comic collection
     */
    staff?: Array<StaffV2Base>;
    /**
     * Comic collection publishers
     */
    publishers?: Array<CompanyV2Base>;
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
