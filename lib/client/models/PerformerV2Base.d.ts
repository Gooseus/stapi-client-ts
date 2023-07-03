import type { Gender } from './Gender';
/**
 * Base performer, returned in search results (V2)
 */
export type PerformerV2Base = {
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
     * Whether it's an audiobook performer
     */
    audiobookPerformer?: boolean;
    /**
     * Whether it's a cut performer
     */
    cutPerformer?: boolean;
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
     * Whether it's a performer that appeared in Star Trek: Lower Decks
     */
    ldPerformer?: boolean;
    /**
     * Whether it's a performer that appeared in Star Trek: Picard
     */
    picPerformer?: boolean;
    /**
     * Whether it's a performer that appeared in Star Trek: Prodigy
     */
    proPerformer?: boolean;
    /**
     * Whether it's a puppeteer
     */
    puppeteer?: boolean;
    /**
     * Whether it's a performer that appeared in Star Trek: Strange New Worlds
     */
    snwPerformer?: boolean;
    /**
     * Whether it's a stand-in performer
     */
    standInPerformer?: boolean;
    /**
     * Whether it's a performer that appeared in Star Trek: Short Treks
     */
    stPerformer?: boolean;
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
};
