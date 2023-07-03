import type { EpisodeBase } from './EpisodeBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for episodes search
 */
export type EpisodeBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of episodes matching given criteria
     */
    episodes?: Array<EpisodeBase>;
};
