import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { StaffV2Base } from './StaffV2Base';
/**
 * Response object for staff search (V2)
 */
export type StaffV2BaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of staff matching given criteria
     */
    staff?: Array<StaffV2Base>;
};
