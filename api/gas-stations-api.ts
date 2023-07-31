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
         * Returns gas station settings and ETH balance.
         * @summary Get gas station settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGasStation: async (): Promise<AxiosRequestConfig> => {
            const localVarPath = `/gas_station`;
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
         * Returns gas station settings and balances for a requested asset.
         * @summary Get gas station settings by asset
         * @param {string} assetId The ID of the asset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGasStationByAssetId: async (assetId: string, ): Promise<AxiosRequestConfig> => {
            // verify required parameter 'assetId' is not null or undefined
            assertParamExists('getGasStationByAssetId', 'assetId', assetId)
            const localVarPath = `/gas_station/{assetId}`
                .replace(`{${"assetId"}}`, encodeURIComponent(String(assetId)));
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
         * Configures gas station settings for ETH.
         * @summary Edit gas station settings
         * @param {GasStationConfiguration} gasStationConfiguration 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGasStationConfiguration: async (gasStationConfiguration: GasStationConfiguration, ): Promise<AxiosRequestConfig> => {
            // verify required parameter 'gasStationConfiguration' is not null or undefined
            assertParamExists('updateGasStationConfiguration', 'gasStationConfiguration', gasStationConfiguration)
            const localVarPath = `/gas_station/configuration`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'PUT'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };
            localVarRequestOptions.data = gasStationConfiguration as any;

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
        /**
         * Configures gas station settings for a requested asset.
         * @summary Edit gas station settings for an asset
         * @param {GasStationConfiguration} gasStationConfiguration 
         * @param {string} assetId The ID of the asset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGasStationConfigurationByAssetId: async (gasStationConfiguration: GasStationConfiguration, assetId: string, ): Promise<AxiosRequestConfig> => {
            // verify required parameter 'gasStationConfiguration' is not null or undefined
            assertParamExists('updateGasStationConfigurationByAssetId', 'gasStationConfiguration', gasStationConfiguration)
            // verify required parameter 'assetId' is not null or undefined
            assertParamExists('updateGasStationConfigurationByAssetId', 'assetId', assetId)
            const localVarPath = `/gas_station/configuration/{assetId}`
                .replace(`{${"assetId"}}`, encodeURIComponent(String(assetId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'PUT'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };
            localVarRequestOptions.data = gasStationConfiguration as any;

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
    }
};

/**
 * GasStationsApi - functional programming interface
 * @export
 */
export const GasStationsApiFp = function(httpClient: HttpClient) {
    const localVarAxiosParamCreator = GasStationsApiAxiosParamCreator(httpClient.configuration)
    return {
        /**
         * Returns gas station settings and ETH balance.
         * @summary Get gas station settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGasStation(): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GasStationPropertiesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGasStation();
            return httpClient.request(localVarAxiosArgs);
        },
        /**
         * Returns gas station settings and balances for a requested asset.
         * @summary Get gas station settings by asset
         * @param {string} assetId The ID of the asset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGasStationByAssetId(assetId: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GasStationPropertiesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGasStationByAssetId(assetId, );
            return httpClient.request(localVarAxiosArgs);
        },
        /**
         * Configures gas station settings for ETH.
         * @summary Edit gas station settings
         * @param {GasStationConfiguration} gasStationConfiguration 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateGasStationConfiguration(gasStationConfiguration: GasStationConfiguration, ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateGasStationConfiguration(gasStationConfiguration, );
            return httpClient.request(localVarAxiosArgs);
        },
        /**
         * Configures gas station settings for a requested asset.
         * @summary Edit gas station settings for an asset
         * @param {GasStationConfiguration} gasStationConfiguration 
         * @param {string} assetId The ID of the asset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateGasStationConfigurationByAssetId(gasStationConfiguration: GasStationConfiguration, assetId: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateGasStationConfigurationByAssetId(gasStationConfiguration, assetId, );
            return httpClient.request(localVarAxiosArgs);
        },
    }
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
}

/**
 * GasStationsApi - object-oriented interface
 * @export
 * @class GasStationsApi
 * @extends {BaseAPI}
 */
export class GasStationsApi extends BaseAPI {
    /**
     * Returns gas station settings and ETH balance.
     * @summary Get gas station settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GasStationsApi
     */
    public getGasStation() {
        return GasStationsApiFp(this.httpClient).getGasStation();
    }

    /**
     * Returns gas station settings and balances for a requested asset.
     * @summary Get gas station settings by asset
     * @param {GasStationsApiGetGasStationByAssetIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GasStationsApi
     */
    public getGasStationByAssetId(requestParameters: GasStationsApiGetGasStationByAssetIdRequest, ) {
        return GasStationsApiFp(this.httpClient).getGasStationByAssetId(requestParameters.assetId, );
    }

    /**
     * Configures gas station settings for ETH.
     * @summary Edit gas station settings
     * @param {GasStationsApiUpdateGasStationConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GasStationsApi
     */
    public updateGasStationConfiguration(requestParameters: GasStationsApiUpdateGasStationConfigurationRequest, ) {
        return GasStationsApiFp(this.httpClient).updateGasStationConfiguration(requestParameters.gasStationConfiguration, );
    }

    /**
     * Configures gas station settings for a requested asset.
     * @summary Edit gas station settings for an asset
     * @param {GasStationsApiUpdateGasStationConfigurationByAssetIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GasStationsApi
     */
    public updateGasStationConfigurationByAssetId(requestParameters: GasStationsApiUpdateGasStationConfigurationByAssetIdRequest, ) {
        return GasStationsApiFp(this.httpClient).updateGasStationConfigurationByAssetId(requestParameters.gasStationConfiguration, requestParameters.assetId, );
    }
}