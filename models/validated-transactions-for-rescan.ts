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
 * @interface ValidatedTransactionsForRescan
 */
export interface ValidatedTransactionsForRescan {
    /**
     * Base asset symbol BTC_TEST, ETH_TEST5)
     * @type {string}
     * @memberof ValidatedTransactionsForRescan
     */
    'baseAsset'?: string;
    /**
     * Netowrk protocol of the blockchain (BTC, ETH)
     * @type {string}
     * @memberof ValidatedTransactionsForRescan
     */
    'networkProtocol'?: string;
    /**
     * Blockchain TX hashes
     * @type {Array<string>}
     * @memberof ValidatedTransactionsForRescan
     */
    'txHashes'?: Array<string>;
}

