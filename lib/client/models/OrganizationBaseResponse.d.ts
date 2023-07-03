import type { OrganizationBase } from './OrganizationBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for organizations search
 */
export type OrganizationBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of organizations matching given criteria
     */
    organizations?: Array<OrganizationBase>;
};
