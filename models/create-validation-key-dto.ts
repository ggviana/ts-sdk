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



/**
 * 
 * @export
 * @interface CreateValidationKeyDto
 */
export interface CreateValidationKeyDto {
    /**
     * The PEM encoded public key of the validation key being added
     * @type {string}
     * @memberof CreateValidationKeyDto
     */
    'publicKeyPem': string;
    /**
     * The number of days from the date the validation key was added until it expires
     * @type {number}
     * @memberof CreateValidationKeyDto
     */
    'daysTillExpired': number;
}
