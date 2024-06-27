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
import { assertParamExistsAndNotEmpty } from '../utils/validation_utils';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { ApiKey } from '../models';
// @ts-ignore
import { ApiKeysPaginatedResponse } from '../models';
// @ts-ignore
import { Cosigner } from '../models';
// @ts-ignore
import { CosignersPaginatedResponse } from '../models';
// @ts-ignore
import { ErrorSchema } from '../models';
// @ts-ignore
import { RenameCosigner } from '../models';
/**
 * CosignersBetaApi - axios parameter creator
 * @export
 */
export const CosignersBetaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get an API key by ID **Note:** These endpoints are currently in beta and might be subject to changes. 
         * @summary Get API key
         * @param {string} cosignerId The unique identifier of the cosigner
         * @param {string} apiKeyId The unique identifier of the API key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiKey: async (cosignerId: string, apiKeyId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            assertParamExistsAndNotEmpty('getApiKey', 'cosignerId', cosignerId)
            assertParamExistsAndNotEmpty('getApiKey', 'apiKeyId', apiKeyId)
            const localVarPath = `/cosigners/{cosignerId}/api_keys/{apiKeyId}`
                .replace(`{${"cosignerId"}}`, encodeURIComponent(String(cosignerId)))
                .replace(`{${"apiKeyId"}}`, encodeURIComponent(String(apiKeyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
         * Get all cosigner paired API keys (paginated) **Note:** These endpoints are currently in beta and might be subject to changes. 
         * @summary Get all API keys
         * @param {string} cosignerId The unique identifier of the cosigner
         * @param {GetApiKeysOrderEnum} [order] ASC / DESC ordering (default DESC)
         * @param {string} [pageCursor] Cursor of the required page
         * @param {number} [pageSize] Maximum number of items in the page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiKeys: async (cosignerId: string, order?: GetApiKeysOrderEnum, pageCursor?: string, pageSize?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            assertParamExistsAndNotEmpty('getApiKeys', 'cosignerId', cosignerId)
            const localVarPath = `/cosigners/{cosignerId}/api_keys`
                .replace(`{${"cosignerId"}}`, encodeURIComponent(String(cosignerId)));
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

            if (pageCursor !== undefined) {
                localVarQueryParameter['pageCursor'] = pageCursor;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
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
         * Get a cosigner by ID **Note:** These endpoints are currently in beta and might be subject to changes. 
         * @summary Get cosigner
         * @param {string} cosignerId The unique identifier of the cosigner
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCosigner: async (cosignerId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            assertParamExistsAndNotEmpty('getCosigner', 'cosignerId', cosignerId)
            const localVarPath = `/cosigners/{cosignerId}`
                .replace(`{${"cosignerId"}}`, encodeURIComponent(String(cosignerId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
         * Get all workspace cosigners (paginated) **Note:** These endpoints are currently in beta and might be subject to changes. 
         * @summary Get all cosigners
         * @param {GetCosignersOrderEnum} [order] ASC / DESC ordering (default DESC)
         * @param {string} [pageCursor] Cursor of the required page
         * @param {number} [pageSize] Maximum number of items in the page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCosigners: async (order?: GetCosignersOrderEnum, pageCursor?: string, pageSize?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/cosigners`;
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

            if (pageCursor !== undefined) {
                localVarQueryParameter['pageCursor'] = pageCursor;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
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
         * Rename a cosigner by ID **Note:** These endpoints are currently in beta and might be subject to changes. 
         * @summary Rename cosigner
         * @param {RenameCosigner} renameCosigner 
         * @param {string} cosignerId The unique identifier of the cosigner
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renameCosigner: async (renameCosigner: RenameCosigner, cosignerId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            assertParamExists('renameCosigner', 'renameCosigner', renameCosigner)
            assertParamExistsAndNotEmpty('renameCosigner', 'cosignerId', cosignerId)
            const localVarPath = `/cosigners/{cosignerId}`
                .replace(`{${"cosignerId"}}`, encodeURIComponent(String(cosignerId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(renameCosigner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CosignersBetaApi - functional programming interface
 * @export
 */
export const CosignersBetaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CosignersBetaApiAxiosParamCreator(configuration)
    return {
        /**
         * Get an API key by ID **Note:** These endpoints are currently in beta and might be subject to changes. 
         * @summary Get API key
         * @param {string} cosignerId The unique identifier of the cosigner
         * @param {string} apiKeyId The unique identifier of the API key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApiKey(cosignerId: string, apiKeyId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiKey>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApiKey(cosignerId, apiKeyId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['CosignersBetaApi.getApiKey']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Get all cosigner paired API keys (paginated) **Note:** These endpoints are currently in beta and might be subject to changes. 
         * @summary Get all API keys
         * @param {string} cosignerId The unique identifier of the cosigner
         * @param {GetApiKeysOrderEnum} [order] ASC / DESC ordering (default DESC)
         * @param {string} [pageCursor] Cursor of the required page
         * @param {number} [pageSize] Maximum number of items in the page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApiKeys(cosignerId: string, order?: GetApiKeysOrderEnum, pageCursor?: string, pageSize?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiKeysPaginatedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApiKeys(cosignerId, order, pageCursor, pageSize, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['CosignersBetaApi.getApiKeys']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Get a cosigner by ID **Note:** These endpoints are currently in beta and might be subject to changes. 
         * @summary Get cosigner
         * @param {string} cosignerId The unique identifier of the cosigner
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCosigner(cosignerId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Cosigner>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCosigner(cosignerId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['CosignersBetaApi.getCosigner']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Get all workspace cosigners (paginated) **Note:** These endpoints are currently in beta and might be subject to changes. 
         * @summary Get all cosigners
         * @param {GetCosignersOrderEnum} [order] ASC / DESC ordering (default DESC)
         * @param {string} [pageCursor] Cursor of the required page
         * @param {number} [pageSize] Maximum number of items in the page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCosigners(order?: GetCosignersOrderEnum, pageCursor?: string, pageSize?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CosignersPaginatedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCosigners(order, pageCursor, pageSize, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['CosignersBetaApi.getCosigners']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Rename a cosigner by ID **Note:** These endpoints are currently in beta and might be subject to changes. 
         * @summary Rename cosigner
         * @param {RenameCosigner} renameCosigner 
         * @param {string} cosignerId The unique identifier of the cosigner
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async renameCosigner(renameCosigner: RenameCosigner, cosignerId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Cosigner>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.renameCosigner(renameCosigner, cosignerId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['CosignersBetaApi.renameCosigner']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * CosignersBetaApi - factory interface
 * @export
 */
export const CosignersBetaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CosignersBetaApiFp(configuration)
    return {
        /**
         * Get an API key by ID **Note:** These endpoints are currently in beta and might be subject to changes. 
         * @summary Get API key
         * @param {CosignersBetaApiGetApiKeyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiKey(requestParameters: CosignersBetaApiGetApiKeyRequest, options?: RawAxiosRequestConfig): AxiosPromise<ApiKey> {
            return localVarFp.getApiKey(requestParameters.cosignerId, requestParameters.apiKeyId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all cosigner paired API keys (paginated) **Note:** These endpoints are currently in beta and might be subject to changes. 
         * @summary Get all API keys
         * @param {CosignersBetaApiGetApiKeysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiKeys(requestParameters: CosignersBetaApiGetApiKeysRequest, options?: RawAxiosRequestConfig): AxiosPromise<ApiKeysPaginatedResponse> {
            return localVarFp.getApiKeys(requestParameters.cosignerId, requestParameters.order, requestParameters.pageCursor, requestParameters.pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a cosigner by ID **Note:** These endpoints are currently in beta and might be subject to changes. 
         * @summary Get cosigner
         * @param {CosignersBetaApiGetCosignerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCosigner(requestParameters: CosignersBetaApiGetCosignerRequest, options?: RawAxiosRequestConfig): AxiosPromise<Cosigner> {
            return localVarFp.getCosigner(requestParameters.cosignerId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all workspace cosigners (paginated) **Note:** These endpoints are currently in beta and might be subject to changes. 
         * @summary Get all cosigners
         * @param {CosignersBetaApiGetCosignersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCosigners(requestParameters: CosignersBetaApiGetCosignersRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<CosignersPaginatedResponse> {
            return localVarFp.getCosigners(requestParameters.order, requestParameters.pageCursor, requestParameters.pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * Rename a cosigner by ID **Note:** These endpoints are currently in beta and might be subject to changes. 
         * @summary Rename cosigner
         * @param {CosignersBetaApiRenameCosignerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renameCosigner(requestParameters: CosignersBetaApiRenameCosignerRequest, options?: RawAxiosRequestConfig): AxiosPromise<Cosigner> {
            return localVarFp.renameCosigner(requestParameters.renameCosigner, requestParameters.cosignerId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getApiKey operation in CosignersBetaApi.
 * @export
 * @interface CosignersBetaApiGetApiKeyRequest
 */
export interface CosignersBetaApiGetApiKeyRequest {
    /**
     * The unique identifier of the cosigner
     * @type {string}
     * @memberof CosignersBetaApiGetApiKey
     */
    readonly cosignerId: string

    /**
     * The unique identifier of the API key
     * @type {string}
     * @memberof CosignersBetaApiGetApiKey
     */
    readonly apiKeyId: string
}

/**
 * Request parameters for getApiKeys operation in CosignersBetaApi.
 * @export
 * @interface CosignersBetaApiGetApiKeysRequest
 */
export interface CosignersBetaApiGetApiKeysRequest {
    /**
     * The unique identifier of the cosigner
     * @type {string}
     * @memberof CosignersBetaApiGetApiKeys
     */
    readonly cosignerId: string

    /**
     * ASC / DESC ordering (default DESC)
     * @type {'ASC' | 'DESC'}
     * @memberof CosignersBetaApiGetApiKeys
     */
    readonly order?: GetApiKeysOrderEnum

    /**
     * Cursor of the required page
     * @type {string}
     * @memberof CosignersBetaApiGetApiKeys
     */
    readonly pageCursor?: string

    /**
     * Maximum number of items in the page
     * @type {number}
     * @memberof CosignersBetaApiGetApiKeys
     */
    readonly pageSize?: number
}

/**
 * Request parameters for getCosigner operation in CosignersBetaApi.
 * @export
 * @interface CosignersBetaApiGetCosignerRequest
 */
export interface CosignersBetaApiGetCosignerRequest {
    /**
     * The unique identifier of the cosigner
     * @type {string}
     * @memberof CosignersBetaApiGetCosigner
     */
    readonly cosignerId: string
}

/**
 * Request parameters for getCosigners operation in CosignersBetaApi.
 * @export
 * @interface CosignersBetaApiGetCosignersRequest
 */
export interface CosignersBetaApiGetCosignersRequest {
    /**
     * ASC / DESC ordering (default DESC)
     * @type {'ASC' | 'DESC'}
     * @memberof CosignersBetaApiGetCosigners
     */
    readonly order?: GetCosignersOrderEnum

    /**
     * Cursor of the required page
     * @type {string}
     * @memberof CosignersBetaApiGetCosigners
     */
    readonly pageCursor?: string

    /**
     * Maximum number of items in the page
     * @type {number}
     * @memberof CosignersBetaApiGetCosigners
     */
    readonly pageSize?: number
}

/**
 * Request parameters for renameCosigner operation in CosignersBetaApi.
 * @export
 * @interface CosignersBetaApiRenameCosignerRequest
 */
export interface CosignersBetaApiRenameCosignerRequest {
    /**
     * 
     * @type {RenameCosigner}
     * @memberof CosignersBetaApiRenameCosigner
     */
    readonly renameCosigner: RenameCosigner

    /**
     * The unique identifier of the cosigner
     * @type {string}
     * @memberof CosignersBetaApiRenameCosigner
     */
    readonly cosignerId: string
}

/**
 * CosignersBetaApi - object-oriented interface
 * @export
 * @class CosignersBetaApi
 * @extends {BaseAPI}
 */
export class CosignersBetaApi extends BaseAPI {
    /**
     * Get an API key by ID **Note:** These endpoints are currently in beta and might be subject to changes. 
     * @summary Get API key
     * @param {CosignersBetaApiGetApiKeyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CosignersBetaApi
     */
    public getApiKey(requestParameters: CosignersBetaApiGetApiKeyRequest) {
        return CosignersBetaApiFp(this.configuration).getApiKey(requestParameters.cosignerId, requestParameters.apiKeyId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Get all cosigner paired API keys (paginated) **Note:** These endpoints are currently in beta and might be subject to changes. 
     * @summary Get all API keys
     * @param {CosignersBetaApiGetApiKeysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CosignersBetaApi
     */
    public getApiKeys(requestParameters: CosignersBetaApiGetApiKeysRequest) {
        return CosignersBetaApiFp(this.configuration).getApiKeys(requestParameters.cosignerId, requestParameters.order, requestParameters.pageCursor, requestParameters.pageSize).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Get a cosigner by ID **Note:** These endpoints are currently in beta and might be subject to changes. 
     * @summary Get cosigner
     * @param {CosignersBetaApiGetCosignerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CosignersBetaApi
     */
    public getCosigner(requestParameters: CosignersBetaApiGetCosignerRequest) {
        return CosignersBetaApiFp(this.configuration).getCosigner(requestParameters.cosignerId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Get all workspace cosigners (paginated) **Note:** These endpoints are currently in beta and might be subject to changes. 
     * @summary Get all cosigners
     * @param {CosignersBetaApiGetCosignersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CosignersBetaApi
     */
    public getCosigners(requestParameters: CosignersBetaApiGetCosignersRequest = {}) {
        return CosignersBetaApiFp(this.configuration).getCosigners(requestParameters.order, requestParameters.pageCursor, requestParameters.pageSize).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Rename a cosigner by ID **Note:** These endpoints are currently in beta and might be subject to changes. 
     * @summary Rename cosigner
     * @param {CosignersBetaApiRenameCosignerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CosignersBetaApi
     */
    public renameCosigner(requestParameters: CosignersBetaApiRenameCosignerRequest) {
        return CosignersBetaApiFp(this.configuration).renameCosigner(requestParameters.renameCosigner, requestParameters.cosignerId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }
}

/**
 * @export
 */
export const GetApiKeysOrderEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type GetApiKeysOrderEnum = typeof GetApiKeysOrderEnum[keyof typeof GetApiKeysOrderEnum];
/**
 * @export
 */
export const GetCosignersOrderEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type GetCosignersOrderEnum = typeof GetCosignersOrderEnum[keyof typeof GetCosignersOrderEnum];
