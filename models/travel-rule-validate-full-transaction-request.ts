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
 * @interface TravelRuleValidateFullTransactionRequest
 */
export interface TravelRuleValidateFullTransactionRequest {
    /**
     * 
     * @type {TravelRulePiiIVMS}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'originator': TravelRulePiiIVMS;
    /**
     * 
     * @type {TravelRulePiiIVMS}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'beneficiary': TravelRulePiiIVMS;
    /**
     * The asset involved in the transaction
     * @type {string}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'transactionAsset'?: string;
    /**
     * The amount of the transaction
     * @type {string}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'transactionAmount'?: string;
    /**
     * The DID of the transaction originator
     * @type {string}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'originatorDid'?: string;
    /**
     * The DID of the transaction beneficiary
     * @type {string}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'beneficiaryDid'?: string;
    /**
     * The VASP ID of the transaction originator
     * @type {string}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'originatorVASPdid'?: string;
    /**
     * The VASP ID of the transaction beneficiary
     * @type {string}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'beneficiaryVASPdid'?: string;
    /**
     * The name of the VASP acting as the beneficiary
     * @type {string}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'beneficiaryVASPname'?: string;
    /**
     * 
     * @type {TravelRuleTransactionBlockchainInfo}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'transactionBlockchainInfo'?: TravelRuleTransactionBlockchainInfo;
    /**
     * Encrypted data related to the transaction
     * @type {string}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'encrypted'?: string;
    /**
     * The protocol used to perform the travel rule
     * @type {string}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'protocol'?: string;
    /**
     * The email address where a notification should be sent upon completion of the travel rule
     * @type {string}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'notificationEmail'?: string;
    /**
     * Whether to skip validation of beneficiary data
     * @type {boolean}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'skipBeneficiaryDataValidation'?: boolean;
    /**
     * Whether to check if the transaction is a TRAVEL_RULE in the beneficiary VASP\'s jurisdiction
     * @type {boolean}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'travelRuleBehavior'?: boolean;
    /**
     * 
     * @type {TravelRuleOwnershipProof}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'originatorProof'?: TravelRuleOwnershipProof;
    /**
     * 
     * @type {TravelRuleOwnershipProof}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'beneficiaryProof'?: TravelRuleOwnershipProof;
    /**
     * 
     * @type {TravelRulePiiIVMS}
     * @memberof TravelRuleValidateFullTransactionRequest
     */
    'pii'?: TravelRulePiiIVMS;
}

