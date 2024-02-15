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
import { ErrorSchema } from '../models';
// @ts-ignore
import { Job } from '../models';
// @ts-ignore
import { Task } from '../models';
/**
 * FireblocksPublicOpenapiOtherApi - axios parameter creator
 * @export
 */
export const FireblocksPublicOpenapiOtherApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Stop the given job immediately. If the job is in the ‘Active’ state, the job will be canceled after completing the current task. Vault accounts and Wallets that are already created will not be affected.
         * @summary Cancel a running job
         * @param {string} jobId The requested job id
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelJob: async (jobId: string, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobId' is not null or undefined
            assertParamExists('cancelJob', 'jobId', jobId)
            const localVarPath = `/batch/{jobId}/cancel`
                .replace(`{${"jobId"}}`, encodeURIComponent(String(jobId)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Continue the given paused job.
         * @summary Continue a paused job
         * @param {string} jobId The requested job id
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        continueJob: async (jobId: string, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobId' is not null or undefined
            assertParamExists('continueJob', 'jobId', jobId)
            const localVarPath = `/batch/{jobId}/continue`
                .replace(`{${"jobId"}}`, encodeURIComponent(String(jobId)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get an object describing the given job
         * @summary Get job details
         * @param {string} jobId The requested job id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJob: async (jobId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobId' is not null or undefined
            assertParamExists('getJob', 'jobId', jobId)
            const localVarPath = `/batch/{jobId}`
                .replace(`{${"jobId"}}`, encodeURIComponent(String(jobId)));
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
         * Return a list of tasks for given job
         * @summary Return a list of tasks for given job
         * @param {string} jobId The requested job id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobTasks: async (jobId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobId' is not null or undefined
            assertParamExists('getJobTasks', 'jobId', jobId)
            const localVarPath = `/batch/{jobId}/tasks`
                .replace(`{${"jobId"}}`, encodeURIComponent(String(jobId)));
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
         * Get an array of objects including all active, paused, canceled, and complete jobs in a workspace.
         * @summary Return a list of jobs belonging to tenant
         * @param {number} [fromTime] Start of time range in ms since 1970
         * @param {number} [toTime] End of time range in ms since 1970
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobs: async (fromTime?: number, toTime?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/batch/jobs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fromTime !== undefined) {
                localVarQueryParameter['fromTime'] = fromTime;
            }

            if (toTime !== undefined) {
                localVarQueryParameter['toTime'] = toTime;
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
         * Pause the given job, after the current task is done. A paused job can later be resumed by calling ‘continue’, or canceled.
         * @summary Pause a job
         * @param {string} jobId The requested job id
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pauseJob: async (jobId: string, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobId' is not null or undefined
            assertParamExists('pauseJob', 'jobId', jobId)
            const localVarPath = `/batch/{jobId}/pause`
                .replace(`{${"jobId"}}`, encodeURIComponent(String(jobId)));
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
 * FireblocksPublicOpenapiOtherApi - functional programming interface
 * @export
 */
export const FireblocksPublicOpenapiOtherApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FireblocksPublicOpenapiOtherApiAxiosParamCreator(configuration)
    return {
        /**
         * Stop the given job immediately. If the job is in the ‘Active’ state, the job will be canceled after completing the current task. Vault accounts and Wallets that are already created will not be affected.
         * @summary Cancel a running job
         * @param {string} jobId The requested job id
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancelJob(jobId: string, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cancelJob(jobId, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['FireblocksPublicOpenapiOtherApi.cancelJob']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Continue the given paused job.
         * @summary Continue a paused job
         * @param {string} jobId The requested job id
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async continueJob(jobId: string, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.continueJob(jobId, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['FireblocksPublicOpenapiOtherApi.continueJob']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Get an object describing the given job
         * @summary Get job details
         * @param {string} jobId The requested job id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJob(jobId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Job>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJob(jobId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['FireblocksPublicOpenapiOtherApi.getJob']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Return a list of tasks for given job
         * @summary Return a list of tasks for given job
         * @param {string} jobId The requested job id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJobTasks(jobId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Task>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJobTasks(jobId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['FireblocksPublicOpenapiOtherApi.getJobTasks']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Get an array of objects including all active, paused, canceled, and complete jobs in a workspace.
         * @summary Return a list of jobs belonging to tenant
         * @param {number} [fromTime] Start of time range in ms since 1970
         * @param {number} [toTime] End of time range in ms since 1970
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJobs(fromTime?: number, toTime?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Job>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJobs(fromTime, toTime, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['FireblocksPublicOpenapiOtherApi.getJobs']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Pause the given job, after the current task is done. A paused job can later be resumed by calling ‘continue’, or canceled.
         * @summary Pause a job
         * @param {string} jobId The requested job id
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pauseJob(jobId: string, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pauseJob(jobId, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['FireblocksPublicOpenapiOtherApi.pauseJob']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * FireblocksPublicOpenapiOtherApi - factory interface
 * @export
 */
export const FireblocksPublicOpenapiOtherApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FireblocksPublicOpenapiOtherApiFp(configuration)
    return {
        /**
         * Stop the given job immediately. If the job is in the ‘Active’ state, the job will be canceled after completing the current task. Vault accounts and Wallets that are already created will not be affected.
         * @summary Cancel a running job
         * @param {FireblocksPublicOpenapiOtherApiCancelJobRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelJob(requestParameters: FireblocksPublicOpenapiOtherApiCancelJobRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.cancelJob(requestParameters.jobId, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Continue the given paused job.
         * @summary Continue a paused job
         * @param {FireblocksPublicOpenapiOtherApiContinueJobRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        continueJob(requestParameters: FireblocksPublicOpenapiOtherApiContinueJobRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.continueJob(requestParameters.jobId, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Get an object describing the given job
         * @summary Get job details
         * @param {FireblocksPublicOpenapiOtherApiGetJobRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJob(requestParameters: FireblocksPublicOpenapiOtherApiGetJobRequest, options?: RawAxiosRequestConfig): AxiosPromise<Job> {
            return localVarFp.getJob(requestParameters.jobId, options).then((request) => request(axios, basePath));
        },
        /**
         * Return a list of tasks for given job
         * @summary Return a list of tasks for given job
         * @param {FireblocksPublicOpenapiOtherApiGetJobTasksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobTasks(requestParameters: FireblocksPublicOpenapiOtherApiGetJobTasksRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<Task>> {
            return localVarFp.getJobTasks(requestParameters.jobId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get an array of objects including all active, paused, canceled, and complete jobs in a workspace.
         * @summary Return a list of jobs belonging to tenant
         * @param {FireblocksPublicOpenapiOtherApiGetJobsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobs(requestParameters: FireblocksPublicOpenapiOtherApiGetJobsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<Job>> {
            return localVarFp.getJobs(requestParameters.fromTime, requestParameters.toTime, options).then((request) => request(axios, basePath));
        },
        /**
         * Pause the given job, after the current task is done. A paused job can later be resumed by calling ‘continue’, or canceled.
         * @summary Pause a job
         * @param {FireblocksPublicOpenapiOtherApiPauseJobRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pauseJob(requestParameters: FireblocksPublicOpenapiOtherApiPauseJobRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.pauseJob(requestParameters.jobId, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for cancelJob operation in FireblocksPublicOpenapiOtherApi.
 * @export
 * @interface FireblocksPublicOpenapiOtherApiCancelJobRequest
 */
export interface FireblocksPublicOpenapiOtherApiCancelJobRequest {
    /**
     * The requested job id
     * @type {string}
     * @memberof FireblocksPublicOpenapiOtherApiCancelJob
     */
    readonly jobId: string

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof FireblocksPublicOpenapiOtherApiCancelJob
     */
    readonly idempotencyKey?: string
}

/**
 * Request parameters for continueJob operation in FireblocksPublicOpenapiOtherApi.
 * @export
 * @interface FireblocksPublicOpenapiOtherApiContinueJobRequest
 */
export interface FireblocksPublicOpenapiOtherApiContinueJobRequest {
    /**
     * The requested job id
     * @type {string}
     * @memberof FireblocksPublicOpenapiOtherApiContinueJob
     */
    readonly jobId: string

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof FireblocksPublicOpenapiOtherApiContinueJob
     */
    readonly idempotencyKey?: string
}

/**
 * Request parameters for getJob operation in FireblocksPublicOpenapiOtherApi.
 * @export
 * @interface FireblocksPublicOpenapiOtherApiGetJobRequest
 */
export interface FireblocksPublicOpenapiOtherApiGetJobRequest {
    /**
     * The requested job id
     * @type {string}
     * @memberof FireblocksPublicOpenapiOtherApiGetJob
     */
    readonly jobId: string
}

/**
 * Request parameters for getJobTasks operation in FireblocksPublicOpenapiOtherApi.
 * @export
 * @interface FireblocksPublicOpenapiOtherApiGetJobTasksRequest
 */
export interface FireblocksPublicOpenapiOtherApiGetJobTasksRequest {
    /**
     * The requested job id
     * @type {string}
     * @memberof FireblocksPublicOpenapiOtherApiGetJobTasks
     */
    readonly jobId: string
}

/**
 * Request parameters for getJobs operation in FireblocksPublicOpenapiOtherApi.
 * @export
 * @interface FireblocksPublicOpenapiOtherApiGetJobsRequest
 */
export interface FireblocksPublicOpenapiOtherApiGetJobsRequest {
    /**
     * Start of time range in ms since 1970
     * @type {number}
     * @memberof FireblocksPublicOpenapiOtherApiGetJobs
     */
    readonly fromTime?: number

    /**
     * End of time range in ms since 1970
     * @type {number}
     * @memberof FireblocksPublicOpenapiOtherApiGetJobs
     */
    readonly toTime?: number
}

/**
 * Request parameters for pauseJob operation in FireblocksPublicOpenapiOtherApi.
 * @export
 * @interface FireblocksPublicOpenapiOtherApiPauseJobRequest
 */
export interface FireblocksPublicOpenapiOtherApiPauseJobRequest {
    /**
     * The requested job id
     * @type {string}
     * @memberof FireblocksPublicOpenapiOtherApiPauseJob
     */
    readonly jobId: string

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof FireblocksPublicOpenapiOtherApiPauseJob
     */
    readonly idempotencyKey?: string
}

/**
 * FireblocksPublicOpenapiOtherApi - object-oriented interface
 * @export
 * @class FireblocksPublicOpenapiOtherApi
 * @extends {BaseAPI}
 */
export class FireblocksPublicOpenapiOtherApi extends BaseAPI {
    /**
     * Stop the given job immediately. If the job is in the ‘Active’ state, the job will be canceled after completing the current task. Vault accounts and Wallets that are already created will not be affected.
     * @summary Cancel a running job
     * @param {FireblocksPublicOpenapiOtherApiCancelJobRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FireblocksPublicOpenapiOtherApi
     */
    public cancelJob(requestParameters: FireblocksPublicOpenapiOtherApiCancelJobRequest) {
        return FireblocksPublicOpenapiOtherApiFp(this.configuration).cancelJob(requestParameters.jobId, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Continue the given paused job.
     * @summary Continue a paused job
     * @param {FireblocksPublicOpenapiOtherApiContinueJobRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FireblocksPublicOpenapiOtherApi
     */
    public continueJob(requestParameters: FireblocksPublicOpenapiOtherApiContinueJobRequest) {
        return FireblocksPublicOpenapiOtherApiFp(this.configuration).continueJob(requestParameters.jobId, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Get an object describing the given job
     * @summary Get job details
     * @param {FireblocksPublicOpenapiOtherApiGetJobRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FireblocksPublicOpenapiOtherApi
     */
    public getJob(requestParameters: FireblocksPublicOpenapiOtherApiGetJobRequest) {
        return FireblocksPublicOpenapiOtherApiFp(this.configuration).getJob(requestParameters.jobId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Return a list of tasks for given job
     * @summary Return a list of tasks for given job
     * @param {FireblocksPublicOpenapiOtherApiGetJobTasksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FireblocksPublicOpenapiOtherApi
     */
    public getJobTasks(requestParameters: FireblocksPublicOpenapiOtherApiGetJobTasksRequest) {
        return FireblocksPublicOpenapiOtherApiFp(this.configuration).getJobTasks(requestParameters.jobId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Get an array of objects including all active, paused, canceled, and complete jobs in a workspace.
     * @summary Return a list of jobs belonging to tenant
     * @param {FireblocksPublicOpenapiOtherApiGetJobsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FireblocksPublicOpenapiOtherApi
     */
    public getJobs(requestParameters: FireblocksPublicOpenapiOtherApiGetJobsRequest = {}) {
        return FireblocksPublicOpenapiOtherApiFp(this.configuration).getJobs(requestParameters.fromTime, requestParameters.toTime).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Pause the given job, after the current task is done. A paused job can later be resumed by calling ‘continue’, or canceled.
     * @summary Pause a job
     * @param {FireblocksPublicOpenapiOtherApiPauseJobRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FireblocksPublicOpenapiOtherApi
     */
    public pauseJob(requestParameters: FireblocksPublicOpenapiOtherApiPauseJobRequest) {
        return FireblocksPublicOpenapiOtherApiFp(this.configuration).pauseJob(requestParameters.jobId, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }
}

