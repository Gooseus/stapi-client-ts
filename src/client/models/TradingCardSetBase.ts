/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductionRunUnit } from './ProductionRunUnit';

/**
 * Base trading card set, returned in search results
 */
export type TradingCardSetBase = {
    /**
     * Trading card set unique ID
     */
    uid: string;
    /**
     * Trading card set name
     */
    name: string;
    /**
     * Release year
     */
    releaseYear?: number;
    /**
     * Release month
     */
    releaseMonth?: number;
    /**
     * Release day
     */
    releaseDay?: number;
    /**
     * Cards per deck
     */
    cardsPerPack?: number;
    /**
     * Packs per box
     */
    packsPerBox?: number;
    /**
     * Boxes per case
     */
    boxesPerCase?: number;
    /**
     * Production run
     */
    productionRun?: number;
    productionRunUnit?: ProductionRunUnit;
    /**
     * Card width, in inches
     */
    cardWidth?: number;
    /**
     * Card height, in inches
     */
    cardHeight?: number;
};

