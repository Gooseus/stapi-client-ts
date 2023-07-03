import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { TitleBase } from './TitleBase';
/**
 * Response object for titles search
 */
export type TitleBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of titles matching given criteria
     */
    titles?: Array<TitleBase>;
};
