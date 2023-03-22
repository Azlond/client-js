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
    GenericTableRowValueLinkAllOf,
    GenericTableRowValueLinkAllOfFromJSON,
    GenericTableRowValueLinkAllOfFromJSONTyped,
    GenericTableRowValueLinkAllOfToJSON,
} from './GenericTableRowValueLinkAllOf';
import {
    GenericTableRowValueLinkSpecifics,
    GenericTableRowValueLinkSpecificsFromJSON,
    GenericTableRowValueLinkSpecificsFromJSONTyped,
    GenericTableRowValueLinkSpecificsToJSON,
} from './GenericTableRowValueLinkSpecifics';
import {
    GenericTableRowValueLinkValue,
    GenericTableRowValueLinkValueFromJSON,
    GenericTableRowValueLinkValueFromJSONTyped,
    GenericTableRowValueLinkValueToJSON,
} from './GenericTableRowValueLinkValue';

/**
 * 
 * @export
 * @interface GenericTableRowValueLink
 */
export interface GenericTableRowValueLink {
    /**
     * 
     * @type {string}
     * @memberof GenericTableRowValueLink
     */
    type: GenericTableRowValueLinkTypeEnum;
    /**
     * 
     * @type {GenericTableRowValueLinkValue}
     * @memberof GenericTableRowValueLink
     */
    value: GenericTableRowValueLinkValue;
}


/**
 * @export
 */
export const GenericTableRowValueLinkTypeEnum = {
    Link: 'link'
} as const;
export type GenericTableRowValueLinkTypeEnum = typeof GenericTableRowValueLinkTypeEnum[keyof typeof GenericTableRowValueLinkTypeEnum];


export function GenericTableRowValueLinkFromJSON(json: any): GenericTableRowValueLink {
    return GenericTableRowValueLinkFromJSONTyped(json, false);
}

export function GenericTableRowValueLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericTableRowValueLink {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'value': GenericTableRowValueLinkValueFromJSON(json['value']),
    };
}

export function GenericTableRowValueLinkToJSONRecursive(value?: GenericTableRowValueLink | null, ignoreParent = false): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    return {
        


        'type': value.type,
        'value': GenericTableRowValueLinkValueToJSON(value.value),
    };
}

export function GenericTableRowValueLinkToJSON(value?: GenericTableRowValueLink | null): any {
    return GenericTableRowValueLinkToJSONRecursive(value, false);
}
