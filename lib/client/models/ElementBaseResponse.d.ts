import type { ElementBase } from './ElementBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for elements search
 */
export type ElementBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of elements matching given criteria
     */
    elements?: Array<ElementBase>;
};
