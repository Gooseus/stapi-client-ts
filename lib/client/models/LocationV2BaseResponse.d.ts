import type { LocationV2Base } from './LocationV2Base';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for locations search (V2)
 */
export type LocationV2BaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of locations matching given criteria
     */
    locations?: Array<LocationV2Base>;
};
