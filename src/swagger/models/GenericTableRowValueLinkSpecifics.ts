/* tslint:disable */
/* eslint-disable */
/**
 * brokerize
 * The brokerize API allows clients to implement multi-brokerage with a unified interface. For more information, visit brokerize.com
 *
 * The version of the OpenAPI document: 0.0.1-preview
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    GenericTableRowValueLinkValue,
    GenericTableRowValueLinkValueFromJSON,
    GenericTableRowValueLinkValueFromJSONTyped,
    GenericTableRowValueLinkValueToJSON,
} from './GenericTableRowValueLinkValue';

/**
 * 
 * @export
 * @interface GenericTableRowValueLinkSpecifics
 */
export interface GenericTableRowValueLinkSpecifics {
    /**
     * 
     * @type {GenericTableRowValueLinkValue}
     * @memberof GenericTableRowValueLinkSpecifics
     */
    value?: GenericTableRowValueLinkValue;
}

export function GenericTableRowValueLinkSpecificsFromJSON(json: any): GenericTableRowValueLinkSpecifics {
    return GenericTableRowValueLinkSpecificsFromJSONTyped(json, false);
}

export function GenericTableRowValueLinkSpecificsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericTableRowValueLinkSpecifics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : GenericTableRowValueLinkValueFromJSON(json['value']),
    };
}

export function GenericTableRowValueLinkSpecificsToJSONRecursive(value?: GenericTableRowValueLinkSpecifics | null, ignoreParent = false): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    return {
        


        'value': GenericTableRowValueLinkValueToJSON(value.value),
    };
}

export function GenericTableRowValueLinkSpecificsToJSON(value?: GenericTableRowValueLinkSpecifics | null): any {
    return GenericTableRowValueLinkSpecificsToJSONRecursive(value, false);
}
