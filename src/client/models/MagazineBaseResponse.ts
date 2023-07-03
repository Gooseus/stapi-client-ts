/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MagazineBase } from './MagazineBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';

/**
 * Response object for magazine search
 */
export type MagazineBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of magazines matching given criteria
     */
    magazines?: Array<MagazineBase>;
};

