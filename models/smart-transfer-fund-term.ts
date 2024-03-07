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
 * @interface SmartTransferFundTerm
 */
export interface SmartTransferFundTerm {
    /**
     * Asset name
     * @type {string}
     * @memberof SmartTransferFundTerm
     */
    'asset': string;
    /**
     * Amount
     * @type {string}
     * @memberof SmartTransferFundTerm
     */
    'amount': string;
    /**
     * Id of the network connection used.
     * @type {string}
     * @memberof SmartTransferFundTerm
     */
    'networkConnectionId': string;
    /**
     * Id of the vault that is used as the source of the asset.
     * @type {string}
     * @memberof SmartTransferFundTerm
     */
    'srcId': string;
    /**
     * Source of the asset.
     * @type {string}
     * @memberof SmartTransferFundTerm
     */
    'srcType': string;
    /**
     * Transaction fee
     * @type {string}
     * @memberof SmartTransferFundTerm
     */
    'fee'?: string;
    /**
     * Transaction fee level.
     * @type {string}
     * @memberof SmartTransferFundTerm
     */
    'feeLevel'?: string;
}

