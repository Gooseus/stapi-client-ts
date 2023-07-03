import type { ConflictBase } from './ConflictBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for conflicts search
 */
export type ConflictBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of conflicts matching given criteria
     */
    conflicts?: Array<ConflictBase>;
};
