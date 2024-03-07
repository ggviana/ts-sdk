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
import { AmlRegistrationResult } from './aml-registration-result';
// May contain unused imports in some cases
// @ts-ignore
import { ComplianceScreeningResult } from './compliance-screening-result';

/**
 * The result of the Compliance AML/Travel Rule screening.
 * @export
 * @interface ComplianceResult
 */
export interface ComplianceResult {
    /**
     * The end result of the AML screening.
     * @type {Array<ComplianceScreeningResult>}
     * @memberof ComplianceResult
     */
    'aml'?: Array<ComplianceScreeningResult>;
    /**
     * The result of the Travel Rule screening.
     * @type {Array<ComplianceScreeningResult>}
     * @memberof ComplianceResult
     */
    'tr'?: Array<ComplianceScreeningResult>;
    /**
     * The list of all results of the AML screening.
     * @type {Array<ComplianceScreeningResult>}
     * @memberof ComplianceResult
     */
    'amlList'?: Array<ComplianceScreeningResult>;
    /**
     * Status of compliance result screening.
     * @type {string}
     * @memberof ComplianceResult
     */
    'status'?: ComplianceResultStatusEnum;
    /**
     * The results of the AML address registration.
     * @type {Array<AmlRegistrationResult>}
     * @memberof ComplianceResult
     */
    'amlRegistration'?: Array<AmlRegistrationResult>;
}

export const ComplianceResultStatusEnum = {
    Started: 'Started',
    AmlStarted: 'AMLStarted',
    AmlCompleted: 'AMLCompleted',
    AmlFailed: 'AMLFailed',
    AmlinBackground: 'AMLInBackground',
    TrStarted: 'TRStarted',
    TrCompleted: 'TRCompleted',
    TrFailed: 'TRFailed',
    Completed: 'Completed',
    RegistrationStarted: 'RegistrationStarted',
    AmlRegistrationStarted: 'AMLRegistrationStarted',
    AmlRegistrationCompleted: 'AMLRegistrationCompleted',
    TrUpdateStarted: 'TRUpdateStarted',
    TrUpdateCompleted: 'TRUpdateCompleted',
    UpdateCompleted: 'UpdateCompleted',
    IncomingStarted: 'IncomingStarted',
    AmlIncomingStarted: 'AMLIncomingStarted',
    AmlIncomingCompleted: 'AMLIncomingCompleted',
    AmlIncomingFailed: 'AMLIncomingFailed',
    AmlIncomingInBackground: 'AMLIncomingInBackground',
    TrIncomingStarted: 'TRIncomingStarted',
    TrIncomingCompleted: 'TRIncomingCompleted',
    TrIncomingFailed: 'TRIncomingFailed',
    IncomingCompleted: 'IncomingCompleted'
} as const;

export type ComplianceResultStatusEnum = typeof ComplianceResultStatusEnum[keyof typeof ComplianceResultStatusEnum];


