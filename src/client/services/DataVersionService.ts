/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataVersion } from '../models/DataVersion';
import type { Error } from '../models/Error';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DataVersionService {

    /**
     * Retrieval of a data version
     * @returns DataVersion OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetDataVersion(): CancelablePromise<DataVersion | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/common/dataVersion',
        });
    }

}
