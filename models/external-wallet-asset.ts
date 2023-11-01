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
import { ConfigChangeRequestStatus } from './config-change-request-status';
// May contain unused imports in some cases
// @ts-ignore
import { WalletAssetAdditionalInfo } from './wallet-asset-additional-info';

/**
 * 
 * @export
 * @interface ExternalWalletAsset
 */
export interface ExternalWalletAsset {
    /**
     * 
     * @type {string}
     * @memberof ExternalWalletAsset
     */
    'id'?: string;
    /**
     * 
     * @type {ConfigChangeRequestStatus}
     * @memberof ExternalWalletAsset
     */
    'status'?: ConfigChangeRequestStatus;
    /**
     * 
     * @type {string}
     * @memberof ExternalWalletAsset
     */
    'address'?: string;
    /**
     * 
     * @type {string}
     * @memberof ExternalWalletAsset
     */
    'balance'?: string;
    /**
     * 
     * @type {string}
     * @memberof ExternalWalletAsset
     */
    'lockedAmount'?: string;
    /**
     * 
     * @type {string}
     * @memberof ExternalWalletAsset
     */
    'tag'?: string;
    /**
     * 
     * @type {string}
     * @memberof ExternalWalletAsset
     */
    'activationTime'?: string;
    /**
     * 
     * @type {Array<WalletAssetAdditionalInfo>}
     * @memberof ExternalWalletAsset
     */
    'additionalInfo'?: Array<WalletAssetAdditionalInfo>;
}



