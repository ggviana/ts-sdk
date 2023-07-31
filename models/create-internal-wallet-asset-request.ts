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
 * @interface CreateInternalWalletAssetRequest
 */
export interface CreateInternalWalletAssetRequest {
    /**
     * The wallet\'s address or, for EOS wallets, the account name
     * @type {string}
     * @memberof CreateInternalWalletAssetRequest
     */
    'address': string;
    /**
     * for XRP wallets, the destination tag; for EOS, the memo; for the fiat providers (BLINC by BCB Group), the Bank Transfer Description
     * @type {string}
     * @memberof CreateInternalWalletAssetRequest
     */
    'tag'?: string;
}
