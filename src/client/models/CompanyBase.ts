/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base company, returned in search results
 */
export type CompanyBase = {
    /**
     * Company unique ID
     */
    uid: string;
    /**
     * Company name
     */
    name: string;
    /**
     * Whether it's a broadcaster
     */
    broadcaster?: boolean;
    /**
     * Whether it's a collectible company
     */
    collectibleCompany?: boolean;
    /**
     * Whether it's a conglomerate
     */
    conglomerate?: boolean;
    /**
     * Whether it's a digital visual effects company
     */
    digitalVisualEffectsCompany?: boolean;
    /**
     * Whether it's a distributor
     */
    distributor?: boolean;
    /**
     * Whether it's a game company
     */
    gameCompany?: boolean;
    /**
     * Whether it's a film equipment company
     */
    filmEquipmentCompany?: boolean;
    /**
     * Whether it's a make-up effects studio
     */
    makeUpEffectsStudio?: boolean;
    /**
     * Whether it's a matte painting company
     */
    mattePaintingCompany?: boolean;
    /**
     * Whether it's a model and miniature effects company
     */
    modelAndMiniatureEffectsCompany?: boolean;
    /**
     * Whether it's a post-production company
     */
    postProductionCompany?: boolean;
    /**
     * Whether it's a production company
     */
    productionCompany?: boolean;
    /**
     * Whether it's a prop company
     */
    propCompany?: boolean;
    /**
     * Whether it's a record label
     */
    recordLabel?: boolean;
    /**
     * Whether it's a special effects company
     */
    specialEffectsCompany?: boolean;
    /**
     * Whether it's a TV and film production company
     */
    tvAndFilmProductionCompany?: boolean;
    /**
     * Whether it's a video game company
     */
    videoGameCompany?: boolean;
};

