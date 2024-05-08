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
import { AbiFunction } from './abi-function';

/**
 * 
 * @export
 * @interface ContractAbiResponseDto
 */
export interface ContractAbiResponseDto {
    /**
     * The abi of the contract
     * @type {Array<AbiFunction>}
     * @memberof ContractAbiResponseDto
     */
    'abi': Array<AbiFunction>;
    /**
     * The abi of the implementation contract if exists. Relevant only for proxy patterns
     * @type {Array<AbiFunction>}
     * @memberof ContractAbiResponseDto
     */
    'implementationAbi'?: Array<AbiFunction>;
}

