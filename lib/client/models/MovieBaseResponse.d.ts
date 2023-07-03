import type { MovieBase } from './MovieBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for movies search
 */
export type MovieBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of movies matching given criteria
     */
    movies?: Array<MovieBase>;
};
