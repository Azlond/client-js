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
    GenericTableRowTextAllOf,
    GenericTableRowTextAllOfFromJSON,
    GenericTableRowTextAllOfFromJSONTyped,
    GenericTableRowTextAllOfToJSON,
} from './GenericTableRowTextAllOf';
import {
    GenericTableRowTextSpecifics,
    GenericTableRowTextSpecificsFromJSON,
    GenericTableRowTextSpecificsFromJSONTyped,
    GenericTableRowTextSpecificsToJSON,
} from './GenericTableRowTextSpecifics';

/**
 * 
 * @export
 * @interface GenericTableRowText
 */
export interface GenericTableRowText {
    /**
     * 
     * @type {string}
     * @memberof GenericTableRowText
     */
    type: GenericTableRowTextTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GenericTableRowText
     */
    text: string;
}


/**
 * @export
 */
export const GenericTableRowTextTypeEnum = {
    Text: 'text'
} as const;
export type GenericTableRowTextTypeEnum = typeof GenericTableRowTextTypeEnum[keyof typeof GenericTableRowTextTypeEnum];


export function GenericTableRowTextFromJSON(json: any): GenericTableRowText {
    return GenericTableRowTextFromJSONTyped(json, false);
}

export function GenericTableRowTextFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericTableRowText {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'text': json['text'],
    };
}

export function GenericTableRowTextToJSONRecursive(value?: GenericTableRowText | null, ignoreParent = false): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    return {
        


        'type': value.type,
        'text': value.text,
    };
}

export function GenericTableRowTextToJSON(value?: GenericTableRowText | null): any {
    return GenericTableRowTextToJSONRecursive(value, false);
}
