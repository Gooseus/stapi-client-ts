/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AnimalBase } from './AnimalBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';

/**
 * Response object for animals search
 */
export type AnimalBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of animals matching given criteria
     */
    animals?: Array<AnimalBase>;
};

