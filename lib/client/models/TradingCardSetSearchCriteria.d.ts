import type { RequestSort } from './RequestSort';
/**
 * Trading card set search criteria
 */
export type TradingCardSetSearchCriteria = {
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
     * Trading card set name
     */
    name?: string;
    /**
     * Starting year the trading card set was released
     */
    releaseYearFrom?: number;
    /**
     * Ending year the trading card set was released
     */
    releaseYearTo?: number;
    /**
     * Minimal number of cards per deck
     */
    cardsPerPackFrom?: number;
    /**
     * Minimal number of cards per deck
     */
    cardsPerPackTo?: number;
    /**
     * Minimal number of packs per box
     */
    packsPerBoxFrom?: number;
    /**
     * Minimal number of packs per box
     */
    packsPerBoxTo?: number;
    /**
     * Minimal number of boxes per case
     */
    boxesPerCaseFrom?: number;
    /**
     * Minimal number of boxes per case
     */
    boxesPerCaseTo?: number;
    /**
     * Minimal production run
     */
    productionRunFrom?: number;
    /**
     * Minimal production run
     */
    productionRunTo?: number;
    /**
     * Production run unit
     */
    productionRunUnit?: string;
    /**
     * Minimal card width, in inches
     */
    cardWidthFrom?: number;
    /**
     * Minimal card width, in inches
     */
    cardWidthTo?: number;
    /**
     * Minimal card height, in inches
     */
    cardHeightFrom?: number;
    /**
     * Minimal card height, in inches
     */
    cardHeightTo?: number;
};
