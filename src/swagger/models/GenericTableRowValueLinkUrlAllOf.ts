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
/**
 * 
 * @export
 * @interface GenericTableRowValueLinkUrlAllOf
 */
export interface GenericTableRowValueLinkUrlAllOf {
    /**
     * 
     * @type {string}
     * @memberof GenericTableRowValueLinkUrlAllOf
     */
    type?: GenericTableRowValueLinkUrlAllOfTypeEnum;
}


/**
 * @export
 */
export const GenericTableRowValueLinkUrlAllOfTypeEnum = {
    Url: 'url'
} as const;
export type GenericTableRowValueLinkUrlAllOfTypeEnum = typeof GenericTableRowValueLinkUrlAllOfTypeEnum[keyof typeof GenericTableRowValueLinkUrlAllOfTypeEnum];


export function GenericTableRowValueLinkUrlAllOfFromJSON(json: any): GenericTableRowValueLinkUrlAllOf {
    return GenericTableRowValueLinkUrlAllOfFromJSONTyped(json, false);
}

export function GenericTableRowValueLinkUrlAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericTableRowValueLinkUrlAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function GenericTableRowValueLinkUrlAllOfToJSONRecursive(value?: GenericTableRowValueLinkUrlAllOf | null, ignoreParent = false): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    return {
        


        'type': value.type,
    };
}

export function GenericTableRowValueLinkUrlAllOfToJSON(value?: GenericTableRowValueLinkUrlAllOf | null): any {
    return GenericTableRowValueLinkUrlAllOfToJSONRecursive(value, false);
}
