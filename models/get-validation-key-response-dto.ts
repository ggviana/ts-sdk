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
import { ValidationKeyDto } from './validation-key-dto';

/**
 * 
 * @export
 * @interface GetValidationKeyResponseDto
 */
export interface GetValidationKeyResponseDto {
    /**
     * Response object for getting external validation keys.
     * @type {Array<ValidationKeyDto>}
     * @memberof GetValidationKeyResponseDto
     */
    'data': Array<ValidationKeyDto>;
    /**
     * The ID of the next page
     * @type {string}
     * @memberof GetValidationKeyResponseDto
     */
    'next'?: string;
}

