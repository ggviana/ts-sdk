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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
import { convertToFireblocksResponse } from "../response/fireblocksResponse";
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { CreateConnectionResponse } from '../models';
// @ts-ignore
import { CreateRequest } from '../models';
// @ts-ignore
import { GetConnectionsResponse } from '../models';
// @ts-ignore
import { GetFilterParameter } from '../models';
// @ts-ignore
import { RespondToConnectionRequest } from '../models';
/**
 * Web3ConnectionsApi - axios parameter creator
 * @export
 */
export const Web3ConnectionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Initiate a new Web3 connection.  * Note: After this succeeds, make a request to `PUT /v1/connections/wc/{id}` (below) to approve or reject the new Web3 connection.
         * @summary Create a new Web3 connection.
         * @param {CreateRequest} createRequest 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (createRequest: CreateRequest, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createRequest' is not null or undefined
            assertParamExists('create', 'createRequest', createRequest)
            const localVarPath = `/connections/wc`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get open Web3 connections.
         * @summary List all open Web3 connections.
         * @param {GetOrderEnum} [order] List order; ascending or descending.
         * @param {GetFilterParameter} [filter] Parsed filter object
         * @param {GetSortEnum} [sort] Property to sort Web3 connections by.
         * @param {number} [pageSize] Amount of results to return in the next page.
         * @param {string} [next] Cursor to the next page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (order?: GetOrderEnum, filter?: GetFilterParameter, sort?: GetSortEnum, pageSize?: number, next?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/connections`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (filter !== undefined) {
                for (const [key, value] of Object.entries(filter)) {
                    localVarQueryParameter[key] = value;
                }
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (next !== undefined) {
                localVarQueryParameter['next'] = next;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Remove a Web3 connection
         * @summary Remove an existing Web3 connection.
         * @param {string} id The ID of the existing Web3 connection to remove.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        remove: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('remove', 'id', id)
            const localVarPath = `/connections/wc/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Submit a response to *approve* or *reject* an initiated Web3 connection. * Note: This call is used to complete your `POST /v1/connections/wc/` request.  After this succeeds, your new Web3 connection is created and functioning.
         * @summary Respond to a pending Web3 connection request.
         * @param {RespondToConnectionRequest} respondToConnectionRequest 
         * @param {string} id The ID of the initiated Web3 connection to approve.
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submit: async (respondToConnectionRequest: RespondToConnectionRequest, id: string, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'respondToConnectionRequest' is not null or undefined
            assertParamExists('submit', 'respondToConnectionRequest', respondToConnectionRequest)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('submit', 'id', id)
            const localVarPath = `/connections/wc/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(respondToConnectionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * Web3ConnectionsApi - functional programming interface
 * @export
 */
export const Web3ConnectionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = Web3ConnectionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Initiate a new Web3 connection.  * Note: After this succeeds, make a request to `PUT /v1/connections/wc/{id}` (below) to approve or reject the new Web3 connection.
         * @summary Create a new Web3 connection.
         * @param {CreateRequest} createRequest 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(createRequest: CreateRequest, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateConnectionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(createRequest, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['Web3ConnectionsApi.create']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Get open Web3 connections.
         * @summary List all open Web3 connections.
         * @param {GetOrderEnum} [order] List order; ascending or descending.
         * @param {GetFilterParameter} [filter] Parsed filter object
         * @param {GetSortEnum} [sort] Property to sort Web3 connections by.
         * @param {number} [pageSize] Amount of results to return in the next page.
         * @param {string} [next] Cursor to the next page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(order?: GetOrderEnum, filter?: GetFilterParameter, sort?: GetSortEnum, pageSize?: number, next?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetConnectionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(order, filter, sort, pageSize, next, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['Web3ConnectionsApi.get']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Remove a Web3 connection
         * @summary Remove an existing Web3 connection.
         * @param {string} id The ID of the existing Web3 connection to remove.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async remove(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.remove(id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['Web3ConnectionsApi.remove']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Submit a response to *approve* or *reject* an initiated Web3 connection. * Note: This call is used to complete your `POST /v1/connections/wc/` request.  After this succeeds, your new Web3 connection is created and functioning.
         * @summary Respond to a pending Web3 connection request.
         * @param {RespondToConnectionRequest} respondToConnectionRequest 
         * @param {string} id The ID of the initiated Web3 connection to approve.
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submit(respondToConnectionRequest: RespondToConnectionRequest, id: string, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.submit(respondToConnectionRequest, id, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['Web3ConnectionsApi.submit']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * Web3ConnectionsApi - factory interface
 * @export
 */
export const Web3ConnectionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = Web3ConnectionsApiFp(configuration)
    return {
        /**
         * Initiate a new Web3 connection.  * Note: After this succeeds, make a request to `PUT /v1/connections/wc/{id}` (below) to approve or reject the new Web3 connection.
         * @summary Create a new Web3 connection.
         * @param {Web3ConnectionsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: Web3ConnectionsApiCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<CreateConnectionResponse> {
            return localVarFp.create(requestParameters.createRequest, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Get open Web3 connections.
         * @summary List all open Web3 connections.
         * @param {Web3ConnectionsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: Web3ConnectionsApiGetRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<GetConnectionsResponse> {
            return localVarFp.get(requestParameters.order, requestParameters.filter, requestParameters.sort, requestParameters.pageSize, requestParameters.next, options).then((request) => request(axios, basePath));
        },
        /**
         * Remove a Web3 connection
         * @summary Remove an existing Web3 connection.
         * @param {Web3ConnectionsApiRemoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        remove(requestParameters: Web3ConnectionsApiRemoveRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.remove(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Submit a response to *approve* or *reject* an initiated Web3 connection. * Note: This call is used to complete your `POST /v1/connections/wc/` request.  After this succeeds, your new Web3 connection is created and functioning.
         * @summary Respond to a pending Web3 connection request.
         * @param {Web3ConnectionsApiSubmitRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submit(requestParameters: Web3ConnectionsApiSubmitRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.submit(requestParameters.respondToConnectionRequest, requestParameters.id, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in Web3ConnectionsApi.
 * @export
 * @interface Web3ConnectionsApiCreateRequest
 */
export interface Web3ConnectionsApiCreateRequest {
    /**
     * 
     * @type {CreateRequest}
     * @memberof Web3ConnectionsApiCreate
     */
    readonly createRequest: CreateRequest

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof Web3ConnectionsApiCreate
     */
    readonly idempotencyKey?: string
}

/**
 * Request parameters for get operation in Web3ConnectionsApi.
 * @export
 * @interface Web3ConnectionsApiGetRequest
 */
export interface Web3ConnectionsApiGetRequest {
    /**
     * List order; ascending or descending.
     * @type {'ASC' | 'DESC'}
     * @memberof Web3ConnectionsApiGet
     */
    readonly order?: GetOrderEnum

    /**
     * Parsed filter object
     * @type {GetFilterParameter}
     * @memberof Web3ConnectionsApiGet
     */
    readonly filter?: GetFilterParameter

    /**
     * Property to sort Web3 connections by.
     * @type {'id' | 'userId' | 'vaultAccountId' | 'createdAt' | 'feeLevel' | 'appUrl' | 'appName'}
     * @memberof Web3ConnectionsApiGet
     */
    readonly sort?: GetSortEnum

    /**
     * Amount of results to return in the next page.
     * @type {number}
     * @memberof Web3ConnectionsApiGet
     */
    readonly pageSize?: number

    /**
     * Cursor to the next page
     * @type {string}
     * @memberof Web3ConnectionsApiGet
     */
    readonly next?: string
}

/**
 * Request parameters for remove operation in Web3ConnectionsApi.
 * @export
 * @interface Web3ConnectionsApiRemoveRequest
 */
export interface Web3ConnectionsApiRemoveRequest {
    /**
     * The ID of the existing Web3 connection to remove.
     * @type {string}
     * @memberof Web3ConnectionsApiRemove
     */
    readonly id: string
}

/**
 * Request parameters for submit operation in Web3ConnectionsApi.
 * @export
 * @interface Web3ConnectionsApiSubmitRequest
 */
export interface Web3ConnectionsApiSubmitRequest {
    /**
     * 
     * @type {RespondToConnectionRequest}
     * @memberof Web3ConnectionsApiSubmit
     */
    readonly respondToConnectionRequest: RespondToConnectionRequest

    /**
     * The ID of the initiated Web3 connection to approve.
     * @type {string}
     * @memberof Web3ConnectionsApiSubmit
     */
    readonly id: string

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof Web3ConnectionsApiSubmit
     */
    readonly idempotencyKey?: string
}

/**
 * Web3ConnectionsApi - object-oriented interface
 * @export
 * @class Web3ConnectionsApi
 * @extends {BaseAPI}
 */
export class Web3ConnectionsApi extends BaseAPI {
    /**
     * Initiate a new Web3 connection.  * Note: After this succeeds, make a request to `PUT /v1/connections/wc/{id}` (below) to approve or reject the new Web3 connection.
     * @summary Create a new Web3 connection.
     * @param {Web3ConnectionsApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Web3ConnectionsApi
     */
    public create(requestParameters: Web3ConnectionsApiCreateRequest) {
        return Web3ConnectionsApiFp(this.configuration).create(requestParameters.createRequest, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Get open Web3 connections.
     * @summary List all open Web3 connections.
     * @param {Web3ConnectionsApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Web3ConnectionsApi
     */
    public get(requestParameters: Web3ConnectionsApiGetRequest = {}) {
        return Web3ConnectionsApiFp(this.configuration).get(requestParameters.order, requestParameters.filter, requestParameters.sort, requestParameters.pageSize, requestParameters.next).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Remove a Web3 connection
     * @summary Remove an existing Web3 connection.
     * @param {Web3ConnectionsApiRemoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Web3ConnectionsApi
     */
    public remove(requestParameters: Web3ConnectionsApiRemoveRequest) {
        return Web3ConnectionsApiFp(this.configuration).remove(requestParameters.id).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Submit a response to *approve* or *reject* an initiated Web3 connection. * Note: This call is used to complete your `POST /v1/connections/wc/` request.  After this succeeds, your new Web3 connection is created and functioning.
     * @summary Respond to a pending Web3 connection request.
     * @param {Web3ConnectionsApiSubmitRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Web3ConnectionsApi
     */
    public submit(requestParameters: Web3ConnectionsApiSubmitRequest) {
        return Web3ConnectionsApiFp(this.configuration).submit(requestParameters.respondToConnectionRequest, requestParameters.id, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }
}

/**
 * @export
 */
export const GetOrderEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type GetOrderEnum = typeof GetOrderEnum[keyof typeof GetOrderEnum];
/**
 * @export
 */
export const GetSortEnum = {
    Id: 'id',
    UserId: 'userId',
    VaultAccountId: 'vaultAccountId',
    CreatedAt: 'createdAt',
    FeeLevel: 'feeLevel',
    AppUrl: 'appUrl',
    AppName: 'appName'
} as const;
export type GetSortEnum = typeof GetSortEnum[keyof typeof GetSortEnum];
