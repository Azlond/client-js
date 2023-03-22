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
 * @interface LegalTermsResponse
 */
export interface LegalTermsResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof LegalTermsResponse
     */
    checkboxesHtml: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof LegalTermsResponse
     */
    disclaimerHtml: string;
}

export function LegalTermsResponseFromJSON(json: any): LegalTermsResponse {
    return LegalTermsResponseFromJSONTyped(json, false);
}

export function LegalTermsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LegalTermsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checkboxesHtml': json['checkboxesHtml'],
        'disclaimerHtml': json['disclaimerHtml'],
    };
}

export function LegalTermsResponseToJSONRecursive(value?: LegalTermsResponse | null, ignoreParent = false): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    return {
        


        'checkboxesHtml': value.checkboxesHtml,
        'disclaimerHtml': value.disclaimerHtml,
    };
}

export function LegalTermsResponseToJSON(value?: LegalTermsResponse | null): any {
    return LegalTermsResponseToJSONRecursive(value, false);
}
