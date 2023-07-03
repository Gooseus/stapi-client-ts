import type { RequestSort } from './RequestSort';
/**
 * Animal search criteria
 */
export type StaffV2SearchCriteria = {
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
     * Staff name
     */
    name?: string;
    /**
     * Staff birth name
     */
    birthName?: string;
    /**
     * Staff gender
     */
    gender?: string;
    /**
     * Minimal date the staff was born
     */
    dateOfBirthFrom?: string;
    /**
     * Maximal date the staff was born
     */
    dateOfBirthTo?: string;
    /**
     * Place the staff was born
     */
    placeOfBirth?: string;
    /**
     * Minimal date the staff died
     */
    dateOfDeathFrom?: string;
    /**
     * Maximal date the staff died
     */
    dateOfDeathTo?: string;
    /**
     * Place the staff died
     */
    placeOfDeath?: string;
    /**
     * Whether this person should be from art department
     */
    artDepartment?: boolean;
    /**
     * Whether this person should be an art director
     */
    artDirector?: boolean;
    /**
     * Whether this person should be a production designer
     */
    productionDesigner?: boolean;
    /**
     * Whether this person should be from camera and electrical department
     */
    cameraAndElectricalDepartment?: boolean;
    /**
     * Whether this person should be a cinematographer
     */
    cinematographer?: boolean;
    /**
     * Whether this person should be from casting department
     */
    castingDepartment?: boolean;
    /**
     * Whether this person should be from costume department
     */
    costumeDepartment?: boolean;
    /**
     * Whether this person should be a custume designer
     */
    costumeDesigner?: boolean;
    /**
     * Whether this person should be a director
     */
    director?: boolean;
    /**
     * Whether this person should be an assistant or second unit director director
     */
    assistantOrSecondUnitDirector?: boolean;
    /**
     * Whether this person should be an exhibit and attraction staff
     */
    exhibitAndAttractionStaff?: boolean;
    /**
     * Whether this person should be a film editor
     */
    filmEditor?: boolean;
    /**
     * Whether this person should be a part of Filmation production staff
     */
    filmationProductionStaff?: boolean;
    /**
     * Whether this person should be a linguist
     */
    linguist?: boolean;
    /**
     * Whether this person should be a location staff
     */
    locationStaff?: boolean;
    /**
     * Whether this person should be a make-up staff
     */
    makeupStaff?: boolean;
    /**
     * Whether this person should be a merchandise staff
     */
    merchandiseStaff?: boolean;
    /**
     * Whether this person should be from music department
     */
    musicDepartment?: boolean;
    /**
     * Whether this person should be a composer
     */
    composer?: boolean;
    /**
     * Whether this person should be a personal assistant
     */
    personalAssistant?: boolean;
    /**
     * Whether this person should be a producer
     */
    producer?: boolean;
    /**
     * Whether this person should be a production associate
     */
    productionAssociate?: boolean;
    /**
     * Whether this person should be a production staff
     */
    productionStaff?: boolean;
    /**
     * Whether this person should be a publication staff
     */
    publicationStaff?: boolean;
    /**
     * Whether this person should be a science consultant
     */
    scienceConsultant?: boolean;
    /**
     * Whether this person should be from sound department
     */
    soundDepartment?: boolean;
    /**
     * Whether this person should be a special and visual effects staff
     */
    specialAndVisualEffectsStaff?: boolean;
    /**
     * Whether this person should be an author
     */
    author?: boolean;
    /**
     * Whether this person should be an audio author
     */
    audioAuthor?: boolean;
    /**
     * Whether this person should be a calendar artist
     */
    calendarArtist?: boolean;
    /**
     * Whether this person should be a comic artist
     */
    comicArtist?: boolean;
    /**
     * Whether this person should be a comic author
     */
    comicAuthor?: boolean;
    /**
     * Whether this person should be a comic color artist
     */
    comicColorArtist?: boolean;
    /**
     * Whether this person should be a comic cover artist
     */
    comicCoverArtist?: boolean;
    /**
     * Whether this person should be a comic interior artist
     */
    comicInteriorArtist?: boolean;
    /**
     * Whether this person should be a comic ink artist
     */
    comicInkArtist?: boolean;
    /**
     * Whether this person should be a comic pencil artist
     */
    comicPencilArtist?: boolean;
    /**
     * Whether this person should be a comic letter artist
     */
    comicLetterArtist?: boolean;
    /**
     * Whether this person should be a comic strip artist
     */
    comicStripArtist?: boolean;
    /**
     * Whether this person should be a game artist
     */
    gameArtist?: boolean;
    /**
     * Whether this person should be a game author
     */
    gameAuthor?: boolean;
    /**
     * Whether this person should be a novel artist
     */
    novelArtist?: boolean;
    /**
     * Whether this person should be a novel author
     */
    novelAuthor?: boolean;
    /**
     * Whether this person should be a reference artist
     */
    referenceArtist?: boolean;
    /**
     * Whether this person should be a reference author
     */
    referenceAuthor?: boolean;
    /**
     * Whether this person should be a publication artist
     */
    publicationArtist?: boolean;
    /**
     * Whether this person should be a publication designer
     */
    publicationDesigner?: boolean;
    /**
     * Whether this person should be a publication editor
     */
    publicationEditor?: boolean;
    /**
     * Whether this person should be a publicity artist
     */
    publicityArtist?: boolean;
    /**
     * Whether this person should be a part of CBS digital staff
     */
    cbsDigitalStaff?: boolean;
    /**
     * Whether this person should be a part of ILM production staff
     */
    ilmProductionStaff?: boolean;
    /**
     * Whether this person should be a special features artist
     */
    specialFeaturesStaff?: boolean;
    /**
     * Whether this person should be a story editor
     */
    storyEditor?: boolean;
    /**
     * Whether this person should be a studio executive
     */
    studioExecutive?: boolean;
    /**
     * Whether this person should be from stunt department
     */
    stuntDepartment?: boolean;
    /**
     * Whether this person should be from transportation department
     */
    transportationDepartment?: boolean;
    /**
     * Whether this person is video game production staff
     */
    videoGameProductionStaff?: boolean;
    /**
     * Whether this person should be a writer
     */
    writer?: boolean;
};
