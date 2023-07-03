import type { CharacterBaseResponse } from '../models/CharacterBaseResponse';
import type { CharacterFullResponse } from '../models/CharacterFullResponse';
import type { Error } from '../models/Error';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CharacterService {
    /**
     * Retrieval of a single character
     * @param uid Character unique ID
     * @returns CharacterFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetCharacter(uid: string): CancelablePromise<CharacterFullResponse | Error>;
    /**
     * Pagination over characters
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns CharacterBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageCharacter(pageNumber?: number, pageSize?: number): CancelablePromise<CharacterBaseResponse | Error>;
    /**
     * Searching characters
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns CharacterBaseResponse OK
     * @throws ApiError
     */
    static v1SearchCharacters(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<CharacterBaseResponse>;
}
