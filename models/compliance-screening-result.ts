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
 * @interface ComplianceScreeningResult
 */
export interface ComplianceScreeningResult {
    /**
     * 
     * @type {string}
     * @memberof ComplianceScreeningResult
     */
    'provider'?: string;
    /**
     * The payload of the screening result. The payload is a JSON object that contains the screening result. The payload is different for each screening provider. 
     * @type {object}
     * @memberof ComplianceScreeningResult
     */
    'payload'?: object;
    /**
     * 
     * @type {string}
     * @memberof ComplianceScreeningResult
     */
    'bypassReason'?: string;
    /**
     * 
     * @type {string}
     * @memberof ComplianceScreeningResult
     */
    'screeningStatus'?: ComplianceScreeningResultScreeningStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof ComplianceScreeningResult
     */
    'timestamp'?: number;
}

export const ComplianceScreeningResultScreeningStatusEnum = {
    Completed: 'COMPLETED',
    Pending: 'PENDING',
    Bypassed: 'BYPASSED',
    Failed: 'FAILED',
    Frozen: 'FROZEN'
} as const;

export type ComplianceScreeningResultScreeningStatusEnum = typeof ComplianceScreeningResultScreeningStatusEnum[keyof typeof ComplianceScreeningResultScreeningStatusEnum];

