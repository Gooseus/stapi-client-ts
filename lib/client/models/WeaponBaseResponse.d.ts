import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { WeaponBase } from './WeaponBase';
/**
 * Response object for weapons search
 */
export type WeaponBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of weapons matching given criteria
     */
    weapons?: Array<WeaponBase>;
};
