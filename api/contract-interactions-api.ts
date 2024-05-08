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
import { ContractAbiResponseDto } from '../models';
// @ts-ignore
import { ErrorSchema } from '../models';
// @ts-ignore
import { ParameterWithValueList } from '../models';
// @ts-ignore
import { ReadCallFunctionDto } from '../models';
// @ts-ignore
import { WriteCallFunctionDto } from '../models';
// @ts-ignore
import { WriteCallFunctionResponseDto } from '../models';
/**
 * ContractInteractionsApi - axios parameter creator
 * @export
 */
export const ContractInteractionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Return deployed contract\'s ABI by blockchain native asset id and contract address
         * @summary Return deployed contract\'s ABI
         * @param {string} contractAddress The contract\&#39;s onchain address
         * @param {string} assetId 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeployedContractAbi: async (contractAddress: string, assetId: string, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contractAddress' is not null or undefined
            assertParamExists('getDeployedContractAbi', 'contractAddress', contractAddress)
            // verify required parameter 'assetId' is not null or undefined
            assertParamExists('getDeployedContractAbi', 'assetId', assetId)
            const localVarPath = `/contract_interactions/base_asset_id/{assetId}/contract_address/{contractAddress}/functions`
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

            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
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
         * Call a read function on a deployed contract by blockchain native asset id and contract address
         * @summary Call a read function on a deployed contract
         * @param {ReadCallFunctionDto} readCallFunctionDto 
         * @param {string} contractAddress The contract\&#39;s onchain address
         * @param {string} assetId 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readCallFunction: async (readCallFunctionDto: ReadCallFunctionDto, contractAddress: string, assetId: string, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'readCallFunctionDto' is not null or undefined
            assertParamExists('readCallFunction', 'readCallFunctionDto', readCallFunctionDto)
            // verify required parameter 'contractAddress' is not null or undefined
            assertParamExists('readCallFunction', 'contractAddress', contractAddress)
            // verify required parameter 'assetId' is not null or undefined
            assertParamExists('readCallFunction', 'assetId', assetId)
            const localVarPath = `/contract_interactions/base_asset_id/{assetId}/contract_address/{contractAddress}/functions/read`
                .replace(`{${"contractAddress"}}`, encodeURIComponent(String(contractAddress)))
                .replace(`{${"assetId"}}`, encodeURIComponent(String(assetId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(readCallFunctionDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Call a write function on a deployed contract by blockchain native asset id and contract address. This creates an onchain transaction, thus it is an async operation. It returns a transaction id that can be polled for status check
         * @summary Call a write function on a deployed contract
         * @param {WriteCallFunctionDto} writeCallFunctionDto 
         * @param {string} contractAddress The contract\&#39;s onchain address
         * @param {string} assetId 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        writeCallFunction: async (writeCallFunctionDto: WriteCallFunctionDto, contractAddress: string, assetId: string, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'writeCallFunctionDto' is not null or undefined
            assertParamExists('writeCallFunction', 'writeCallFunctionDto', writeCallFunctionDto)
            // verify required parameter 'contractAddress' is not null or undefined
            assertParamExists('writeCallFunction', 'contractAddress', contractAddress)
            // verify required parameter 'assetId' is not null or undefined
            assertParamExists('writeCallFunction', 'assetId', assetId)
            const localVarPath = `/contract_interactions/base_asset_id/{assetId}/contract_address/{contractAddress}/functions/write`
                .replace(`{${"contractAddress"}}`, encodeURIComponent(String(contractAddress)))
                .replace(`{${"assetId"}}`, encodeURIComponent(String(assetId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(writeCallFunctionDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ContractInteractionsApi - functional programming interface
 * @export
 */
export const ContractInteractionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContractInteractionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Return deployed contract\'s ABI by blockchain native asset id and contract address
         * @summary Return deployed contract\'s ABI
         * @param {string} contractAddress The contract\&#39;s onchain address
         * @param {string} assetId 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDeployedContractAbi(contractAddress: string, assetId: string, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ContractAbiResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDeployedContractAbi(contractAddress, assetId, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContractInteractionsApi.getDeployedContractAbi']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Call a read function on a deployed contract by blockchain native asset id and contract address
         * @summary Call a read function on a deployed contract
         * @param {ReadCallFunctionDto} readCallFunctionDto 
         * @param {string} contractAddress The contract\&#39;s onchain address
         * @param {string} assetId 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readCallFunction(readCallFunctionDto: ReadCallFunctionDto, contractAddress: string, assetId: string, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ParameterWithValueList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.readCallFunction(readCallFunctionDto, contractAddress, assetId, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContractInteractionsApi.readCallFunction']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Call a write function on a deployed contract by blockchain native asset id and contract address. This creates an onchain transaction, thus it is an async operation. It returns a transaction id that can be polled for status check
         * @summary Call a write function on a deployed contract
         * @param {WriteCallFunctionDto} writeCallFunctionDto 
         * @param {string} contractAddress The contract\&#39;s onchain address
         * @param {string} assetId 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async writeCallFunction(writeCallFunctionDto: WriteCallFunctionDto, contractAddress: string, assetId: string, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WriteCallFunctionResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.writeCallFunction(writeCallFunctionDto, contractAddress, assetId, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContractInteractionsApi.writeCallFunction']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * ContractInteractionsApi - factory interface
 * @export
 */
export const ContractInteractionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContractInteractionsApiFp(configuration)
    return {
        /**
         * Return deployed contract\'s ABI by blockchain native asset id and contract address
         * @summary Return deployed contract\'s ABI
         * @param {ContractInteractionsApiGetDeployedContractAbiRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeployedContractAbi(requestParameters: ContractInteractionsApiGetDeployedContractAbiRequest, options?: RawAxiosRequestConfig): AxiosPromise<ContractAbiResponseDto> {
            return localVarFp.getDeployedContractAbi(requestParameters.contractAddress, requestParameters.assetId, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Call a read function on a deployed contract by blockchain native asset id and contract address
         * @summary Call a read function on a deployed contract
         * @param {ContractInteractionsApiReadCallFunctionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readCallFunction(requestParameters: ContractInteractionsApiReadCallFunctionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ParameterWithValueList> {
            return localVarFp.readCallFunction(requestParameters.readCallFunctionDto, requestParameters.contractAddress, requestParameters.assetId, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Call a write function on a deployed contract by blockchain native asset id and contract address. This creates an onchain transaction, thus it is an async operation. It returns a transaction id that can be polled for status check
         * @summary Call a write function on a deployed contract
         * @param {ContractInteractionsApiWriteCallFunctionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        writeCallFunction(requestParameters: ContractInteractionsApiWriteCallFunctionRequest, options?: RawAxiosRequestConfig): AxiosPromise<WriteCallFunctionResponseDto> {
            return localVarFp.writeCallFunction(requestParameters.writeCallFunctionDto, requestParameters.contractAddress, requestParameters.assetId, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getDeployedContractAbi operation in ContractInteractionsApi.
 * @export
 * @interface ContractInteractionsApiGetDeployedContractAbiRequest
 */
export interface ContractInteractionsApiGetDeployedContractAbiRequest {
    /**
     * The contract\&#39;s onchain address
     * @type {string}
     * @memberof ContractInteractionsApiGetDeployedContractAbi
     */
    readonly contractAddress: string

    /**
     * 
     * @type {string}
     * @memberof ContractInteractionsApiGetDeployedContractAbi
     */
    readonly assetId: string

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof ContractInteractionsApiGetDeployedContractAbi
     */
    readonly idempotencyKey?: string
}

/**
 * Request parameters for readCallFunction operation in ContractInteractionsApi.
 * @export
 * @interface ContractInteractionsApiReadCallFunctionRequest
 */
export interface ContractInteractionsApiReadCallFunctionRequest {
    /**
     * 
     * @type {ReadCallFunctionDto}
     * @memberof ContractInteractionsApiReadCallFunction
     */
    readonly readCallFunctionDto: ReadCallFunctionDto

    /**
     * The contract\&#39;s onchain address
     * @type {string}
     * @memberof ContractInteractionsApiReadCallFunction
     */
    readonly contractAddress: string

    /**
     * 
     * @type {string}
     * @memberof ContractInteractionsApiReadCallFunction
     */
    readonly assetId: string

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof ContractInteractionsApiReadCallFunction
     */
    readonly idempotencyKey?: string
}

/**
 * Request parameters for writeCallFunction operation in ContractInteractionsApi.
 * @export
 * @interface ContractInteractionsApiWriteCallFunctionRequest
 */
export interface ContractInteractionsApiWriteCallFunctionRequest {
    /**
     * 
     * @type {WriteCallFunctionDto}
     * @memberof ContractInteractionsApiWriteCallFunction
     */
    readonly writeCallFunctionDto: WriteCallFunctionDto

    /**
     * The contract\&#39;s onchain address
     * @type {string}
     * @memberof ContractInteractionsApiWriteCallFunction
     */
    readonly contractAddress: string

    /**
     * 
     * @type {string}
     * @memberof ContractInteractionsApiWriteCallFunction
     */
    readonly assetId: string

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof ContractInteractionsApiWriteCallFunction
     */
    readonly idempotencyKey?: string
}

/**
 * ContractInteractionsApi - object-oriented interface
 * @export
 * @class ContractInteractionsApi
 * @extends {BaseAPI}
 */
export class ContractInteractionsApi extends BaseAPI {
    /**
     * Return deployed contract\'s ABI by blockchain native asset id and contract address
     * @summary Return deployed contract\'s ABI
     * @param {ContractInteractionsApiGetDeployedContractAbiRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractInteractionsApi
     */
    public getDeployedContractAbi(requestParameters: ContractInteractionsApiGetDeployedContractAbiRequest) {
        return ContractInteractionsApiFp(this.configuration).getDeployedContractAbi(requestParameters.contractAddress, requestParameters.assetId, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Call a read function on a deployed contract by blockchain native asset id and contract address
     * @summary Call a read function on a deployed contract
     * @param {ContractInteractionsApiReadCallFunctionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractInteractionsApi
     */
    public readCallFunction(requestParameters: ContractInteractionsApiReadCallFunctionRequest) {
        return ContractInteractionsApiFp(this.configuration).readCallFunction(requestParameters.readCallFunctionDto, requestParameters.contractAddress, requestParameters.assetId, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Call a write function on a deployed contract by blockchain native asset id and contract address. This creates an onchain transaction, thus it is an async operation. It returns a transaction id that can be polled for status check
     * @summary Call a write function on a deployed contract
     * @param {ContractInteractionsApiWriteCallFunctionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractInteractionsApi
     */
    public writeCallFunction(requestParameters: ContractInteractionsApiWriteCallFunctionRequest) {
        return ContractInteractionsApiFp(this.configuration).writeCallFunction(requestParameters.writeCallFunctionDto, requestParameters.contractAddress, requestParameters.assetId, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }
}

