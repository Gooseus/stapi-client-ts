/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Full food, returned when queried using UID
 */
export type FoodFull = {
    /**
     * Food unique ID
     */
    uid: string;
    /**
     * Food name
     */
    name: string;
    /**
     * Whether it's of earthly origin
     */
    earthlyOrigin?: boolean;
    /**
     * Whether it's a dessert
     */
    dessert?: boolean;
    /**
     * Whether it's a fruit
     */
    fruit?: boolean;
    /**
     * Whether it's an herb or a spice
     */
    herbOrSpice?: boolean;
    /**
     * Whether it's a sauce
     */
    sauce?: boolean;
    /**
     * Whether it's a soup
     */
    soup?: boolean;
    /**
     * Whether it's a beverage
     */
    beverage?: boolean;
    /**
     * Whether it's an alcoholic beverage
     */
    alcoholicBeverage?: boolean;
    /**
     * Whether it's a juice
     */
    juice?: boolean;
    /**
     * Whether it's a tea
     */
    tea?: boolean;
};

