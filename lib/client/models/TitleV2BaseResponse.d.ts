import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { TitleV2Base } from './TitleV2Base';
/**
 * Response object for titles search (V2)
 */
export type TitleV2BaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of titles matching given criteria
     */
    titles?: Array<TitleV2Base>;
};
