/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestSort } from './RequestSort';

/**
 * Literature search criteria
 */
export type LiteratureSearchCriteria = {
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
     * Literature title
     */
    title?: string;
    /**
     * Whether it should be of earthly origin
     */
    earthlyOrigin?: boolean;
    /**
     * Whether it should be a Shakespearean work
     */
    shakespeareanWork?: boolean;
    /**
     * Whether it should be a report
     */
    report?: boolean;
    /**
     * Whether it should be a scientific literature
     */
    scientificLiterature?: boolean;
    /**
     * Whether it should be a technical manual
     */
    technicalManual?: boolean;
    /**
     * Whether it should be a religious literature
     */
    religiousLiterature?: boolean;
};

