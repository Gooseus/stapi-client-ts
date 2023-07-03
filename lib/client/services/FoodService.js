import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FoodService {
    /**
     * Retrieval of a single food
     * @param uid Food unique ID
     * @returns FoodFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetFood(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/food',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over foods
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns FoodBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageFoods(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/food/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching foods
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns FoodBaseResponse OK
     * @throws ApiError
     */
    static v1SearchFoods(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/food/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'sort': sort,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }
}
