import type { BookV2Base } from './BookV2Base';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for books search (V2)
 */
export type BookV2BaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of books matching given criteria
     */
    books?: Array<BookV2Base>;
};
