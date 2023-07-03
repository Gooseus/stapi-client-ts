/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CharacterBase } from './CharacterBase';
import type { EpisodeBase } from './EpisodeBase';
import type { Gender } from './Gender';
import type { MovieBase } from './MovieBase';

/**
 * Full performer, returned when queried using UID
 */
export type PerformerFull = {
    /**
     * Performer unique ID
     */
    uid: string;
    /**
     * Performer name
     */
    name: string;
    /**
     * Performer birth name
     */
    birthName?: string;
    gender?: Gender;
    /**
     * Date the performer was born
     */
    dateOfBirth?: string;
    /**
     * Place the performer was born
     */
    placeOfBirth?: string;
    /**
     * Date the performer died
     */
    dateOfDeath?: string;
    /**
     * Place the performer died
     */
    placeOfDeath?: string;
    /**
     * Whether it's an animal performer
     */
    animalPerformer?: boolean;
    /**
     * Whether it's a performer that appeared in Star Trek: Discovery
     */
    disPerformer?: boolean;
    /**
     * Whether it's a performer that appeared in Star Trek: Deep Space Nine
     */
    ds9Performer?: boolean;
    /**
     * Whether it's a performer that appeared in Star Trek: Enterprise
     */
    entPerformer?: boolean;
    /**
     * Whether it's a performer that appeared in a Star Trek movie
     */
    filmPerformer?: boolean;
    /**
     * Whether it's a stand-in performer
     */
    standInPerformer?: boolean;
    /**
     * Whether it's a stunt performer
     */
    stuntPerformer?: boolean;
    /**
     * Whether it's a performer that appeared in Star Trek: The Animated Series
     */
    tasPerformer?: boolean;
    /**
     * Whether it's a performer that appeared in Star Trek: The Next Generation
     */
    tngPerformer?: boolean;
    /**
     * Whether it's a performer that appeared in Star Trek: The Original Series
     */
    tosPerformer?: boolean;
    /**
     * Whether it's a video game performer
     */
    videoGamePerformer?: boolean;
    /**
     * Whether it's a voice performer
     */
    voicePerformer?: boolean;
    /**
     * Whether it's a performer that appeared in Star Trek: Voyager
     */
    voyPerformer?: boolean;
    /**
     * Episodes in which this person appeared as a performer
     */
    episodesPerformances?: Array<EpisodeBase>;
    /**
     * Episodes in which this person appeared as a stunt performer
     */
    episodesStuntPerformances?: Array<EpisodeBase>;
    /**
     * Episodes in which this person appeared as a stand-in performer
     */
    episodesStandInPerformances?: Array<EpisodeBase>;
    /**
     * Movies in which this person appeared as a performer
     */
    moviesPerformances?: Array<MovieBase>;
    /**
     * Movies in which this person appeared as a stunt performer
     */
    moviesStuntPerformances?: Array<MovieBase>;
    /**
     * Movies in which this person appeared as a stand-in performer
     */
    moviesStandInPerformances?: Array<MovieBase>;
    /**
     * Characters played by this performer
     */
    characters?: Array<CharacterBase>;
};

