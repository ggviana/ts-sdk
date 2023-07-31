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
 * - CREATED - payout instruction set created with all its details - FILE_FOUND - new file found in the FTP - REQUESTED - payout requested with all its details - TRANSLATED - payout instruction account IDs identified and translated - PROCESSING - payout instruction set executed and is processing - SUBMITTED - transactions submitted for payout instructions - FINALIZED - payout finished processing, all transactions processed successfully - INSUFFICIENT_BALANCE - insufficient balance in the payment account (can be a temporary state) - FAILED - one or more of the payout instructions failed 
 * @export
 * @enum {string}
 */

export const PayoutState = {
    Created: 'CREATED',
    FileFound: 'FILE_FOUND',
    Requested: 'REQUESTED',
    Translated: 'TRANSLATED',
    Processing: 'PROCESSING',
    Submitted: 'SUBMITTED',
    Finalized: 'FINALIZED',
    InsufficientBalance: 'INSUFFICIENT_BALANCE',
    Failed: 'FAILED'
} as const;

export type PayoutState = typeof PayoutState[keyof typeof PayoutState];


