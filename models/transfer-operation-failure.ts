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
import { TransferOperationFailureData } from './transfer-operation-failure-data';

/**
 * 
 * @export
 * @interface TransferOperationFailure
 */
export interface TransferOperationFailure {
    /**
     * 
     * @type {string}
     * @memberof TransferOperationFailure
     */
    'reason': TransferOperationFailureReasonEnum;
    /**
     * 
     * @type {TransferOperationFailureData}
     * @memberof TransferOperationFailure
     */
    'data'?: TransferOperationFailureData;
}

export const TransferOperationFailureReasonEnum = {
    InvalidAmount: 'INVALID_AMOUNT',
    SubmissionFailed: 'SUBMISSION_FAILED',
    TransactionFailed: 'TRANSACTION_FAILED'
} as const;

export type TransferOperationFailureReasonEnum = typeof TransferOperationFailureReasonEnum[keyof typeof TransferOperationFailureReasonEnum];


