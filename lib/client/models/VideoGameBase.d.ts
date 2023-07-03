/**
 * Base video game, returned in search results
 */
export type VideoGameBase = {
    /**
     * Video game unique ID
     */
    uid: string;
    /**
     * Video game title
     */
    title: string;
    /**
     * Release date
     */
    releaseDate?: string;
    /**
     * Starting stardate of video game story
     */
    stardateFrom?: number;
    /**
     * Ending stardate of video game story
     */
    stardateTo?: number;
    /**
     * Starting year of video game story
     */
    yearFrom?: number;
    /**
     * Ending year of video game story
     */
    yearTo?: number;
    /**
     * System requirements
     */
    systemRequirements?: string;
};
