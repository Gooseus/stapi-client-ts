/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { SpacecraftClassV2Base } from './SpacecraftClassV2Base';

/**
 * Response object for spacecraft classes search (V2)
 */
export type SpacecraftClassV2BaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of spacecraft classes matching given criteria
     */
    spacecraftClasses?: Array<SpacecraftClassV2Base>;
};

