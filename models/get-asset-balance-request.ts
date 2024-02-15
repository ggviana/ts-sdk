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
 * @interface GetAssetBalanceRequest
 */
export interface GetAssetBalanceRequest {
    /**
     * The ID of the new asset
     * @type {string}
     * @memberof GetAssetBalanceRequest
     */
    'assetId'?: string;
    /**
     * The smallest vault account ID in the range
     * @type {string}
     * @memberof GetAssetBalanceRequest
     */
    'vaultAccountIdFrom'?: string;
    /**
     * The largest vault account ID in the range
     * @type {string}
     * @memberof GetAssetBalanceRequest
     */
    'vaultAccountIdTo'?: string;
}

