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
import { NetworkChannel } from './network-channel';
// May contain unused imports in some cases
// @ts-ignore
import { NetworkConnectionRoutingPolicy } from './network-connection-routing-policy';
// May contain unused imports in some cases
// @ts-ignore
import { NetworkId } from './network-id';

/**
 * 
 * @export
 * @interface NetworkConnectionResponse
 */
export interface NetworkConnectionResponse {
    /**
     * 
     * @type {string}
     * @memberof NetworkConnectionResponse
     */
    'id': string;
    /**
     * 
     * @type {ConfigChangeRequestStatus}
     * @memberof NetworkConnectionResponse
     */
    'status': ConfigChangeRequestStatus;
    /**
     * 
     * @type {NetworkId}
     * @memberof NetworkConnectionResponse
     */
    'localNetworkId': NetworkId;
    /**
     * 
     * @type {NetworkId}
     * @memberof NetworkConnectionResponse
     */
    'remoteNetworkId': NetworkId;
    /**
     * 
     * @type {NetworkConnectionRoutingPolicy}
     * @memberof NetworkConnectionResponse
     */
    'routingPolicy': NetworkConnectionRoutingPolicy;
    /**
     * 
     * @type {NetworkChannel}
     * @memberof NetworkConnectionResponse
     * @deprecated
     */
    'localChannel'?: NetworkChannel;
    /**
     * 
     * @type {NetworkChannel}
     * @memberof NetworkConnectionResponse
     * @deprecated
     */
    'remoteChannel'?: NetworkChannel;
}



