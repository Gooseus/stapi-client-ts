import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { SpeciesV2Base } from './SpeciesV2Base';
/**
 * Response object for species search (V2)
 */
export type SpeciesV2BaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of species matching given criteria
     */
    species?: Array<SpeciesV2Base>;
};
