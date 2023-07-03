import type { MagazineSeriesBase } from './MagazineSeriesBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for magazine series search
 */
export type MagazineSeriesBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of magazine series matching given criteria
     */
    magazineSeries?: Array<MagazineSeriesBase>;
};
