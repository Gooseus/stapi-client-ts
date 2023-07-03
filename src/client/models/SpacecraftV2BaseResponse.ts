/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { SpacecraftV2Base } from './SpacecraftV2Base';

/**
 * Response object for spacecrafts search (V2)
 */
export type SpacecraftV2BaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of spacecrafts matching given criteria
     */
    spacecrafts?: Array<SpacecraftV2Base>;
};

