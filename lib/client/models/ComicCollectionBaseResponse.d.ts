import type { ComicCollectionBase } from './ComicCollectionBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for comic collections search
 */
export type ComicCollectionBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of comic collections matching given criteria
     */
    comicCollections?: Array<ComicCollectionBase>;
};
