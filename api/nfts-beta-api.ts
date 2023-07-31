/* tslint:disable */
/* eslint-disable */
/**
 * Fireblocks API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.6.2
 * Contact: support@fireblocks.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {AxiosInstance, AxiosPromise, AxiosRequestConfig} from 'axios';
import {Configuration} from "../configuration";
import {HttpClient} from "../utils/http-client";
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';


// Some imports not used depending on template conditions
// @ts-ignore
import { assertParamExists, setSearchParams, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';

// @ts-ignore
import { GetNFTTokens200Response } from '../models';
// @ts-ignore
import { GetOwnershipTokens200Response } from '../models';
// @ts-ignore
import { TokenResponse } from '../models';
// @ts-ignore
import { UpdateTokenOwnershipStatusDto } from '../models';



    /**
 * NFTsBetaApi - axios parameter creator
 * @export
 */
export const NFTsBetaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the requested token data.  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
         * @summary List token data by ID
         * @param {string} id NFT ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNFTTokenById: async (id: string, ): Promise<AxiosRequestConfig> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getNFTTokenById', 'id', id)
            const localVarPath = `/nfts/tokens/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'GET'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
        /**
         * Returns the requested tokens data  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
         * @summary List tokens by IDs
         * @param {string} ids A comma separated list of NFT IDs. Up to 100 are allowed in a single request.
         * @param {string} [pageCursor] Page cursor to fetch
         * @param {number} [pageSize] Items per page (max 100)
         * @param {Array<'collection.name' | 'name'>} [sort] Sort by param, it can be one param or a list of params separated by comma
         * @param {'DESC' | 'ASC'} [order] Order direction, it can be &#x60;ASC&#x60; for ascending or &#x60;DESC&#x60; for descending
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNFTTokens: async (ids: string, pageCursor?: string, pageSize?: number, sort?: Array<'collection.name' | 'name'>, order?: 'DESC' | 'ASC', ): Promise<AxiosRequestConfig> => {
            // verify required parameter 'ids' is not null or undefined
            assertParamExists('getNFTTokens', 'ids', ids)
            const localVarPath = `/nfts/tokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'GET'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }

            if (pageCursor !== undefined) {
                localVarQueryParameter['pageCursor'] = pageCursor;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
        /**
         * Returns all tokens and their data in your workspace.  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
         * @summary List all owned tokens (paginated)
         * @param {'ETH' | 'ETH_TEST3' | 'POLYGON' | 'POLYGON_TEST_MUMBAI'} [blockchainDescriptor] Blockchain descriptor filter
         * @param {string} [vaultAccountIds] A comma separated list of Vault Account IDs. Up to 100 are allowed in a single request
         * @param {string} [ids] A comma separated list of NFT IDs. Up to 100 are allowed in a single request.
         * @param {string} [collectionIds] A comma separated list of collection IDs. Up to 100 are allowed in a single request.
         * @param {string} [pageCursor] Page cursor to fetch
         * @param {number} [pageSize] Items per page (max 100)
         * @param {Array<'ownershipLastUpdateTime' | 'name' | 'collection.name'>} [sort] Sort by param, it can be one param or a list of params separated by comma
         * @param {'DESC' | 'ASC'} [order] Order direction, it can be &#x60;ASC&#x60; for ascending or &#x60;DESC&#x60; for descending
         * @param {'LISTED' | 'ARCHIVED'} [status] Token ownership status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOwnershipTokens: async (blockchainDescriptor?: 'ETH' | 'ETH_TEST3' | 'POLYGON' | 'POLYGON_TEST_MUMBAI', vaultAccountIds?: string, ids?: string, collectionIds?: string, pageCursor?: string, pageSize?: number, sort?: Array<'ownershipLastUpdateTime' | 'name' | 'collection.name'>, order?: 'DESC' | 'ASC', status?: 'LISTED' | 'ARCHIVED', ): Promise<AxiosRequestConfig> => {
            const localVarPath = `/nfts/ownership/tokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'GET'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (blockchainDescriptor !== undefined) {
                localVarQueryParameter['blockchainDescriptor'] = blockchainDescriptor;
            }

            if (vaultAccountIds !== undefined) {
                localVarQueryParameter['vaultAccountIds'] = vaultAccountIds;
            }

            if (ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }

            if (collectionIds !== undefined) {
                localVarQueryParameter['collectionIds'] = collectionIds;
            }

            if (pageCursor !== undefined) {
                localVarQueryParameter['pageCursor'] = pageCursor;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
        /**
         * Updates the latest token metadata.  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
         * @summary Refresh token metadata
         * @param {string} id NFT ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNFTTokenById: async (id: string, ): Promise<AxiosRequestConfig> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateNFTTokenById', 'id', id)
            const localVarPath = `/nfts/tokens/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'PUT'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
        /**
         * Updates token ownership status for a tenant, in all tenant vaults.  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
         * @summary Update token ownership status
         * @param {UpdateTokenOwnershipStatusDto} updateTokenOwnershipStatusDto 
         * @param {string} id NFT ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNFTTokenStatus: async (updateTokenOwnershipStatusDto: UpdateTokenOwnershipStatusDto, id: string, ): Promise<AxiosRequestConfig> => {
            // verify required parameter 'updateTokenOwnershipStatusDto' is not null or undefined
            assertParamExists('updateNFTTokenStatus', 'updateTokenOwnershipStatusDto', updateTokenOwnershipStatusDto)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateNFTTokenStatus', 'id', id)
            const localVarPath = `/nfts/ownership/tokens/{id}/status`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'PUT'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };
            localVarRequestOptions.data = updateTokenOwnershipStatusDto as any;

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
        /**
         * Updates all tokens and balances per blockchain and vault account.  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
         * @summary Refresh vault account tokens
         * @param {'ETH' | 'ETH_TEST3' | 'POLYGON' | 'POLYGON_TEST_MUMBAI'} blockchainDescriptor Blockchain descriptor filter
         * @param {string} vaultAccountId Vault account filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOwnershipTokens: async (blockchainDescriptor: 'ETH' | 'ETH_TEST3' | 'POLYGON' | 'POLYGON_TEST_MUMBAI', vaultAccountId: string, ): Promise<AxiosRequestConfig> => {
            // verify required parameter 'blockchainDescriptor' is not null or undefined
            assertParamExists('updateOwnershipTokens', 'blockchainDescriptor', blockchainDescriptor)
            // verify required parameter 'vaultAccountId' is not null or undefined
            assertParamExists('updateOwnershipTokens', 'vaultAccountId', vaultAccountId)
            const localVarPath = `/nfts/ownership/tokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'PUT'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (blockchainDescriptor !== undefined) {
                localVarQueryParameter['blockchainDescriptor'] = blockchainDescriptor;
            }

            if (vaultAccountId !== undefined) {
                localVarQueryParameter['vaultAccountId'] = vaultAccountId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
    }
};

/**
 * NFTsBetaApi - functional programming interface
 * @export
 */
export const NFTsBetaApiFp = function(httpClient: HttpClient) {
    const localVarAxiosParamCreator = NFTsBetaApiAxiosParamCreator(httpClient.configuration)
    return {
        /**
         * Returns the requested token data.  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
         * @summary List token data by ID
         * @param {string} id NFT ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNFTTokenById(id: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNFTTokenById(id, );
            return httpClient.request(localVarAxiosArgs);
        },
        /**
         * Returns the requested tokens data  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
         * @summary List tokens by IDs
         * @param {string} ids A comma separated list of NFT IDs. Up to 100 are allowed in a single request.
         * @param {string} [pageCursor] Page cursor to fetch
         * @param {number} [pageSize] Items per page (max 100)
         * @param {Array<'collection.name' | 'name'>} [sort] Sort by param, it can be one param or a list of params separated by comma
         * @param {'DESC' | 'ASC'} [order] Order direction, it can be &#x60;ASC&#x60; for ascending or &#x60;DESC&#x60; for descending
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNFTTokens(ids: string, pageCursor?: string, pageSize?: number, sort?: Array<'collection.name' | 'name'>, order?: 'DESC' | 'ASC', ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetNFTTokens200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNFTTokens(ids, pageCursor, pageSize, sort, order, );
            return httpClient.request(localVarAxiosArgs);
        },
        /**
         * Returns all tokens and their data in your workspace.  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
         * @summary List all owned tokens (paginated)
         * @param {'ETH' | 'ETH_TEST3' | 'POLYGON' | 'POLYGON_TEST_MUMBAI'} [blockchainDescriptor] Blockchain descriptor filter
         * @param {string} [vaultAccountIds] A comma separated list of Vault Account IDs. Up to 100 are allowed in a single request
         * @param {string} [ids] A comma separated list of NFT IDs. Up to 100 are allowed in a single request.
         * @param {string} [collectionIds] A comma separated list of collection IDs. Up to 100 are allowed in a single request.
         * @param {string} [pageCursor] Page cursor to fetch
         * @param {number} [pageSize] Items per page (max 100)
         * @param {Array<'ownershipLastUpdateTime' | 'name' | 'collection.name'>} [sort] Sort by param, it can be one param or a list of params separated by comma
         * @param {'DESC' | 'ASC'} [order] Order direction, it can be &#x60;ASC&#x60; for ascending or &#x60;DESC&#x60; for descending
         * @param {'LISTED' | 'ARCHIVED'} [status] Token ownership status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOwnershipTokens(blockchainDescriptor?: 'ETH' | 'ETH_TEST3' | 'POLYGON' | 'POLYGON_TEST_MUMBAI', vaultAccountIds?: string, ids?: string, collectionIds?: string, pageCursor?: string, pageSize?: number, sort?: Array<'ownershipLastUpdateTime' | 'name' | 'collection.name'>, order?: 'DESC' | 'ASC', status?: 'LISTED' | 'ARCHIVED', ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetOwnershipTokens200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOwnershipTokens(blockchainDescriptor, vaultAccountIds, ids, collectionIds, pageCursor, pageSize, sort, order, status, );
            return httpClient.request(localVarAxiosArgs);
        },
        /**
         * Updates the latest token metadata.  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
         * @summary Refresh token metadata
         * @param {string} id NFT ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateNFTTokenById(id: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateNFTTokenById(id, );
            return httpClient.request(localVarAxiosArgs);
        },
        /**
         * Updates token ownership status for a tenant, in all tenant vaults.  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
         * @summary Update token ownership status
         * @param {UpdateTokenOwnershipStatusDto} updateTokenOwnershipStatusDto 
         * @param {string} id NFT ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateNFTTokenStatus(updateTokenOwnershipStatusDto: UpdateTokenOwnershipStatusDto, id: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateNFTTokenStatus(updateTokenOwnershipStatusDto, id, );
            return httpClient.request(localVarAxiosArgs);
        },
        /**
         * Updates all tokens and balances per blockchain and vault account.  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
         * @summary Refresh vault account tokens
         * @param {'ETH' | 'ETH_TEST3' | 'POLYGON' | 'POLYGON_TEST_MUMBAI'} blockchainDescriptor Blockchain descriptor filter
         * @param {string} vaultAccountId Vault account filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOwnershipTokens(blockchainDescriptor: 'ETH' | 'ETH_TEST3' | 'POLYGON' | 'POLYGON_TEST_MUMBAI', vaultAccountId: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOwnershipTokens(blockchainDescriptor, vaultAccountId, );
            return httpClient.request(localVarAxiosArgs);
        },
    }
};

/**
 * Request parameters for getNFTTokenById operation in NFTsBetaApi.
 * @export
 * @interface NFTsBetaApiGetNFTTokenByIdRequest
 */
export interface NFTsBetaApiGetNFTTokenByIdRequest {
    /**
     * NFT ID
     * @type {string}
     * @memberof NFTsBetaApiGetNFTTokenById
     */
    readonly id: string
}

/**
 * Request parameters for getNFTTokens operation in NFTsBetaApi.
 * @export
 * @interface NFTsBetaApiGetNFTTokensRequest
 */
export interface NFTsBetaApiGetNFTTokensRequest {
    /**
     * A comma separated list of NFT IDs. Up to 100 are allowed in a single request.
     * @type {string}
     * @memberof NFTsBetaApiGetNFTTokens
     */
    readonly ids: string

    /**
     * Page cursor to fetch
     * @type {string}
     * @memberof NFTsBetaApiGetNFTTokens
     */
    readonly pageCursor?: string

    /**
     * Items per page (max 100)
     * @type {number}
     * @memberof NFTsBetaApiGetNFTTokens
     */
    readonly pageSize?: number

    /**
     * Sort by param, it can be one param or a list of params separated by comma
     * @type {Array<'collection.name' | 'name'>}
     * @memberof NFTsBetaApiGetNFTTokens
     */
    readonly sort?: Array<'collection.name' | 'name'>

    /**
     * Order direction, it can be &#x60;ASC&#x60; for ascending or &#x60;DESC&#x60; for descending
     * @type {'DESC' | 'ASC'}
     * @memberof NFTsBetaApiGetNFTTokens
     */
    readonly order?: 'DESC' | 'ASC'
}

/**
 * Request parameters for getOwnershipTokens operation in NFTsBetaApi.
 * @export
 * @interface NFTsBetaApiGetOwnershipTokensRequest
 */
export interface NFTsBetaApiGetOwnershipTokensRequest {
    /**
     * Blockchain descriptor filter
     * @type {'ETH' | 'ETH_TEST3' | 'POLYGON' | 'POLYGON_TEST_MUMBAI'}
     * @memberof NFTsBetaApiGetOwnershipTokens
     */
    readonly blockchainDescriptor?: 'ETH' | 'ETH_TEST3' | 'POLYGON' | 'POLYGON_TEST_MUMBAI'

    /**
     * A comma separated list of Vault Account IDs. Up to 100 are allowed in a single request
     * @type {string}
     * @memberof NFTsBetaApiGetOwnershipTokens
     */
    readonly vaultAccountIds?: string

    /**
     * A comma separated list of NFT IDs. Up to 100 are allowed in a single request.
     * @type {string}
     * @memberof NFTsBetaApiGetOwnershipTokens
     */
    readonly ids?: string

    /**
     * A comma separated list of collection IDs. Up to 100 are allowed in a single request.
     * @type {string}
     * @memberof NFTsBetaApiGetOwnershipTokens
     */
    readonly collectionIds?: string

    /**
     * Page cursor to fetch
     * @type {string}
     * @memberof NFTsBetaApiGetOwnershipTokens
     */
    readonly pageCursor?: string

    /**
     * Items per page (max 100)
     * @type {number}
     * @memberof NFTsBetaApiGetOwnershipTokens
     */
    readonly pageSize?: number

    /**
     * Sort by param, it can be one param or a list of params separated by comma
     * @type {Array<'ownershipLastUpdateTime' | 'name' | 'collection.name'>}
     * @memberof NFTsBetaApiGetOwnershipTokens
     */
    readonly sort?: Array<'ownershipLastUpdateTime' | 'name' | 'collection.name'>

    /**
     * Order direction, it can be &#x60;ASC&#x60; for ascending or &#x60;DESC&#x60; for descending
     * @type {'DESC' | 'ASC'}
     * @memberof NFTsBetaApiGetOwnershipTokens
     */
    readonly order?: 'DESC' | 'ASC'

    /**
     * Token ownership status
     * @type {'LISTED' | 'ARCHIVED'}
     * @memberof NFTsBetaApiGetOwnershipTokens
     */
    readonly status?: 'LISTED' | 'ARCHIVED'
}

/**
 * Request parameters for updateNFTTokenById operation in NFTsBetaApi.
 * @export
 * @interface NFTsBetaApiUpdateNFTTokenByIdRequest
 */
export interface NFTsBetaApiUpdateNFTTokenByIdRequest {
    /**
     * NFT ID
     * @type {string}
     * @memberof NFTsBetaApiUpdateNFTTokenById
     */
    readonly id: string
}

/**
 * Request parameters for updateNFTTokenStatus operation in NFTsBetaApi.
 * @export
 * @interface NFTsBetaApiUpdateNFTTokenStatusRequest
 */
export interface NFTsBetaApiUpdateNFTTokenStatusRequest {
    /**
     * 
     * @type {UpdateTokenOwnershipStatusDto}
     * @memberof NFTsBetaApiUpdateNFTTokenStatus
     */
    readonly updateTokenOwnershipStatusDto: UpdateTokenOwnershipStatusDto

    /**
     * NFT ID
     * @type {string}
     * @memberof NFTsBetaApiUpdateNFTTokenStatus
     */
    readonly id: string
}

/**
 * Request parameters for updateOwnershipTokens operation in NFTsBetaApi.
 * @export
 * @interface NFTsBetaApiUpdateOwnershipTokensRequest
 */
export interface NFTsBetaApiUpdateOwnershipTokensRequest {
    /**
     * Blockchain descriptor filter
     * @type {'ETH' | 'ETH_TEST3' | 'POLYGON' | 'POLYGON_TEST_MUMBAI'}
     * @memberof NFTsBetaApiUpdateOwnershipTokens
     */
    readonly blockchainDescriptor: 'ETH' | 'ETH_TEST3' | 'POLYGON' | 'POLYGON_TEST_MUMBAI'

    /**
     * Vault account filter
     * @type {string}
     * @memberof NFTsBetaApiUpdateOwnershipTokens
     */
    readonly vaultAccountId: string
}

/**
 * NFTsBetaApi - object-oriented interface
 * @export
 * @class NFTsBetaApi
 * @extends {BaseAPI}
 */
export class NFTsBetaApi extends BaseAPI {
    /**
     * Returns the requested token data.  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
     * @summary List token data by ID
     * @param {NFTsBetaApiGetNFTTokenByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsBetaApi
     */
    public getNFTTokenById(requestParameters: NFTsBetaApiGetNFTTokenByIdRequest, ) {
        return NFTsBetaApiFp(this.httpClient).getNFTTokenById(requestParameters.id, );
    }

    /**
     * Returns the requested tokens data  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
     * @summary List tokens by IDs
     * @param {NFTsBetaApiGetNFTTokensRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsBetaApi
     */
    public getNFTTokens(requestParameters: NFTsBetaApiGetNFTTokensRequest, ) {
        return NFTsBetaApiFp(this.httpClient).getNFTTokens(requestParameters.ids, requestParameters.pageCursor, requestParameters.pageSize, requestParameters.sort, requestParameters.order, );
    }

    /**
     * Returns all tokens and their data in your workspace.  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
     * @summary List all owned tokens (paginated)
     * @param {NFTsBetaApiGetOwnershipTokensRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsBetaApi
     */
    public getOwnershipTokens(requestParameters: NFTsBetaApiGetOwnershipTokensRequest = {}, ) {
        return NFTsBetaApiFp(this.httpClient).getOwnershipTokens(requestParameters.blockchainDescriptor, requestParameters.vaultAccountIds, requestParameters.ids, requestParameters.collectionIds, requestParameters.pageCursor, requestParameters.pageSize, requestParameters.sort, requestParameters.order, requestParameters.status, );
    }

    /**
     * Updates the latest token metadata.  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
     * @summary Refresh token metadata
     * @param {NFTsBetaApiUpdateNFTTokenByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsBetaApi
     */
    public updateNFTTokenById(requestParameters: NFTsBetaApiUpdateNFTTokenByIdRequest, ) {
        return NFTsBetaApiFp(this.httpClient).updateNFTTokenById(requestParameters.id, );
    }

    /**
     * Updates token ownership status for a tenant, in all tenant vaults.  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
     * @summary Update token ownership status
     * @param {NFTsBetaApiUpdateNFTTokenStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsBetaApi
     */
    public updateNFTTokenStatus(requestParameters: NFTsBetaApiUpdateNFTTokenStatusRequest, ) {
        return NFTsBetaApiFp(this.httpClient).updateNFTTokenStatus(requestParameters.updateTokenOwnershipStatusDto, requestParameters.id, );
    }

    /**
     * Updates all tokens and balances per blockchain and vault account.  **Note**: This endpoint is now in Beta, disabled for general availability at this time.  To enroll in beta & enable this endpoint, contact your Fireblocks Customer Success Manager or reach out to [CSM@fireblocks.com](mailto:CSM@fireblocks.com). 
     * @summary Refresh vault account tokens
     * @param {NFTsBetaApiUpdateOwnershipTokensRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsBetaApi
     */
    public updateOwnershipTokens(requestParameters: NFTsBetaApiUpdateOwnershipTokensRequest, ) {
        return NFTsBetaApiFp(this.httpClient).updateOwnershipTokens(requestParameters.blockchainDescriptor, requestParameters.vaultAccountId, );
    }
}