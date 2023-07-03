/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompanyBase } from './CompanyBase';
import type { ContentRating } from './ContentRating';
import type { Genre } from './Genre';
import type { Platform } from './Platform';
import type { Reference } from './Reference';

/**
 * Full video game, returned when queried using UID
 */
export type VideoGameFull = {
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
    /**
     * Publishers
     */
    publishers?: Array<CompanyBase>;
    /**
     * Developers
     */
    developers?: Array<CompanyBase>;
    /**
     * Platforms
     */
    platforms?: Array<Platform>;
    /**
     * Genres
     */
    genres?: Array<Genre>;
    /**
     * Ratings
     */
    ratings?: Array<ContentRating>;
    /**
     * References
     */
    references?: Array<Reference>;
};

