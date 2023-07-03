/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { WeaponV2Base } from './WeaponV2Base';

/**
 * Response object for weapons search (V2)
 */
export type WeaponV2BaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of weapons matching given criteria
     */
    weapons?: Array<WeaponV2Base>;
};

