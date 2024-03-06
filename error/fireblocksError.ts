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

import { isAxiosError } from "axios";
import { convertToFireblocksResponse, FireblocksResponse } from "../response/fireblocksResponse";

export class FireblocksError<T> {
    public readonly message: string;
    public readonly response?: FireblocksResponse<T>;
    public readonly request?: any;
    constructor(message: string, response?: FireblocksResponse<T>, request?: any) {
        this.message = message;
        this.response = response;
        this.request = request;
    }
}

export function handleError(error: any) {
    if (isAxiosError(error)) {
        const errorMessage = error.response?.data.message || error.message || "No response from server";
        const response = error.response ? convertToFireblocksResponse(error.response) : undefined;
        return new FireblocksError(errorMessage, response, error.request);
    }
    return error;
}
