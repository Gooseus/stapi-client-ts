/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestSort } from './RequestSort';

/**
 * Animal search criteria
 */
export type FoodSearchCriteria = {
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
     * Food name
     */
    name?: string;
    /**
     * Whether it should be of earthly origin
     */
    earthlyOrigin?: boolean;
    /**
     * Whether it should be a dessert
     */
    dessert?: boolean;
    /**
     * Whether it should be a fruit
     */
    fruit?: boolean;
    /**
     * Whether it should be an herb or a spice
     */
    herbOrSpice?: boolean;
    /**
     * Whether it should be a sauce
     */
    sauce?: boolean;
    /**
     * Whether it should be a soup
     */
    soup?: boolean;
    /**
     * Whether it should be a beverage
     */
    beverage?: boolean;
    /**
     * Whether it should be an alcoholic beverage
     */
    alcoholicBeverage?: boolean;
    /**
     * Whether it should be a juice
     */
    juice?: boolean;
    /**
     * Whether it should be a tea
     */
    tea?: boolean;
};

