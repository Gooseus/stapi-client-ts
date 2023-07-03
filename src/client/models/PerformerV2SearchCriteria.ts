/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestSort } from './RequestSort';

/**
 * Performer search criteria (V2)
 */
export type PerformerV2SearchCriteria = {
    /**
     * Zero-based page number
     */
    pageNumber?: number;
    /**
     * Page size
     */
    pageSize?: number;
    sort?: RequestSort;
    /**
     * Performer name
     */
    name?: string;
    /**
     * Performer birth name
     */
    birthName?: string;
    /**
     * Performer gender
     */
    gender?: string;
    /**
     * Minimal date the performer was born
     */
    dateOfBirthFrom?: string;
    /**
     * Maximal date the performer was born
     */
    dateOfBirthTo?: string;
    /**
     * Place the performer was born
     */
    placeOfBirth?: string;
    /**
     * Minimal date the performer died
     */
    dateOfDeathFrom?: string;
    /**
     * Maximal date the performer died
     */
    dateOfDeathTo?: string;
    /**
     * Place the performer died
     */
    placeOfDeath?: string;
    /**
     * Whether it should be an animal performer
     */
    animalPerformer?: boolean;
    /**
     * Whether it should be an audiobook performer
     */
    audiobookPerformer?: boolean;
    /**
     * Whether it should be a cut performer
     */
    cutPerformer?: boolean;
    /**
     * Whether it should be a performer that appeared in Star Trek: Discovery
     */
    disPerformer?: boolean;
    /**
     * Whether it should be a performer that appeared in Star Trek: Deep Space Nine
     */
    ds9Performer?: boolean;
    /**
     * Whether it should be a performer that appeared in Star Trek: Enterprise
     */
    entPerformer?: boolean;
    /**
     * Whether it should be a performer that appeared in a Star Trek movie
     */
    filmPerformer?: boolean;
    /**
     * Whether it should be a performer that appeared in Star Trek: Lower Decks
     */
    ldPerformer?: boolean;
    /**
     * Whether it should be a performer that appeared in Star Trek: Picard
     */
    picPerformer?: boolean;
    /**
     * Whether it should be a performer that appeared in Star Trek: Prodigy
     */
    proPerformer?: boolean;
    /**
     * Whether it should be a puppeteer
     */
    puppeteer?: boolean;
    /**
     * Whether it should be a performer that appeared in Star Trek: Strange New Worlds
     */
    snwPerformer?: boolean;
    /**
     * Whether it should be a stand-in performer
     */
    standInPerformer?: boolean;
    /**
     * Whether it should be a performer that appeared in Star Trek: Short Treks
     */
    stPerformer?: boolean;
    /**
     * Whether it should be a stunt performer
     */
    stuntPerformer?: boolean;
    /**
     * Whether it should be a performer that appeared in Star Trek: The Animated Series
     */
    tasPerformer?: boolean;
    /**
     * Whether it should be a performer that appeared in Star Trek: The Next Generation
     */
    tngPerformer?: boolean;
    /**
     * Whether it should be a performer that appeared in Star Trek: The Original Series
     */
    tosPerformer?: boolean;
    /**
     * Whether it should be a video game performer
     */
    videoGamePerformer?: boolean;
    /**
     * Whether it should be a voice performer
     */
    voicePerformer?: boolean;
    /**
     * Whether it should be a performer that appeared in Star Trek: Voyager
     */
    voyPerformer?: boolean;
};

