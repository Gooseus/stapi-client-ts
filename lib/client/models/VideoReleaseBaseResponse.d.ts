import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { VideoReleaseBase } from './VideoReleaseBase';
/**
 * Response object for video releases search
 */
export type VideoReleaseBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of video releases matching given criteria
     */
    videoReleases?: Array<VideoReleaseBase>;
};
