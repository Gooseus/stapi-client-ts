import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { StaffBase } from './StaffBase';
/**
 * Response object for staff search
 */
export type StaffBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of staff matching given criteria
     */
    staff?: Array<StaffBase>;
};
