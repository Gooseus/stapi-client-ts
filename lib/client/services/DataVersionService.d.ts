import type { DataVersion } from '../models/DataVersion';
import type { Error } from '../models/Error';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DataVersionService {
    /**
     * Retrieval of a data version
     * @returns DataVersion OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetDataVersion(): CancelablePromise<DataVersion | Error>;
}
