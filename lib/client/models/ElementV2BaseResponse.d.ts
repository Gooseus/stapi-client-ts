import type { ElementV2Base } from './ElementV2Base';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for elements search (V2)
 */
export type ElementV2BaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of elements matching given criteria
     */
    elements?: Array<ElementV2Base>;
};
