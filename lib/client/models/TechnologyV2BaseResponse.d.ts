import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { TechnologyV2Base } from './TechnologyV2Base';
/**
 * Response object for technology search (V2)
 */
export type TechnologyV2BaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of technology matching given criteria
     */
    technology?: Array<TechnologyV2Base>;
};
