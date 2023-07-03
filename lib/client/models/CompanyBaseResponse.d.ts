import type { CompanyBase } from './CompanyBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for companies search
 */
export type CompanyBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of companies matching given criteria
     */
    companies?: Array<CompanyBase>;
};
