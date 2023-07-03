import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CharacterService {
    /**
     * Retrieval of a single character
     * @param uid Character unique ID
     * @returns CharacterFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetCharacter(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/character',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over characters
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns CharacterBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageCharacter(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/character/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching characters
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns CharacterBaseResponse OK
     * @throws ApiError
     */
    static v1SearchCharacters(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/character/search',
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
