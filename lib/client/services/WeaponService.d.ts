import type { Error } from '../models/Error';
import type { WeaponBaseResponse } from '../models/WeaponBaseResponse';
import type { WeaponFullResponse } from '../models/WeaponFullResponse';
import type { WeaponV2BaseResponse } from '../models/WeaponV2BaseResponse';
import type { WeaponV2FullResponse } from '../models/WeaponV2FullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class WeaponService {
    /**
     * @deprecated
     * Retrieval of a single weapon
     * @param uid Weapon unique ID
     * @returns WeaponFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetWeapon(uid: string): CancelablePromise<WeaponFullResponse | Error>;
    /**
     * @deprecated
     * Pagination over weapons
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns WeaponBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageWeapons(pageNumber?: number, pageSize?: number): CancelablePromise<WeaponBaseResponse | Error>;
    /**
     * @deprecated
     * Searching weapons
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns WeaponBaseResponse OK
     * @throws ApiError
     */
    static v1SearchWeapons(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<WeaponBaseResponse>;
    /**
     * Retrieval of a single weapon (V2)
     * @param uid Weapon unique ID
     * @returns WeaponV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetWeapon(uid: string): CancelablePromise<WeaponV2FullResponse | Error>;
    /**
     * Pagination over weapons (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns WeaponV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageWeapons(pageNumber?: number, pageSize?: number): CancelablePromise<WeaponV2BaseResponse | Error>;
    /**
     * Searching weapons (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns WeaponV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchWeapons(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<WeaponV2BaseResponse>;
}
