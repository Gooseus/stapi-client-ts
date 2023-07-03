/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { VideoGameBase } from './VideoGameBase';

/**
 * Response object for video games search
 */
export type VideoGameBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of video games matching given criteria
     */
    videoGames?: Array<VideoGameBase>;
};

