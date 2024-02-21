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
 * @interface AddContractAssetRequest
 */
export interface AddContractAssetRequest {
    /**
     * The contract\'s address (or xpub) of the wallet
     * @type {string}
     * @memberof AddContractAssetRequest
     */
    'address': string;
    /**
     * The destination tag, for XRP wallets
     * @type {string}
     * @memberof AddContractAssetRequest
     */
    'tag'?: string;
}
