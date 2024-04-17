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
 * @interface ConversionValidationFailure
 */
export interface ConversionValidationFailure {
    /**
     * 
     * @type {string}
     * @memberof ConversionValidationFailure
     */
    'reason': ConversionValidationFailureReasonEnum;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ConversionValidationFailure
     */
    'data'?: { [key: string]: any; };
}

export const ConversionValidationFailureReasonEnum = {
    AccountNotFound: 'ACCOUNT_NOT_FOUND',
    AccountTypeNotSupported: 'ACCOUNT_TYPE_NOT_SUPPORTED',
    InsufficientBalance: 'INSUFFICIENT_BALANCE',
    AssetNotFound: 'ASSET_NOT_FOUND',
    AssetsContinuityMismatch: 'ASSETS_CONTINUITY_MISMATCH',
    ExchangeBasketsMismatch: 'EXCHANGE_BASKETS_MISMATCH',
    AccountsContinuityMismatch: 'ACCOUNTS_CONTINUITY_MISMATCH',
    OneTimeAddressContinuityNotAllowed: 'ONE_TIME_ADDRESS_CONTINUITY_NOT_ALLOWED',
    EqualAccountsNotAllowed: 'EQUAL_ACCOUNTS_NOT_ALLOWED',
    EqualAssetsNotAllowed: 'EQUAL_ASSETS_NOT_ALLOWED',
    InvalidAmount: 'INVALID_AMOUNT',
    UnmanagedWalletAsSourceNotAllowed: 'UNMANAGED_WALLET_AS_SOURCE_NOT_ALLOWED',
    ManagedOperationParamsInvalidSchema: 'MANAGED_OPERATION_PARAMS_INVALID_SCHEMA',
    AccountIsNotExchange: 'ACCOUNT_IS_NOT_EXCHANGE',
    UnsupportedTradingMethod: 'UNSUPPORTED_TRADING_METHOD',
    AssetsCanNotConverted: 'ASSETS_CAN_NOT_CONVERTED'
} as const;

export type ConversionValidationFailureReasonEnum = typeof ConversionValidationFailureReasonEnum[keyof typeof ConversionValidationFailureReasonEnum];

