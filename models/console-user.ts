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
import { UserRole } from './user-role';
// May contain unused imports in some cases
// @ts-ignore
import { UserStatus } from './user-status';
// May contain unused imports in some cases
// @ts-ignore
import { UserType } from './user-type';

/**
 * 
 * @export
 * @interface ConsoleUser
 */
export interface ConsoleUser {
    /**
     * The unique identifier of the user
     * @type {string}
     * @memberof ConsoleUser
     */
    'id'?: string;
    /**
     * The first name of the user
     * @type {string}
     * @memberof ConsoleUser
     */
    'firstName'?: string;
    /**
     * The last name of the user
     * @type {string}
     * @memberof ConsoleUser
     */
    'lastName'?: string;
    /**
     * The email address of the user
     * @type {string}
     * @memberof ConsoleUser
     */
    'email'?: string;
    /**
     * 
     * @type {UserRole}
     * @memberof ConsoleUser
     */
    'role'?: UserRole;
    /**
     * Whether the user is enabled
     * @type {boolean}
     * @memberof ConsoleUser
     */
    'enabled'?: boolean;
    /**
     * 
     * @type {UserStatus}
     * @memberof ConsoleUser
     */
    'status'?: UserStatus;
    /**
     * 
     * @type {UserType}
     * @memberof ConsoleUser
     */
    'userType'?: UserType;
}



