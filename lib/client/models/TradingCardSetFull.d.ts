import type { CompanyBase } from './CompanyBase';
import type { Country } from './Country';
import type { ProductionRunUnit } from './ProductionRunUnit';
import type { TradingCardBase } from './TradingCardBase';
import type { TradingCardDeckBase } from './TradingCardDeckBase';
/**
 * Full trading card set, returned when queried using UID
 */
export type TradingCardSetFull = {
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
    /**
     * Manufacturers
     */
    manufacturers?: Array<CompanyBase>;
    /**
     * Trading card decks in this set
     */
    tradingCardDecks?: Array<TradingCardDeckBase>;
    /**
     * Trading cards in this set
     */
    tradingCards?: Array<TradingCardBase>;
    /**
     * Countries of origin
     */
    countriesOfOrigin?: Array<Country>;
};
