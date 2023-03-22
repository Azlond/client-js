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
    GenericTableRowValue,
    GenericTableRowValueFromJSON,
    GenericTableRowValueFromJSONTyped,
    GenericTableRowValueToJSON,
} from './GenericTableRowValue';

/**
 * 
 * @export
 * @interface GenericTableRowEntrySpecifics
 */
export interface GenericTableRowEntrySpecifics {
    /**
     * 
     * @type {GenericTableRowValue}
     * @memberof GenericTableRowEntrySpecifics
     */
    value?: GenericTableRowValue;
    /**
     * 
     * @type {boolean}
     * @memberof GenericTableRowEntrySpecifics
     */
    isImportant?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GenericTableRowEntrySpecifics
     */
    caption?: string;
    /**
     * 
     * @type {string}
     * @memberof GenericTableRowEntrySpecifics
     */
    id?: string;
}

export function GenericTableRowEntrySpecificsFromJSON(json: any): GenericTableRowEntrySpecifics {
    return GenericTableRowEntrySpecificsFromJSONTyped(json, false);
}

export function GenericTableRowEntrySpecificsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericTableRowEntrySpecifics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : GenericTableRowValueFromJSON(json['value']),
        'isImportant': !exists(json, 'isImportant') ? undefined : json['isImportant'],
        'caption': !exists(json, 'caption') ? undefined : json['caption'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function GenericTableRowEntrySpecificsToJSONRecursive(value?: GenericTableRowEntrySpecifics | null, ignoreParent = false): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    return {
        


        'value': GenericTableRowValueToJSON(value.value),
        'isImportant': value.isImportant,
        'caption': value.caption,
        'id': value.id,
    };
}

export function GenericTableRowEntrySpecificsToJSON(value?: GenericTableRowEntrySpecifics | null): any {
    return GenericTableRowEntrySpecificsToJSONRecursive(value, false);
}
