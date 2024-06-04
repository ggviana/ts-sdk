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
 * @interface SmartTransferUpdateTicketTerm
 */
export interface SmartTransferUpdateTicketTerm {
    /**
     * Asset name
     * @type {string}
     * @memberof SmartTransferUpdateTicketTerm
     */
    'asset': string;
    /**
     * Amount
     * @type {string}
     * @memberof SmartTransferUpdateTicketTerm
     */
    'amount': string;
    /**
     * Identifier of the origination Network Profile
     * @type {string}
     * @memberof SmartTransferUpdateTicketTerm
     */
    'fromNetworkId': string;
    /**
     * Identifier of the destination Network Profile
     * @type {string}
     * @memberof SmartTransferUpdateTicketTerm
     */
    'toNetworkId': string;
}

