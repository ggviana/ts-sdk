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

import { RequiredError } from "../base";
import { assertParamExists } from "../common";

/**
*
* @throws {RequiredError}
* @export
*/
export const assertParamExistsAndNotEmpty = function (functionName: string, paramName: string, paramValue: string) {
    assertParamExists(functionName, paramName, paramValue);
    if (paramValue === "") {
        throw new RequiredError(paramName, `The required parameter '${paramName}' was empty when calling '${functionName}'.`);
    }
}
