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
import { ValidatorDto } from './validator-dto';

/**
 * 
 * @export
 * @interface ProviderDto
 */
export interface ProviderDto {
    /**
     * The ID of the provider
     * @type {string}
     * @memberof ProviderDto
     */
    'id': string;
    /**
     * Name of the provider
     * @type {string}
     * @memberof ProviderDto
     */
    'providerName': string;
    /**
     * An array of objects that includes chain descriptors and the corresponding fee percentages for validators supported by the provider
     * @type {Array<ValidatorDto>}
     * @memberof ProviderDto
     */
    'validators': Array<ValidatorDto>;
    /**
     * URL to the validator\'s icon
     * @type {string}
     * @memberof ProviderDto
     */
    'iconUrl': string;
    /**
     * URL to the terms of service
     * @type {string}
     * @memberof ProviderDto
     */
    'termsOfServiceUrl': string;
    /**
     * Indicates whether the terms of service are approved
     * @type {boolean}
     * @memberof ProviderDto
     */
    'isTermsOfServiceApproved': boolean;
}

