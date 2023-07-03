/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BookBase } from './BookBase';
import type { BookSeriesBase } from './BookSeriesBase';
import type { CompanyBase } from './CompanyBase';

/**
 * Full book series, returned when queried using UID
 */
export type BookSeriesFull = {
    /**
     * Book series unique ID
     */
    uid: string;
    /**
     * Book series title
     */
    title: string;
    /**
     * Year from which the book series was published
     */
    publishedYearFrom?: number;
    /**
     * Month from which the book series was published
     */
    publishedMonthFrom?: number;
    /**
     * Year to which the book series was published
     */
    publishedYearTo?: number;
    /**
     * Month to which the book series was published
     */
    publishedMonthTo?: number;
    /**
     * Number of books in book series
     */
    numberOfBooks?: number;
    /**
     * Starting year of book series stories
     */
    yearFrom?: number;
    /**
     * Ending year of book series stories
     */
    yearTo?: number;
    /**
     * Whether it's a miniseries
     */
    miniseries?: boolean;
    /**
     * Whether it's a e-book series
     */
    ebookSeries?: boolean;
    /**
     * Book series this book series is included in
     */
    parentSeries?: Array<BookSeriesBase>;
    /**
     * Child book series included in this book series
     */
    childSeries?: Array<BookSeriesBase>;
    /**
     * Companies that published this book series
     */
    publishers?: Array<CompanyBase>;
    /**
     * Books included in this book series
     */
    books?: Array<BookBase>;
};

