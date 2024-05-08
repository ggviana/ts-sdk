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
import { GetWorkspaceStatusResponse } from '../models';
/**
 * WorkspaceStatusBetaApi - axios parameter creator
 * @export
 */
export const WorkspaceStatusBetaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns current workspace status
         * @summary Returns current workspace status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkspaceStatus: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/management/workspace_status`;
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
    }
};

/**
 * WorkspaceStatusBetaApi - functional programming interface
 * @export
 */
export const WorkspaceStatusBetaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WorkspaceStatusBetaApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns current workspace status
         * @summary Returns current workspace status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorkspaceStatus(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetWorkspaceStatusResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkspaceStatus(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['WorkspaceStatusBetaApi.getWorkspaceStatus']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * WorkspaceStatusBetaApi - factory interface
 * @export
 */
export const WorkspaceStatusBetaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WorkspaceStatusBetaApiFp(configuration)
    return {
        /**
         * Returns current workspace status
         * @summary Returns current workspace status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkspaceStatus(options?: RawAxiosRequestConfig): AxiosPromise<GetWorkspaceStatusResponse> {
            return localVarFp.getWorkspaceStatus(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WorkspaceStatusBetaApi - object-oriented interface
 * @export
 * @class WorkspaceStatusBetaApi
 * @extends {BaseAPI}
 */
export class WorkspaceStatusBetaApi extends BaseAPI {
    /**
     * Returns current workspace status
     * @summary Returns current workspace status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkspaceStatusBetaApi
     */
    public getWorkspaceStatus() {
        return WorkspaceStatusBetaApiFp(this.configuration).getWorkspaceStatus().then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }
}

