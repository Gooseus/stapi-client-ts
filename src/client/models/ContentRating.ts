/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContentRatingSystem } from './ContentRatingSystem';

/**
 * Rating of video release, etc.
 */
export type ContentRating = {
    /**
     * Rating unique ID
     */
    uid?: string;
    contentRatingSystem?: ContentRatingSystem;
    /**
     * Rating within specified content rating system
     */
    rating?: string;
};

