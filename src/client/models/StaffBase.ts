/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Gender } from './Gender';

/**
 * Base staff, returned in search results
 */
export type StaffBase = {
    /**
     * Staff unique ID
     */
    uid: string;
    /**
     * Staff name
     */
    name: string;
    /**
     * Staff birth name
     */
    birthName?: string;
    gender?: Gender;
    /**
     * Date the staff was born
     */
    dateOfBirth?: string;
    /**
     * Place the staff was born
     */
    placeOfBirth?: string;
    /**
     * Date the staff died
     */
    dateOfDeath?: string;
    /**
     * Place the staff died
     */
    placeOfDeath?: string;
    /**
     * Whether this person if from art department
     */
    artDepartment?: boolean;
    /**
     * Whether this person is an art director
     */
    artDirector?: boolean;
    /**
     * Whether this person is a production designer
     */
    productionDesigner?: boolean;
    /**
     * Whether this person is from camera and electrical department
     */
    cameraAndElectricalDepartment?: boolean;
    /**
     * Whether this person is a cinematographer
     */
    cinematographer?: boolean;
    /**
     * Whether this person is from casting department
     */
    castingDepartment?: boolean;
    /**
     * Whether this person is from costume department
     */
    costumeDepartment?: boolean;
    /**
     * Whether this person is a custume designer
     */
    costumeDesigner?: boolean;
    /**
     * Whether this person is a director
     */
    director?: boolean;
    /**
     * Whether this person is an assistant or second unit director director
     */
    assistantOrSecondUnitDirector?: boolean;
    /**
     * Whether this person is an exhibit and tttraction staff
     */
    exhibitAndAttractionStaff?: boolean;
    /**
     * Whether this person is a film editor
     */
    filmEditor?: boolean;
    /**
     * Whether this person is a linguist
     */
    linguist?: boolean;
    /**
     * Whether this person is a location staff
     */
    locationStaff?: boolean;
    /**
     * Whether this person is a make-up staff
     */
    makeupStaff?: boolean;
    /**
     * Whether this person is from music department
     */
    musicDepartment?: boolean;
    /**
     * Whether this person is a composer
     */
    composer?: boolean;
    /**
     * Whether this person is a personal assistant
     */
    personalAssistant?: boolean;
    /**
     * Whether this person is a producer
     */
    producer?: boolean;
    /**
     * Whether this person is a production associate
     */
    productionAssociate?: boolean;
    /**
     * Whether this person is a production staff
     */
    productionStaff?: boolean;
    /**
     * Whether this person is a publication staff
     */
    publicationStaff?: boolean;
    /**
     * Whether this person is a science consultant
     */
    scienceConsultant?: boolean;
    /**
     * Whether this person is from sound department
     */
    soundDepartment?: boolean;
    /**
     * Whether this person is a special and visual effects staff
     */
    specialAndVisualEffectsStaff?: boolean;
    /**
     * Whether this person is an author
     */
    author?: boolean;
    /**
     * Whether this person is an audio author
     */
    audioAuthor?: boolean;
    /**
     * Whether this person is a calendar artist
     */
    calendarArtist?: boolean;
    /**
     * Whether this person is a comic artist
     */
    comicArtist?: boolean;
    /**
     * Whether this person is a comic author
     */
    comicAuthor?: boolean;
    /**
     * Whether this person is a comic color artist
     */
    comicColorArtist?: boolean;
    /**
     * Whether this person is a comic interior artist
     */
    comicInteriorArtist?: boolean;
    /**
     * Whether this person is a comic ink artist
     */
    comicInkArtist?: boolean;
    /**
     * Whether this person is a comic pencil artist
     */
    comicPencilArtist?: boolean;
    /**
     * Whether this person is a comic letter artist
     */
    comicLetterArtist?: boolean;
    /**
     * Whether this person is a comic strip artist
     */
    comicStripArtist?: boolean;
    /**
     * Whether this person is a game artist
     */
    gameArtist?: boolean;
    /**
     * Whether this person is a game author
     */
    gameAuthor?: boolean;
    /**
     * Whether this person is a novel artist
     */
    novelArtist?: boolean;
    /**
     * Whether this person is a novel author
     */
    novelAuthor?: boolean;
    /**
     * Whether this person is a reference artist
     */
    referenceArtist?: boolean;
    /**
     * Whether this person is a reference author
     */
    referenceAuthor?: boolean;
    /**
     * Whether this person is a publication artist
     */
    publicationArtist?: boolean;
    /**
     * Whether this person is a publication designer
     */
    publicationDesigner?: boolean;
    /**
     * Whether this person is a publication editor
     */
    publicationEditor?: boolean;
    /**
     * Whether this person is a publication artist
     */
    publicityArtist?: boolean;
    /**
     * Whether this person is a part of CBS digital staff
     */
    cbsDigitalStaff?: boolean;
    /**
     * Whether this person is a part of ILM production staff
     */
    ilmProductionStaff?: boolean;
    /**
     * Whether this person is a special features artist
     */
    specialFeaturesStaff?: boolean;
    /**
     * Whether this person is a story editor
     */
    storyEditor?: boolean;
    /**
     * Whether this person is a studio executive
     */
    studioExecutive?: boolean;
    /**
     * Whether this person is from stunt department
     */
    stuntDepartment?: boolean;
    /**
     * Whether this person is from transportation department
     */
    transportationDepartment?: boolean;
    /**
     * Whether this person is video game production staff
     */
    videoGameProductionStaff?: boolean;
    /**
     * Whether this person is a writer
     */
    writer?: boolean;
};

