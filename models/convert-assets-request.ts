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
 * @interface ConvertAssetsRequest
 */
export interface ConvertAssetsRequest {
    /**
     * Name of the source asset (must be in a currency that is supported for conversions in the selected exchange type that corresponds to your exchange ID)
     * @type {string}
     * @memberof ConvertAssetsRequest
     */
    'srcAsset': string;
    /**
     * Name of the destination asset (must be in a currency that is supported for conversions in the selected exchange type that corresponds to your exchange ID)
     * @type {string}
     * @memberof ConvertAssetsRequest
     */
    'destAsset': string;
    /**
     * The amount to transfer (in the currency of the source asset)
     * @type {number}
     * @memberof ConvertAssetsRequest
     */
    'amount': number;
}

