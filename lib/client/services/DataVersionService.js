import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataVersionService {
    /**
     * Retrieval of a data version
     * @returns DataVersion OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetDataVersion() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/common/dataVersion',
        });
    }
}
