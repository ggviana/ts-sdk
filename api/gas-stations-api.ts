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
import { EditGasStationConfigurationResponse } from '../models';
// @ts-ignore
import { ErrorSchema } from '../models';
// @ts-ignore
import { GasStationConfiguration } from '../models';
// @ts-ignore
import { GasStationPropertiesResponse } from '../models';
/**
 * GasStationsApi - axios parameter creator
 * @export
 */
export const GasStationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns gas station settings and balances for a requested asset.
         * @summary Get gas station settings by asset
         * @param {string} assetId The ID of the asset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGasStationByAssetId: async (assetId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            assertParamExistsAndNotEmpty('getGasStationByAssetId', 'assetId', assetId)
            const localVarPath = `/gas_station/{assetId}`
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
         * Returns gas station settings and ETH balance.
         * @summary Get gas station settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGasStationInfo: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/gas_station`;
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
         * Configures gas station settings for ETH.
         * @summary Edit gas station settings
         * @param {GasStationConfiguration} gasStationConfiguration 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGasStationConfiguration: async (gasStationConfiguration: GasStationConfiguration, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            assertParamExists('updateGasStationConfiguration', 'gasStationConfiguration', gasStationConfiguration)
            const localVarPath = `/gas_station/configuration`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(gasStationConfiguration, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Configures gas station settings for a requested asset.
         * @summary Edit gas station settings for an asset
         * @param {GasStationConfiguration} gasStationConfiguration 
         * @param {string} assetId The ID of the asset
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGasStationConfigurationByAssetId: async (gasStationConfiguration: GasStationConfiguration, assetId: string, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            assertParamExists('updateGasStationConfigurationByAssetId', 'gasStationConfiguration', gasStationConfiguration)
            assertParamExistsAndNotEmpty('updateGasStationConfigurationByAssetId', 'assetId', assetId)
            const localVarPath = `/gas_station/configuration/{assetId}`
                .replace(`{${"assetId"}}`, encodeURIComponent(String(assetId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(gasStationConfiguration, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GasStationsApi - functional programming interface
 * @export
 */
export const GasStationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GasStationsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns gas station settings and balances for a requested asset.
         * @summary Get gas station settings by asset
         * @param {string} assetId The ID of the asset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGasStationByAssetId(assetId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GasStationPropertiesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGasStationByAssetId(assetId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['GasStationsApi.getGasStationByAssetId']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Returns gas station settings and ETH balance.
         * @summary Get gas station settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGasStationInfo(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GasStationPropertiesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGasStationInfo(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['GasStationsApi.getGasStationInfo']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Configures gas station settings for ETH.
         * @summary Edit gas station settings
         * @param {GasStationConfiguration} gasStationConfiguration 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateGasStationConfiguration(gasStationConfiguration: GasStationConfiguration, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EditGasStationConfigurationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateGasStationConfiguration(gasStationConfiguration, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['GasStationsApi.updateGasStationConfiguration']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Configures gas station settings for a requested asset.
         * @summary Edit gas station settings for an asset
         * @param {GasStationConfiguration} gasStationConfiguration 
         * @param {string} assetId The ID of the asset
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateGasStationConfigurationByAssetId(gasStationConfiguration: GasStationConfiguration, assetId: string, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EditGasStationConfigurationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateGasStationConfigurationByAssetId(gasStationConfiguration, assetId, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['GasStationsApi.updateGasStationConfigurationByAssetId']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * GasStationsApi - factory interface
 * @export
 */
export const GasStationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GasStationsApiFp(configuration)
    return {
        /**
         * Returns gas station settings and balances for a requested asset.
         * @summary Get gas station settings by asset
         * @param {GasStationsApiGetGasStationByAssetIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGasStationByAssetId(requestParameters: GasStationsApiGetGasStationByAssetIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<GasStationPropertiesResponse> {
            return localVarFp.getGasStationByAssetId(requestParameters.assetId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns gas station settings and ETH balance.
         * @summary Get gas station settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGasStationInfo(options?: RawAxiosRequestConfig): AxiosPromise<GasStationPropertiesResponse> {
            return localVarFp.getGasStationInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * Configures gas station settings for ETH.
         * @summary Edit gas station settings
         * @param {GasStationsApiUpdateGasStationConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGasStationConfiguration(requestParameters: GasStationsApiUpdateGasStationConfigurationRequest, options?: RawAxiosRequestConfig): AxiosPromise<EditGasStationConfigurationResponse> {
            return localVarFp.updateGasStationConfiguration(requestParameters.gasStationConfiguration, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Configures gas station settings for a requested asset.
         * @summary Edit gas station settings for an asset
         * @param {GasStationsApiUpdateGasStationConfigurationByAssetIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGasStationConfigurationByAssetId(requestParameters: GasStationsApiUpdateGasStationConfigurationByAssetIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<EditGasStationConfigurationResponse> {
            return localVarFp.updateGasStationConfigurationByAssetId(requestParameters.gasStationConfiguration, requestParameters.assetId, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getGasStationByAssetId operation in GasStationsApi.
 * @export
 * @interface GasStationsApiGetGasStationByAssetIdRequest
 */
export interface GasStationsApiGetGasStationByAssetIdRequest {
    /**
     * The ID of the asset
     * @type {string}
     * @memberof GasStationsApiGetGasStationByAssetId
     */
    readonly assetId: string
}

/**
 * Request parameters for updateGasStationConfiguration operation in GasStationsApi.
 * @export
 * @interface GasStationsApiUpdateGasStationConfigurationRequest
 */
export interface GasStationsApiUpdateGasStationConfigurationRequest {
    /**
     * 
     * @type {GasStationConfiguration}
     * @memberof GasStationsApiUpdateGasStationConfiguration
     */
    readonly gasStationConfiguration: GasStationConfiguration

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof GasStationsApiUpdateGasStationConfiguration
     */
    readonly idempotencyKey?: string
}

/**
 * Request parameters for updateGasStationConfigurationByAssetId operation in GasStationsApi.
 * @export
 * @interface GasStationsApiUpdateGasStationConfigurationByAssetIdRequest
 */
export interface GasStationsApiUpdateGasStationConfigurationByAssetIdRequest {
    /**
     * 
     * @type {GasStationConfiguration}
     * @memberof GasStationsApiUpdateGasStationConfigurationByAssetId
     */
    readonly gasStationConfiguration: GasStationConfiguration

    /**
     * The ID of the asset
     * @type {string}
     * @memberof GasStationsApiUpdateGasStationConfigurationByAssetId
     */
    readonly assetId: string

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof GasStationsApiUpdateGasStationConfigurationByAssetId
     */
    readonly idempotencyKey?: string
}

/**
 * GasStationsApi - object-oriented interface
 * @export
 * @class GasStationsApi
 * @extends {BaseAPI}
 */
export class GasStationsApi extends BaseAPI {
    /**
     * Returns gas station settings and balances for a requested asset.
     * @summary Get gas station settings by asset
     * @param {GasStationsApiGetGasStationByAssetIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GasStationsApi
     */
    public getGasStationByAssetId(requestParameters: GasStationsApiGetGasStationByAssetIdRequest) {
        return GasStationsApiFp(this.configuration).getGasStationByAssetId(requestParameters.assetId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Returns gas station settings and ETH balance.
     * @summary Get gas station settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GasStationsApi
     */
    public getGasStationInfo() {
        return GasStationsApiFp(this.configuration).getGasStationInfo().then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Configures gas station settings for ETH.
     * @summary Edit gas station settings
     * @param {GasStationsApiUpdateGasStationConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GasStationsApi
     */
    public updateGasStationConfiguration(requestParameters: GasStationsApiUpdateGasStationConfigurationRequest) {
        return GasStationsApiFp(this.configuration).updateGasStationConfiguration(requestParameters.gasStationConfiguration, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Configures gas station settings for a requested asset.
     * @summary Edit gas station settings for an asset
     * @param {GasStationsApiUpdateGasStationConfigurationByAssetIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GasStationsApi
     */
    public updateGasStationConfigurationByAssetId(requestParameters: GasStationsApiUpdateGasStationConfigurationByAssetIdRequest) {
        return GasStationsApiFp(this.configuration).updateGasStationConfigurationByAssetId(requestParameters.gasStationConfiguration, requestParameters.assetId, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }
}

