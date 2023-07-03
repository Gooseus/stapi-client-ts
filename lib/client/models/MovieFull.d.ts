import type { CharacterBase } from './CharacterBase';
import type { PerformerBase } from './PerformerBase';
import type { StaffBase } from './StaffBase';
/**
 * Full movie, returned when queried using UID
 */
export type MovieFull = {
    /**
     * Movie unique ID
     */
    uid: string;
    /**
     * Movie title
     */
    title: string;
    mainDirector?: StaffBase;
    /**
     * Movie title in Bulgarian
     */
    titleBulgarian?: string;
    /**
     * Movie title in Catalan
     */
    titleCatalan?: string;
    /**
     * Movie title in Chinese traditional
     */
    titleChineseTraditional?: string;
    /**
     * Movie title in German
     */
    titleGerman?: string;
    /**
     * Movie title in Italian
     */
    titleItalian?: string;
    /**
     * Movie title in Japanese
     */
    titleJapanese?: string;
    /**
     * Movie title in Polish
     */
    titlePolish?: string;
    /**
     * Movie title in Russian
     */
    titleRussian?: string;
    /**
     * Movie title in Serbian
     */
    titleSerbian?: string;
    /**
     * Movie title in Spanish
     */
    titleSpanish?: string;
    /**
     * Starting stardate of movie story
     */
    stardateFrom?: number;
    /**
     * Ending stardate of movie story
     */
    stardateTo?: number;
    /**
     * Starting year of movie story
     */
    yearFrom?: number;
    /**
     * Ending year of movie story
     */
    yearTo?: number;
    /**
     * Date the movie was first released in the United States
     */
    usReleaseDate?: string;
    /**
     * Writers involved in the movie
     */
    writers?: Array<StaffBase>;
    /**
     * Screenplay authors involved in the movie
     */
    screenplayAuthors?: Array<StaffBase>;
    /**
     * Story authors authors involved in the movie
     */
    storyAuthors?: Array<StaffBase>;
    /**
     * Directors authors involved in the movie
     */
    directors?: Array<StaffBase>;
    /**
     * Producers authors involved in the movie
     */
    producers?: Array<StaffBase>;
    /**
     * Other staff involved in the movie
     */
    staff?: Array<StaffBase>;
    /**
     * Performers appearing in the movie
     */
    performers?: Array<PerformerBase>;
    /**
     * Stunt performers appearing in the movie
     */
    stuntPerformers?: Array<PerformerBase>;
    /**
     * Stand-in performers appearing in the movie
     */
    standInPerformers?: Array<PerformerBase>;
    /**
     * Characters appearing in the movie
     */
    characters?: Array<CharacterBase>;
};
