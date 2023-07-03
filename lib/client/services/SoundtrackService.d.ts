import type { Error } from '../models/Error';
import type { SoundtrackBaseResponse } from '../models/SoundtrackBaseResponse';
import type { SoundtrackFullResponse } from '../models/SoundtrackFullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class SoundtrackService {
    /**
     * Retrieval of a single soundtrack
     * @param uid Soundtrack unique ID
     * @returns SoundtrackFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetSoundtrack(uid: string): CancelablePromise<SoundtrackFullResponse | Error>;
    /**
     * Pagination over soundtracks
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SoundtrackBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageSoundtracks(pageNumber?: number, pageSize?: number): CancelablePromise<SoundtrackBaseResponse | Error>;
    /**
     * Searching soundtracks
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SoundtrackBaseResponse OK
     * @throws ApiError
     */
    static v1SearchSoundtracks(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<SoundtrackBaseResponse>;
}
