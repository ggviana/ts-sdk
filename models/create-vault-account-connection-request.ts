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
 * @interface CreateVaultAccountConnectionRequest
 */
export interface CreateVaultAccountConnectionRequest {
    /**
     * The ID of the vault to connect to the dApp.
     * @type {number}
     * @memberof CreateVaultAccountConnectionRequest
     */
    'vaultAccountId': number;
    /**
     * The default fee level. Valid values are `MEDIUM` and `HIGH`.
     * @type {string}
     * @memberof CreateVaultAccountConnectionRequest
     */
    'feeLevel': CreateVaultAccountConnectionRequestFeeLevelEnum;
    /**
     * The WalletConnect uri provided by the dapp.
     * @type {string}
     * @memberof CreateVaultAccountConnectionRequest
     */
    'uri': string;
    /**
     * The IDs of the blockchain networks used in the Web3 connection (Currently required in V1 connections only).
     * @type {Array<string>}
     * @memberof CreateVaultAccountConnectionRequest
     */
    'chainIds'?: Array<string>;
}

export const CreateVaultAccountConnectionRequestFeeLevelEnum = {
    Medium: 'MEDIUM',
    High: 'HIGH'
} as const;

export type CreateVaultAccountConnectionRequestFeeLevelEnum = typeof CreateVaultAccountConnectionRequestFeeLevelEnum[keyof typeof CreateVaultAccountConnectionRequestFeeLevelEnum];


