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
 * @interface SigningKeyDto
 */
export interface SigningKeyDto {
    /**
     * External signing key id set by Fireblocks.
     * @type {string}
     * @memberof SigningKeyDto
     */
    'keyId': string;
    /**
     * The ID, name or label of the key specified on the customer\'s signing device.
     * @type {string}
     * @memberof SigningKeyDto
     */
    'signingDeviceKeyId': string;
    /**
     * PEM encoded public key
     * @type {string}
     * @memberof SigningKeyDto
     */
    'publicKeyPem': string;
    /**
     * Algorithm and curve used for the signature. Can be: ECDSA_SECP256K1 or EDDSA_ED25519
     * @type {string}
     * @memberof SigningKeyDto
     */
    'algorithm': string;
    /**
     * True if the signing key is enabled
     * @type {boolean}
     * @memberof SigningKeyDto
     */
    'enabled': boolean;
    /**
     * Id of the vault account which this key is linked to
     * @type {number}
     * @memberof SigningKeyDto
     */
    'vaultAccountId': number | null;
    /**
     * Id of user that represent agent servers that can sign with the key
     * @type {string}
     * @memberof SigningKeyDto
     */
    'agentUserId': string;
    /**
     * Creation date (timestamp) in milliseconds.
     * @type {number}
     * @memberof SigningKeyDto
     */
    'createdAt': number;
}
