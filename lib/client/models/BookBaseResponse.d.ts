import type { BookBase } from './BookBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for books search
 */
export type BookBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of books matching given criteria
     */
    books?: Array<BookBase>;
};
