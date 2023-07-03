import type { CompanyV2Base } from './CompanyV2Base';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for companies search (V2)
 */
export type CompanyV2BaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of companies matching given criteria
     */
    companies?: Array<CompanyV2Base>;
};
