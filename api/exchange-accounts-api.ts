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
import { ConvertAssetsRequest } from '../models';
// @ts-ignore
import { CreateInternalTransferRequest } from '../models';
// @ts-ignore
import { ErrorSchema } from '../models';
// @ts-ignore
import { ExchangeAccount } from '../models';
// @ts-ignore
import { ExchangeAccountsPaged } from '../models';
// @ts-ignore
import { ExchangeAsset } from '../models';
/**
 * ExchangeAccountsApi - axios parameter creator
 * @export
 */
export const ExchangeAccountsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Convert exchange account funds from the source asset to the destination asset. Coinbase (USD to USDC, USDC to USD) and Bitso (MXN to USD) are supported conversions.
         * @summary Convert exchange account funds from the source asset to the destination asset.
         * @param {string} exchangeAccountId The ID of the exchange account. Please make sure the exchange supports conversions. To find the ID of your exchange account, use GET/exchange_accounts.
         * @param {ConvertAssetsRequest} [convertAssetsRequest] 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        convertAssets: async (exchangeAccountId: string, convertAssetsRequest?: ConvertAssetsRequest, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'exchangeAccountId' is not null or undefined
            assertParamExists('convertAssets', 'exchangeAccountId', exchangeAccountId)
            const localVarPath = `/exchange_accounts/{exchangeAccountId}/convert`
                .replace(`{${"exchangeAccountId"}}`, encodeURIComponent(String(exchangeAccountId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(convertAssetsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns an exchange account by ID.
         * @summary Find a specific exchange account
         * @param {string} exchangeAccountId The ID of the exchange account to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExchangeAccount: async (exchangeAccountId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'exchangeAccountId' is not null or undefined
            assertParamExists('getExchangeAccount', 'exchangeAccountId', exchangeAccountId)
            const localVarPath = `/exchange_accounts/{exchangeAccountId}`
                .replace(`{${"exchangeAccountId"}}`, encodeURIComponent(String(exchangeAccountId)));
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
         * Returns an asset for an exchange account.
         * @summary Find an asset for an exchange account
         * @param {string} exchangeAccountId The ID of the exchange account to return
         * @param {string} assetId The ID of the asset to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExchangeAccountAsset: async (exchangeAccountId: string, assetId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'exchangeAccountId' is not null or undefined
            assertParamExists('getExchangeAccountAsset', 'exchangeAccountId', exchangeAccountId)
            // verify required parameter 'assetId' is not null or undefined
            assertParamExists('getExchangeAccountAsset', 'assetId', assetId)
            const localVarPath = `/exchange_accounts/{exchangeAccountId}/{assetId}`
                .replace(`{${"exchangeAccountId"}}`, encodeURIComponent(String(exchangeAccountId)))
                .replace(`{${"assetId"}}`, encodeURIComponent(String(assetId)));
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
         * Deprecated (use new \'paged\' endpoint) - Returns all exchange accounts.
         * @summary List exchange accounts
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getExchangeAccounts: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/exchange_accounts`;
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
         * Returns a page include exchange accounts.
         * @summary Pagination list exchange accounts
         * @param {number} limit number of exchanges per page
         * @param {string} [before] 
         * @param {string} [after] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPagedExchangeAccounts: async (limit: number, before?: string, after?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'limit' is not null or undefined
            assertParamExists('getPagedExchangeAccounts', 'limit', limit)
            const localVarPath = `/exchange_accounts/paged`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (before !== undefined) {
                localVarQueryParameter['before'] = before;
            }

            if (after !== undefined) {
                localVarQueryParameter['after'] = after;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
         * Transfers funds between trading accounts under the same exchange account.
         * @summary Internal transfer for exchange accounts
         * @param {string} exchangeAccountId The ID of the exchange account to return
         * @param {CreateInternalTransferRequest} [createInternalTransferRequest] 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        internalTransfer: async (exchangeAccountId: string, createInternalTransferRequest?: CreateInternalTransferRequest, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'exchangeAccountId' is not null or undefined
            assertParamExists('internalTransfer', 'exchangeAccountId', exchangeAccountId)
            const localVarPath = `/exchange_accounts/{exchangeAccountId}/internal_transfer`
                .replace(`{${"exchangeAccountId"}}`, encodeURIComponent(String(exchangeAccountId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(createInternalTransferRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ExchangeAccountsApi - functional programming interface
 * @export
 */
export const ExchangeAccountsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ExchangeAccountsApiAxiosParamCreator(configuration)
    return {
        /**
         * Convert exchange account funds from the source asset to the destination asset. Coinbase (USD to USDC, USDC to USD) and Bitso (MXN to USD) are supported conversions.
         * @summary Convert exchange account funds from the source asset to the destination asset.
         * @param {string} exchangeAccountId The ID of the exchange account. Please make sure the exchange supports conversions. To find the ID of your exchange account, use GET/exchange_accounts.
         * @param {ConvertAssetsRequest} [convertAssetsRequest] 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async convertAssets(exchangeAccountId: string, convertAssetsRequest?: ConvertAssetsRequest, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.convertAssets(exchangeAccountId, convertAssetsRequest, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ExchangeAccountsApi.convertAssets']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Returns an exchange account by ID.
         * @summary Find a specific exchange account
         * @param {string} exchangeAccountId The ID of the exchange account to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExchangeAccount(exchangeAccountId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExchangeAccount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExchangeAccount(exchangeAccountId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ExchangeAccountsApi.getExchangeAccount']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Returns an asset for an exchange account.
         * @summary Find an asset for an exchange account
         * @param {string} exchangeAccountId The ID of the exchange account to return
         * @param {string} assetId The ID of the asset to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExchangeAccountAsset(exchangeAccountId: string, assetId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExchangeAsset>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExchangeAccountAsset(exchangeAccountId, assetId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ExchangeAccountsApi.getExchangeAccountAsset']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Deprecated (use new \'paged\' endpoint) - Returns all exchange accounts.
         * @summary List exchange accounts
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async getExchangeAccounts(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ExchangeAccount>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExchangeAccounts(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ExchangeAccountsApi.getExchangeAccounts']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Returns a page include exchange accounts.
         * @summary Pagination list exchange accounts
         * @param {number} limit number of exchanges per page
         * @param {string} [before] 
         * @param {string} [after] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPagedExchangeAccounts(limit: number, before?: string, after?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ExchangeAccountsPaged>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPagedExchangeAccounts(limit, before, after, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ExchangeAccountsApi.getPagedExchangeAccounts']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Transfers funds between trading accounts under the same exchange account.
         * @summary Internal transfer for exchange accounts
         * @param {string} exchangeAccountId The ID of the exchange account to return
         * @param {CreateInternalTransferRequest} [createInternalTransferRequest] 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async internalTransfer(exchangeAccountId: string, createInternalTransferRequest?: CreateInternalTransferRequest, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.internalTransfer(exchangeAccountId, createInternalTransferRequest, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ExchangeAccountsApi.internalTransfer']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * ExchangeAccountsApi - factory interface
 * @export
 */
export const ExchangeAccountsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ExchangeAccountsApiFp(configuration)
    return {
        /**
         * Convert exchange account funds from the source asset to the destination asset. Coinbase (USD to USDC, USDC to USD) and Bitso (MXN to USD) are supported conversions.
         * @summary Convert exchange account funds from the source asset to the destination asset.
         * @param {ExchangeAccountsApiConvertAssetsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        convertAssets(requestParameters: ExchangeAccountsApiConvertAssetsRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.convertAssets(requestParameters.exchangeAccountId, requestParameters.convertAssetsRequest, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns an exchange account by ID.
         * @summary Find a specific exchange account
         * @param {ExchangeAccountsApiGetExchangeAccountRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExchangeAccount(requestParameters: ExchangeAccountsApiGetExchangeAccountRequest, options?: RawAxiosRequestConfig): AxiosPromise<ExchangeAccount> {
            return localVarFp.getExchangeAccount(requestParameters.exchangeAccountId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns an asset for an exchange account.
         * @summary Find an asset for an exchange account
         * @param {ExchangeAccountsApiGetExchangeAccountAssetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExchangeAccountAsset(requestParameters: ExchangeAccountsApiGetExchangeAccountAssetRequest, options?: RawAxiosRequestConfig): AxiosPromise<ExchangeAsset> {
            return localVarFp.getExchangeAccountAsset(requestParameters.exchangeAccountId, requestParameters.assetId, options).then((request) => request(axios, basePath));
        },
        /**
         * Deprecated (use new \'paged\' endpoint) - Returns all exchange accounts.
         * @summary List exchange accounts
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getExchangeAccounts(options?: RawAxiosRequestConfig): AxiosPromise<Array<ExchangeAccount>> {
            return localVarFp.getExchangeAccounts(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a page include exchange accounts.
         * @summary Pagination list exchange accounts
         * @param {ExchangeAccountsApiGetPagedExchangeAccountsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPagedExchangeAccounts(requestParameters: ExchangeAccountsApiGetPagedExchangeAccountsRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<ExchangeAccountsPaged>> {
            return localVarFp.getPagedExchangeAccounts(requestParameters.limit, requestParameters.before, requestParameters.after, options).then((request) => request(axios, basePath));
        },
        /**
         * Transfers funds between trading accounts under the same exchange account.
         * @summary Internal transfer for exchange accounts
         * @param {ExchangeAccountsApiInternalTransferRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        internalTransfer(requestParameters: ExchangeAccountsApiInternalTransferRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.internalTransfer(requestParameters.exchangeAccountId, requestParameters.createInternalTransferRequest, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for convertAssets operation in ExchangeAccountsApi.
 * @export
 * @interface ExchangeAccountsApiConvertAssetsRequest
 */
export interface ExchangeAccountsApiConvertAssetsRequest {
    /**
     * The ID of the exchange account. Please make sure the exchange supports conversions. To find the ID of your exchange account, use GET/exchange_accounts.
     * @type {string}
     * @memberof ExchangeAccountsApiConvertAssets
     */
    readonly exchangeAccountId: string

    /**
     * 
     * @type {ConvertAssetsRequest}
     * @memberof ExchangeAccountsApiConvertAssets
     */
    readonly convertAssetsRequest?: ConvertAssetsRequest

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof ExchangeAccountsApiConvertAssets
     */
    readonly idempotencyKey?: string
}

/**
 * Request parameters for getExchangeAccount operation in ExchangeAccountsApi.
 * @export
 * @interface ExchangeAccountsApiGetExchangeAccountRequest
 */
export interface ExchangeAccountsApiGetExchangeAccountRequest {
    /**
     * The ID of the exchange account to return
     * @type {string}
     * @memberof ExchangeAccountsApiGetExchangeAccount
     */
    readonly exchangeAccountId: string
}

/**
 * Request parameters for getExchangeAccountAsset operation in ExchangeAccountsApi.
 * @export
 * @interface ExchangeAccountsApiGetExchangeAccountAssetRequest
 */
export interface ExchangeAccountsApiGetExchangeAccountAssetRequest {
    /**
     * The ID of the exchange account to return
     * @type {string}
     * @memberof ExchangeAccountsApiGetExchangeAccountAsset
     */
    readonly exchangeAccountId: string

    /**
     * The ID of the asset to return
     * @type {string}
     * @memberof ExchangeAccountsApiGetExchangeAccountAsset
     */
    readonly assetId: string
}

/**
 * Request parameters for getPagedExchangeAccounts operation in ExchangeAccountsApi.
 * @export
 * @interface ExchangeAccountsApiGetPagedExchangeAccountsRequest
 */
export interface ExchangeAccountsApiGetPagedExchangeAccountsRequest {
    /**
     * number of exchanges per page
     * @type {number}
     * @memberof ExchangeAccountsApiGetPagedExchangeAccounts
     */
    readonly limit: number

    /**
     * 
     * @type {string}
     * @memberof ExchangeAccountsApiGetPagedExchangeAccounts
     */
    readonly before?: string

    /**
     * 
     * @type {string}
     * @memberof ExchangeAccountsApiGetPagedExchangeAccounts
     */
    readonly after?: string
}

/**
 * Request parameters for internalTransfer operation in ExchangeAccountsApi.
 * @export
 * @interface ExchangeAccountsApiInternalTransferRequest
 */
export interface ExchangeAccountsApiInternalTransferRequest {
    /**
     * The ID of the exchange account to return
     * @type {string}
     * @memberof ExchangeAccountsApiInternalTransfer
     */
    readonly exchangeAccountId: string

    /**
     * 
     * @type {CreateInternalTransferRequest}
     * @memberof ExchangeAccountsApiInternalTransfer
     */
    readonly createInternalTransferRequest?: CreateInternalTransferRequest

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof ExchangeAccountsApiInternalTransfer
     */
    readonly idempotencyKey?: string
}

/**
 * ExchangeAccountsApi - object-oriented interface
 * @export
 * @class ExchangeAccountsApi
 * @extends {BaseAPI}
 */
export class ExchangeAccountsApi extends BaseAPI {
    /**
     * Convert exchange account funds from the source asset to the destination asset. Coinbase (USD to USDC, USDC to USD) and Bitso (MXN to USD) are supported conversions.
     * @summary Convert exchange account funds from the source asset to the destination asset.
     * @param {ExchangeAccountsApiConvertAssetsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangeAccountsApi
     */
    public convertAssets(requestParameters: ExchangeAccountsApiConvertAssetsRequest) {
        return ExchangeAccountsApiFp(this.configuration).convertAssets(requestParameters.exchangeAccountId, requestParameters.convertAssetsRequest, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Returns an exchange account by ID.
     * @summary Find a specific exchange account
     * @param {ExchangeAccountsApiGetExchangeAccountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangeAccountsApi
     */
    public getExchangeAccount(requestParameters: ExchangeAccountsApiGetExchangeAccountRequest) {
        return ExchangeAccountsApiFp(this.configuration).getExchangeAccount(requestParameters.exchangeAccountId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Returns an asset for an exchange account.
     * @summary Find an asset for an exchange account
     * @param {ExchangeAccountsApiGetExchangeAccountAssetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangeAccountsApi
     */
    public getExchangeAccountAsset(requestParameters: ExchangeAccountsApiGetExchangeAccountAssetRequest) {
        return ExchangeAccountsApiFp(this.configuration).getExchangeAccountAsset(requestParameters.exchangeAccountId, requestParameters.assetId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Deprecated (use new \'paged\' endpoint) - Returns all exchange accounts.
     * @summary List exchange accounts
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof ExchangeAccountsApi
     */
    public getExchangeAccounts() {
        return ExchangeAccountsApiFp(this.configuration).getExchangeAccounts().then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Returns a page include exchange accounts.
     * @summary Pagination list exchange accounts
     * @param {ExchangeAccountsApiGetPagedExchangeAccountsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangeAccountsApi
     */
    public getPagedExchangeAccounts(requestParameters: ExchangeAccountsApiGetPagedExchangeAccountsRequest) {
        return ExchangeAccountsApiFp(this.configuration).getPagedExchangeAccounts(requestParameters.limit, requestParameters.before, requestParameters.after).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Transfers funds between trading accounts under the same exchange account.
     * @summary Internal transfer for exchange accounts
     * @param {ExchangeAccountsApiInternalTransferRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangeAccountsApi
     */
    public internalTransfer(requestParameters: ExchangeAccountsApiInternalTransferRequest) {
        return ExchangeAccountsApiFp(this.configuration).internalTransfer(requestParameters.exchangeAccountId, requestParameters.createInternalTransferRequest, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }
}

