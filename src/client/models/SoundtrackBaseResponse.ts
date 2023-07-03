/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { SoundtrackBase } from './SoundtrackBase';

/**
 * Response object for soundtracks search
 */
export type SoundtrackBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of soundtracks matching given criteria
     */
    soundtracks?: Array<SoundtrackBase>;
};

