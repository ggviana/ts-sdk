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
import { ConversionOperationConfigParams } from './conversion-operation-config-params';
// May contain unused imports in some cases
// @ts-ignore
import { ConversionOperationType } from './conversion-operation-type';

/**
 * 
 * @export
 * @interface CreateConversionConfigOperationRequest
 */
export interface CreateConversionConfigOperationRequest {
    /**
     * 
     * @type {ConversionOperationType}
     * @memberof CreateConversionConfigOperationRequest
     */
    'type': ConversionOperationType;
    /**
     * 
     * @type {ConversionOperationConfigParams}
     * @memberof CreateConversionConfigOperationRequest
     */
    'params': ConversionOperationConfigParams;
}



