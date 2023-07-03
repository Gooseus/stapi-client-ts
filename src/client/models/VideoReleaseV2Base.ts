/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VideoReleaseFormat } from './VideoReleaseFormat';

/**
 * Base video release, returned in search results (V2)
 */
export type VideoReleaseV2Base = {
    /**
     * Video release unique ID
     */
    uid: string;
    /**
     * Video release title
     */
    title: string;
    format?: VideoReleaseFormat;
    /**
     * Number of episodes
     */
    numberOfEpisodes?: number;
    /**
     * Number of feature-length episodes
     */
    numberOfFeatureLengthEpisodes?: number;
    /**
     * Number of data carriers (like DVD, VCD, VHS etc.)
     */
    numberOfDataCarriers?: number;
    /**
     * Run time, in minutes
     */
    runTime?: number;
    /**
     * Starting year of video release story
     */
    yearFrom?: number;
    /**
     * Ending year of video release story
     */
    yearTo?: number;
    /**
     * Region free release date
     */
    regionFreeReleaseDate?: string;
    /**
     * Region 1/A release date
     */
    region1AReleaseDate?: string;
    /**
     * Region 1 slimline release date
     */
    region1SlimlineReleaseDate?: string;
    /**
     * Region 2/B release date
     */
    region2BReleaseDate?: string;
    /**
     * Region 2 slimline release date
     */
    region2SlimlineReleaseDate?: string;
    /**
     * Region 4 release date
     */
    region4AReleaseDate?: string;
    /**
     * Region 4 slimline release date
     */
    region4SlimlineReleaseDate?: string;
    /**
     * Whether this video has been release on Amazon.com
     */
    amazonDigitalRelease?: boolean;
    /**
     * Whether this video has been release on Dailymotion
     */
    dailymotionDigitalRelease?: boolean;
    /**
     * Whether this video has been release on Google Play
     */
    googlePlayDigitalRelease?: boolean;
    /**
     * Whether this video has been release on iTunes
     */
    itunesDigitalRelease?: boolean;
    /**
     * Whether this video has been release on UltraViolet
     */
    ultraVioletDigitalRelease?: boolean;
    /**
     * Whether this video has been release on Vimeo
     */
    vimeoDigitalRelease?: boolean;
    /**
     * Whether this video has been release on VUDU
     */
    vuduDigitalRelease?: boolean;
    /**
     * Whether this video has been release on Xbox SmartGlass
     */
    xboxSmartGlassDigitalRelease?: boolean;
    /**
     * Whether this video has been release on YouTube
     */
    youTubeDigitalRelease?: boolean;
    /**
     * Whether this video has been release on Netflix
     */
    netflixDigitalRelease?: boolean;
    /**
     * Whether this is a documentary
     */
    documentary?: boolean;
    /**
     * Whether this contains special features
     */
    specialFeatures?: boolean;
};

