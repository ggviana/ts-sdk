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
import { FunctionDoc } from './function-doc';

/**
 * 
 * @export
 * @interface ContractDoc
 */
export interface ContractDoc {
    /**
     * Is it devdoc or userdoc
     * @type {string}
     * @memberof ContractDoc
     */
    'kind': string;
    /**
     * The description of the contract functions
     * @type {{ [key: string]: FunctionDoc; }}
     * @memberof ContractDoc
     */
    'methods': { [key: string]: FunctionDoc; };
    /**
     * The version of the contract
     * @type {string}
     * @memberof ContractDoc
     */
    'version': string;
    /**
     * A description of the contract
     * @type {string}
     * @memberof ContractDoc
     */
    'details'?: string;
    /**
     * A description of the contract`s events
     * @type {string}
     * @memberof ContractDoc
     */
    'events'?: string;
}
