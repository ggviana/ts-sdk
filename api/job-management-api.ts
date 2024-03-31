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
 * JobManagementApi - axios parameter creator
 * @export
 */
export const JobManagementApiAxiosParamCreator = function (configuration?: Configuration) {
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
 * JobManagementApi - functional programming interface
 * @export
 */
export const JobManagementApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = JobManagementApiAxiosParamCreator(configuration)
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
            const operationBasePath = operationServerMap['JobManagementApi.cancelJob']?.[index]?.url;
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
            const operationBasePath = operationServerMap['JobManagementApi.continueJob']?.[index]?.url;
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
            const operationBasePath = operationServerMap['JobManagementApi.getJob']?.[index]?.url;
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
            const operationBasePath = operationServerMap['JobManagementApi.getJobTasks']?.[index]?.url;
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
            const operationBasePath = operationServerMap['JobManagementApi.getJobs']?.[index]?.url;
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
            const operationBasePath = operationServerMap['JobManagementApi.pauseJob']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * JobManagementApi - factory interface
 * @export
 */
export const JobManagementApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = JobManagementApiFp(configuration)
    return {
        /**
         * Stop the given job immediately. If the job is in the ‘Active’ state, the job will be canceled after completing the current task. Vault accounts and Wallets that are already created will not be affected.
         * @summary Cancel a running job
         * @param {JobManagementApiCancelJobRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelJob(requestParameters: JobManagementApiCancelJobRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.cancelJob(requestParameters.jobId, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Continue the given paused job.
         * @summary Continue a paused job
         * @param {JobManagementApiContinueJobRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        continueJob(requestParameters: JobManagementApiContinueJobRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.continueJob(requestParameters.jobId, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Get an object describing the given job
         * @summary Get job details
         * @param {JobManagementApiGetJobRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJob(requestParameters: JobManagementApiGetJobRequest, options?: RawAxiosRequestConfig): AxiosPromise<Job> {
            return localVarFp.getJob(requestParameters.jobId, options).then((request) => request(axios, basePath));
        },
        /**
         * Return a list of tasks for given job
         * @summary Return a list of tasks for given job
         * @param {JobManagementApiGetJobTasksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobTasks(requestParameters: JobManagementApiGetJobTasksRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<Task>> {
            return localVarFp.getJobTasks(requestParameters.jobId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get an array of objects including all active, paused, canceled, and complete jobs in a workspace.
         * @summary Return a list of jobs belonging to tenant
         * @param {JobManagementApiGetJobsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobs(requestParameters: JobManagementApiGetJobsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<Job>> {
            return localVarFp.getJobs(requestParameters.fromTime, requestParameters.toTime, options).then((request) => request(axios, basePath));
        },
        /**
         * Pause the given job, after the current task is done. A paused job can later be resumed by calling ‘continue’, or canceled.
         * @summary Pause a job
         * @param {JobManagementApiPauseJobRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pauseJob(requestParameters: JobManagementApiPauseJobRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.pauseJob(requestParameters.jobId, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for cancelJob operation in JobManagementApi.
 * @export
 * @interface JobManagementApiCancelJobRequest
 */
export interface JobManagementApiCancelJobRequest {
    /**
     * The requested job id
     * @type {string}
     * @memberof JobManagementApiCancelJob
     */
    readonly jobId: string

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof JobManagementApiCancelJob
     */
    readonly idempotencyKey?: string
}

/**
 * Request parameters for continueJob operation in JobManagementApi.
 * @export
 * @interface JobManagementApiContinueJobRequest
 */
export interface JobManagementApiContinueJobRequest {
    /**
     * The requested job id
     * @type {string}
     * @memberof JobManagementApiContinueJob
     */
    readonly jobId: string

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof JobManagementApiContinueJob
     */
    readonly idempotencyKey?: string
}

/**
 * Request parameters for getJob operation in JobManagementApi.
 * @export
 * @interface JobManagementApiGetJobRequest
 */
export interface JobManagementApiGetJobRequest {
    /**
     * The requested job id
     * @type {string}
     * @memberof JobManagementApiGetJob
     */
    readonly jobId: string
}

/**
 * Request parameters for getJobTasks operation in JobManagementApi.
 * @export
 * @interface JobManagementApiGetJobTasksRequest
 */
export interface JobManagementApiGetJobTasksRequest {
    /**
     * The requested job id
     * @type {string}
     * @memberof JobManagementApiGetJobTasks
     */
    readonly jobId: string
}

/**
 * Request parameters for getJobs operation in JobManagementApi.
 * @export
 * @interface JobManagementApiGetJobsRequest
 */
export interface JobManagementApiGetJobsRequest {
    /**
     * Start of time range in ms since 1970
     * @type {number}
     * @memberof JobManagementApiGetJobs
     */
    readonly fromTime?: number

    /**
     * End of time range in ms since 1970
     * @type {number}
     * @memberof JobManagementApiGetJobs
     */
    readonly toTime?: number
}

/**
 * Request parameters for pauseJob operation in JobManagementApi.
 * @export
 * @interface JobManagementApiPauseJobRequest
 */
export interface JobManagementApiPauseJobRequest {
    /**
     * The requested job id
     * @type {string}
     * @memberof JobManagementApiPauseJob
     */
    readonly jobId: string

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof JobManagementApiPauseJob
     */
    readonly idempotencyKey?: string
}

/**
 * JobManagementApi - object-oriented interface
 * @export
 * @class JobManagementApi
 * @extends {BaseAPI}
 */
export class JobManagementApi extends BaseAPI {
    /**
     * Stop the given job immediately. If the job is in the ‘Active’ state, the job will be canceled after completing the current task. Vault accounts and Wallets that are already created will not be affected.
     * @summary Cancel a running job
     * @param {JobManagementApiCancelJobRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobManagementApi
     */
    public cancelJob(requestParameters: JobManagementApiCancelJobRequest) {
        return JobManagementApiFp(this.configuration).cancelJob(requestParameters.jobId, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Continue the given paused job.
     * @summary Continue a paused job
     * @param {JobManagementApiContinueJobRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobManagementApi
     */
    public continueJob(requestParameters: JobManagementApiContinueJobRequest) {
        return JobManagementApiFp(this.configuration).continueJob(requestParameters.jobId, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Get an object describing the given job
     * @summary Get job details
     * @param {JobManagementApiGetJobRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobManagementApi
     */
    public getJob(requestParameters: JobManagementApiGetJobRequest) {
        return JobManagementApiFp(this.configuration).getJob(requestParameters.jobId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Return a list of tasks for given job
     * @summary Return a list of tasks for given job
     * @param {JobManagementApiGetJobTasksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobManagementApi
     */
    public getJobTasks(requestParameters: JobManagementApiGetJobTasksRequest) {
        return JobManagementApiFp(this.configuration).getJobTasks(requestParameters.jobId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Get an array of objects including all active, paused, canceled, and complete jobs in a workspace.
     * @summary Return a list of jobs belonging to tenant
     * @param {JobManagementApiGetJobsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobManagementApi
     */
    public getJobs(requestParameters: JobManagementApiGetJobsRequest = {}) {
        return JobManagementApiFp(this.configuration).getJobs(requestParameters.fromTime, requestParameters.toTime).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Pause the given job, after the current task is done. A paused job can later be resumed by calling ‘continue’, or canceled.
     * @summary Pause a job
     * @param {JobManagementApiPauseJobRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobManagementApi
     */
    public pauseJob(requestParameters: JobManagementApiPauseJobRequest) {
        return JobManagementApiFp(this.configuration).pauseJob(requestParameters.jobId, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }
}

