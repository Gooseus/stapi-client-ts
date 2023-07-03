import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { VideoReleaseV2Base } from './VideoReleaseV2Base';
/**
 * Response object for video releases search (V2)
 */
export type VideoReleaseV2BaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of video releases matching given criteria
     */
    videoReleases?: Array<VideoReleaseV2Base>;
};
