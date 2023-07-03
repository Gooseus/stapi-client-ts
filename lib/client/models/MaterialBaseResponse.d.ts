import type { MaterialBase } from './MaterialBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for materials search
 */
export type MaterialBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of materials matching given criteria
     */
    materials?: Array<MaterialBase>;
};
