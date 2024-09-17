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
 * An object containing proof of ownership for the signing key.
 * @export
 * @interface CreateSigningKeyDtoProofOfOwnership
 */
export interface CreateSigningKeyDtoProofOfOwnership {
    /**
     * The message to be signed by the key as proof of ownership. 64 to 1024 bytes in hexadecimal format.
     * @type {string}
     * @memberof CreateSigningKeyDtoProofOfOwnership
     */
    'message': string;
    /**
     * The signature of the message. 64 bytes in hexadecimal format.
     * @type {string}
     * @memberof CreateSigningKeyDtoProofOfOwnership
     */
    'signature': string;
}

