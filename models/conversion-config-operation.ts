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
import { ConfigOperationStatus } from './config-operation-status';
// May contain unused imports in some cases
// @ts-ignore
import { ConversionOperationConfigParams } from './conversion-operation-config-params';
// May contain unused imports in some cases
// @ts-ignore
import { ConversionOperationType } from './conversion-operation-type';
// May contain unused imports in some cases
// @ts-ignore
import { ConversionValidationFailure } from './conversion-validation-failure';

/**
 * 
 * @export
 * @interface ConversionConfigOperation
 */
export interface ConversionConfigOperation {
    /**
     * 
     * @type {string}
     * @memberof ConversionConfigOperation
     */
    'operationId': string;
    /**
     * 
     * @type {ConversionOperationType}
     * @memberof ConversionConfigOperation
     */
    'type': ConversionOperationType;
    /**
     * 
     * @type {ConversionOperationConfigParams}
     * @memberof ConversionConfigOperation
     */
    'params': ConversionOperationConfigParams;
    /**
     * 
     * @type {ConfigOperationStatus}
     * @memberof ConversionConfigOperation
     */
    'status': ConfigOperationStatus;
    /**
     * 
     * @type {ConversionValidationFailure}
     * @memberof ConversionConfigOperation
     */
    'validationFailure'?: ConversionValidationFailure;
}



