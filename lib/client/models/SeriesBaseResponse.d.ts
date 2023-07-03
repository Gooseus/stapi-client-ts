import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { SeriesBase } from './SeriesBase';
/**
 * Response object for series search
 */
export type SeriesBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of series matching given criteria
     */
    series?: Array<SeriesBase>;
};
