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
import { SmartTransferTicket } from './smart-transfer-ticket';

/**
 * 
 * @export
 * @interface SmartTransferTicketResponse
 */
export interface SmartTransferTicketResponse {
    /**
     * Result message
     * @type {string}
     * @memberof SmartTransferTicketResponse
     */
    'message': string | null;
    /**
     * 
     * @type {SmartTransferTicket}
     * @memberof SmartTransferTicketResponse
     */
    'data'?: SmartTransferTicket | null;
}
