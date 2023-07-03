/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { SpeciesBase } from './SpeciesBase';

/**
 * Response object for species search
 */
export type SpeciesBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of species matching given criteria
     */
    species?: Array<SpeciesBase>;
};

