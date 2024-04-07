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
import { Account } from './account';
// May contain unused imports in some cases
// @ts-ignore
import { DisbursementInstruction } from './disbursement-instruction';

/**
 * 
 * @export
 * @interface DisbursementOperationInput
 */
export interface DisbursementOperationInput {
    /**
     * 
     * @type {Account}
     * @memberof DisbursementOperationInput
     */
    'paymentAccount': Account;
    /**
     * 
     * @type {Array<DisbursementInstruction>}
     * @memberof DisbursementOperationInput
     */
    'instructionSet': Array<DisbursementInstruction>;
    /**
     * 
     * @type {string}
     * @memberof DisbursementOperationInput
     */
    'amount'?: string;
}

