import type { CharacterBase } from './CharacterBase';
import type { PerformerBase } from './PerformerBase';
import type { SeasonBase } from './SeasonBase';
import type { SeriesBase } from './SeriesBase';
import type { StaffBase } from './StaffBase';
/**
 * Full episode, returned when queried using UID
 */
export type EpisodeFull = {
    /**
     * Episode unique ID
     */
    uid: string;
    /**
     * Episode title
     */
    title: string;
    /**
     * Episode title in German
     */
    titleGerman?: string;
    /**
     * Episode title in Italian
     */
    titleItalian?: string;
    /**
     * Episode title in Japanese
     */
    titleJapanese?: string;
    series?: SeriesBase;
    season?: SeasonBase;
    /**
     * Season number
     */
    seasonNumber?: number;
    /**
     * Episode number in season
     */
    episodeNumber?: number;
    /**
     * Production serial number
     */
    productionSerialNumber?: string;
    /**
     * Whether it's a feature length episode
     */
    featureLength?: boolean;
    /**
     * Starting stardate of episode story
     */
    stardateFrom?: number;
    /**
     * Ending stardate of episode story
     */
    stardateTo?: number;
    /**
     * Starting year of episode story
     */
    yearFrom?: number;
    /**
     * Ending year of episode story
     */
    yearTo?: number;
    /**
     * Date the episode was first aired in the United States
     */
    usAirDate?: string;
    /**
     * Date the episode script was completed
     */
    finalScriptDate?: string;
    /**
     * Writers involved in the episode
     */
    writers?: Array<StaffBase>;
    /**
     * Teleplay authors involved in the episode
     */
    teleplayAuthors?: Array<StaffBase>;
    /**
     * Story authors involved in the episode
     */
    storyAuthors?: Array<StaffBase>;
    /**
     * Directors authors involved in the episode
     */
    directors?: Array<StaffBase>;
    /**
     * Performers appearing in the episode
     */
    performers?: Array<PerformerBase>;
    /**
     * Stunt performers appearing in the episode
     */
    stuntPerformers?: Array<PerformerBase>;
    /**
     * Stand-in performers appearing in the episode
     */
    standInPerformers?: Array<PerformerBase>;
    /**
     * Characters appearing in the episode
     */
    characters?: Array<CharacterBase>;
};
