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
import { TravelRuleOwnershipProof } from './travel-rule-ownership-proof';
// May contain unused imports in some cases
// @ts-ignore
import { TravelRulePiiIVMS } from './travel-rule-pii-ivms';
// May contain unused imports in some cases
// @ts-ignore
import { TravelRuleTransactionBlockchainInfo } from './travel-rule-transaction-blockchain-info';

/**
 * 
 * @export
 * @interface TravelRuleCreateTransactionRequest
 */
export interface TravelRuleCreateTransactionRequest {
    /**
     * The VASP ID of the transaction originator
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'originatorVASPdid': string;
    /**
     * The VASP ID of the transaction beneficiary
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'beneficiaryVASPdid': string;
    /**
     * 
     * @type {TravelRulePiiIVMS}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'originator': TravelRulePiiIVMS;
    /**
     * 
     * @type {TravelRulePiiIVMS}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'beneficiary': TravelRulePiiIVMS;
    /**
     * The name of the VASP acting as the beneficiary
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'beneficiaryVASPname'?: string;
    /**
     * 
     * @type {TravelRuleTransactionBlockchainInfo}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'transactionBlockchainInfo'?: TravelRuleTransactionBlockchainInfo;
    /**
     * Encrypted data related to the transaction
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'encrypted'?: string;
    /**
     * The protocol used to perform the travel rule
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'protocol'?: string;
    /**
     * Whether to skip validation of beneficiary data
     * @type {boolean}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'skipBeneficiaryDataValidation'?: boolean;
    /**
     * Whether to check if the transaction is a TRAVEL_RULE in the beneficiary VASP\'s jurisdiction
     * @type {boolean}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'travelRuleBehavior'?: boolean;
    /**
     * 
     * @type {TravelRuleOwnershipProof}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'originatorProof'?: TravelRuleOwnershipProof;
    /**
     * 
     * @type {TravelRuleOwnershipProof}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'beneficiaryProof'?: TravelRuleOwnershipProof;
    /**
     * 
     * @type {TravelRulePiiIVMS}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'pii'?: TravelRulePiiIVMS;
}
