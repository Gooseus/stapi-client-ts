import type { FoodBase } from './FoodBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for foods search
 */
export type FoodBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of foods matching given criteria
     */
    foods?: Array<FoodBase>;
};
