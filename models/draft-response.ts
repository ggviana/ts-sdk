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


// May contain unused imports in some cases
// @ts-ignore
import { PolicyMetadata } from './policy-metadata';
// May contain unused imports in some cases
// @ts-ignore
import { PolicyRule } from './policy-rule';

/**
 * Response object for draft operations
 * @export
 * @interface DraftResponse
 */
export interface DraftResponse {
    /**
     * Operation status
     * @type {string}
     * @memberof DraftResponse
     */
    'status': string;
    /**
     * Draft rules
     * @type {Array<PolicyRule>}
     * @memberof DraftResponse
     */
    'rules': Array<PolicyRule>;
    /**
     * Draft unique id
     * @type {string}
     * @memberof DraftResponse
     */
    'draftId': string;
    /**
     * 
     * @type {PolicyMetadata}
     * @memberof DraftResponse
     */
    'metadata': PolicyMetadata;
}

