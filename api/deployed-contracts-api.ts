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
import { DeployedContractResponseDto } from '../models';
// @ts-ignore
import { DeployedContractsPaginatedResponse } from '../models';
// @ts-ignore
import { ErrorSchema } from '../models';
/**
 * DeployedContractsApi - axios parameter creator
 * @export
 */
export const DeployedContractsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Return deployed contract data by blockchain native asset id and contract address
         * @summary Return deployed contract data
         * @param {string} contractAddress The contract\&#39;s onchain address
         * @param {string} assetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeployedContractByAddress: async (contractAddress: string, assetId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contractAddress' is not null or undefined
            assertParamExists('getDeployedContractByAddress', 'contractAddress', contractAddress)
            // verify required parameter 'assetId' is not null or undefined
            assertParamExists('getDeployedContractByAddress', 'assetId', assetId)
            const localVarPath = `/tokenization/contracts/{assetId}/{contractAddress}`
                .replace(`{${"contractAddress"}}`, encodeURIComponent(String(contractAddress)))
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
         * Return deployed contract data by id
         * @summary Return deployed contract data by id
         * @param {string} id The deployed contract data identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeployedContractById: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getDeployedContractById', 'id', id)
            const localVarPath = `/tokenization/contracts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Return a filtered lean representation of the deployed contracts data on all blockchains (paginated)
         * @summary List deployed contracts data
         * @param {string} [pageCursor] Page cursor to get the next page
         * @param {number} [pageSize] Number of items per page, requesting more then max will return max items
         * @param {string} [contractAddress] The contract\&#39;s onchain address
         * @param {string} [assetId] 
         * @param {string} [templateId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeployedContracts: async (pageCursor?: string, pageSize?: number, contractAddress?: string, assetId?: string, templateId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/tokenization/contracts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pageCursor !== undefined) {
                localVarQueryParameter['pageCursor'] = pageCursor;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (contractAddress !== undefined) {
                localVarQueryParameter['contractAddress'] = contractAddress;
            }

            if (assetId !== undefined) {
                localVarQueryParameter['assetId'] = assetId;
            }

            if (templateId !== undefined) {
                localVarQueryParameter['templateId'] = templateId;
            }


    
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
 * DeployedContractsApi - functional programming interface
 * @export
 */
export const DeployedContractsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DeployedContractsApiAxiosParamCreator(configuration)
    return {
        /**
         * Return deployed contract data by blockchain native asset id and contract address
         * @summary Return deployed contract data
         * @param {string} contractAddress The contract\&#39;s onchain address
         * @param {string} assetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDeployedContractByAddress(contractAddress: string, assetId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeployedContractResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDeployedContractByAddress(contractAddress, assetId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DeployedContractsApi.getDeployedContractByAddress']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Return deployed contract data by id
         * @summary Return deployed contract data by id
         * @param {string} id The deployed contract data identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDeployedContractById(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeployedContractResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDeployedContractById(id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DeployedContractsApi.getDeployedContractById']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Return a filtered lean representation of the deployed contracts data on all blockchains (paginated)
         * @summary List deployed contracts data
         * @param {string} [pageCursor] Page cursor to get the next page
         * @param {number} [pageSize] Number of items per page, requesting more then max will return max items
         * @param {string} [contractAddress] The contract\&#39;s onchain address
         * @param {string} [assetId] 
         * @param {string} [templateId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDeployedContracts(pageCursor?: string, pageSize?: number, contractAddress?: string, assetId?: string, templateId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeployedContractsPaginatedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDeployedContracts(pageCursor, pageSize, contractAddress, assetId, templateId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DeployedContractsApi.getDeployedContracts']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * DeployedContractsApi - factory interface
 * @export
 */
export const DeployedContractsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DeployedContractsApiFp(configuration)
    return {
        /**
         * Return deployed contract data by blockchain native asset id and contract address
         * @summary Return deployed contract data
         * @param {DeployedContractsApiGetDeployedContractByAddressRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeployedContractByAddress(requestParameters: DeployedContractsApiGetDeployedContractByAddressRequest, options?: RawAxiosRequestConfig): AxiosPromise<DeployedContractResponseDto> {
            return localVarFp.getDeployedContractByAddress(requestParameters.contractAddress, requestParameters.assetId, options).then((request) => request(axios, basePath));
        },
        /**
         * Return deployed contract data by id
         * @summary Return deployed contract data by id
         * @param {DeployedContractsApiGetDeployedContractByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeployedContractById(requestParameters: DeployedContractsApiGetDeployedContractByIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<DeployedContractResponseDto> {
            return localVarFp.getDeployedContractById(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Return a filtered lean representation of the deployed contracts data on all blockchains (paginated)
         * @summary List deployed contracts data
         * @param {DeployedContractsApiGetDeployedContractsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeployedContracts(requestParameters: DeployedContractsApiGetDeployedContractsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DeployedContractsPaginatedResponse> {
            return localVarFp.getDeployedContracts(requestParameters.pageCursor, requestParameters.pageSize, requestParameters.contractAddress, requestParameters.assetId, requestParameters.templateId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getDeployedContractByAddress operation in DeployedContractsApi.
 * @export
 * @interface DeployedContractsApiGetDeployedContractByAddressRequest
 */
export interface DeployedContractsApiGetDeployedContractByAddressRequest {
    /**
     * The contract\&#39;s onchain address
     * @type {string}
     * @memberof DeployedContractsApiGetDeployedContractByAddress
     */
    readonly contractAddress: string

    /**
     * 
     * @type {string}
     * @memberof DeployedContractsApiGetDeployedContractByAddress
     */
    readonly assetId: string
}

/**
 * Request parameters for getDeployedContractById operation in DeployedContractsApi.
 * @export
 * @interface DeployedContractsApiGetDeployedContractByIdRequest
 */
export interface DeployedContractsApiGetDeployedContractByIdRequest {
    /**
     * The deployed contract data identifier
     * @type {string}
     * @memberof DeployedContractsApiGetDeployedContractById
     */
    readonly id: string
}

/**
 * Request parameters for getDeployedContracts operation in DeployedContractsApi.
 * @export
 * @interface DeployedContractsApiGetDeployedContractsRequest
 */
export interface DeployedContractsApiGetDeployedContractsRequest {
    /**
     * Page cursor to get the next page
     * @type {string}
     * @memberof DeployedContractsApiGetDeployedContracts
     */
    readonly pageCursor?: string

    /**
     * Number of items per page, requesting more then max will return max items
     * @type {number}
     * @memberof DeployedContractsApiGetDeployedContracts
     */
    readonly pageSize?: number

    /**
     * The contract\&#39;s onchain address
     * @type {string}
     * @memberof DeployedContractsApiGetDeployedContracts
     */
    readonly contractAddress?: string

    /**
     * 
     * @type {string}
     * @memberof DeployedContractsApiGetDeployedContracts
     */
    readonly assetId?: string

    /**
     * 
     * @type {string}
     * @memberof DeployedContractsApiGetDeployedContracts
     */
    readonly templateId?: string
}

/**
 * DeployedContractsApi - object-oriented interface
 * @export
 * @class DeployedContractsApi
 * @extends {BaseAPI}
 */
export class DeployedContractsApi extends BaseAPI {
    /**
     * Return deployed contract data by blockchain native asset id and contract address
     * @summary Return deployed contract data
     * @param {DeployedContractsApiGetDeployedContractByAddressRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeployedContractsApi
     */
    public getDeployedContractByAddress(requestParameters: DeployedContractsApiGetDeployedContractByAddressRequest) {
        return DeployedContractsApiFp(this.configuration).getDeployedContractByAddress(requestParameters.contractAddress, requestParameters.assetId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Return deployed contract data by id
     * @summary Return deployed contract data by id
     * @param {DeployedContractsApiGetDeployedContractByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeployedContractsApi
     */
    public getDeployedContractById(requestParameters: DeployedContractsApiGetDeployedContractByIdRequest) {
        return DeployedContractsApiFp(this.configuration).getDeployedContractById(requestParameters.id).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Return a filtered lean representation of the deployed contracts data on all blockchains (paginated)
     * @summary List deployed contracts data
     * @param {DeployedContractsApiGetDeployedContractsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeployedContractsApi
     */
    public getDeployedContracts(requestParameters: DeployedContractsApiGetDeployedContractsRequest = {}) {
        return DeployedContractsApiFp(this.configuration).getDeployedContracts(requestParameters.pageCursor, requestParameters.pageSize, requestParameters.contractAddress, requestParameters.assetId, requestParameters.templateId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }
}

