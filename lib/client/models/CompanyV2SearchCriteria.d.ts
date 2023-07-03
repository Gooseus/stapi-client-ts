import type { RequestSort } from './RequestSort';
/**
 * Company search criteria (V2)
 */
export type CompanyV2SearchCriteria = {
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
     * Company name
     */
    name?: string;
    /**
     * Whether it should be a broadcaster
     */
    broadcaster?: boolean;
    /**
     * Whether it should be a streaming service
     */
    streamingService?: boolean;
    /**
     * Whether it should be a collectible company
     */
    collectibleCompany?: boolean;
    /**
     * Whether it should be a conglomerate
     */
    conglomerate?: boolean;
    /**
     * Whether it should be a visual effects company
     */
    visualEffectsCompany?: boolean;
    /**
     * Whether it should be a digital visual effects company
     */
    digitalVisualEffectsCompany?: boolean;
    /**
     * Whether it should be a distributor
     */
    distributor?: boolean;
    /**
     * Whether it should be a game company
     */
    gameCompany?: boolean;
    /**
     * Whether it should be a film equipment company
     */
    filmEquipmentCompany?: boolean;
    /**
     * Whether it should be a make-up effects studio
     */
    makeUpEffectsStudio?: boolean;
    /**
     * Whether it should be a matte painting company
     */
    mattePaintingCompany?: boolean;
    /**
     * Whether it should be a model and miniature effects company
     */
    modelAndMiniatureEffectsCompany?: boolean;
    /**
     * Whether it should be a post-production company
     */
    postProductionCompany?: boolean;
    /**
     * Whether it should be a production company
     */
    productionCompany?: boolean;
    /**
     * Whether it should be a prop company
     */
    propCompany?: boolean;
    /**
     * Whether it should be a record label
     */
    recordLabel?: boolean;
    /**
     * Whether it should be a special effects company
     */
    specialEffectsCompany?: boolean;
    /**
     * Whether it should be a TV and film production company
     */
    tvAndFilmProductionCompany?: boolean;
    /**
     * Whether it should be a video game company
     */
    videoGameCompany?: boolean;
    /**
     * Whether it should be a publisher
     */
    publisher?: boolean;
    /**
     * Whether it should be a publication art studio
     */
    publicationArtStudio?: boolean;
};
