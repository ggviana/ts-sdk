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
import { AuditorData } from './auditor-data';

/**
 * 
 * @export
 * @interface ContractAttributes
 */
export interface ContractAttributes {
    /**
     * 
     * @type {Array<string>}
     * @memberof ContractAttributes
     */
    'useCases': Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ContractAttributes
     */
    'standards': Array<string>;
    /**
     * 
     * @type {AuditorData}
     * @memberof ContractAttributes
     */
    'auditor': AuditorData;
}
