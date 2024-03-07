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
 * @enum {string}
 */

export const TransferPeerPathType = {
    VaultAccount: 'VAULT_ACCOUNT',
    ExchangeAccount: 'EXCHANGE_ACCOUNT',
    InternalWallet: 'INTERNAL_WALLET',
    ExternalWallet: 'EXTERNAL_WALLET',
    Contract: 'CONTRACT',
    NetworkConnection: 'NETWORK_CONNECTION',
    FiatAccount: 'FIAT_ACCOUNT',
    Compound: 'COMPOUND',
    GasStation: 'GAS_STATION',
    OneTimeAddress: 'ONE_TIME_ADDRESS',
    Unknown: 'UNKNOWN',
    EndUserWallet: 'END_USER_WALLET'
} as const;

export type TransferPeerPathType = typeof TransferPeerPathType[keyof typeof TransferPeerPathType];


