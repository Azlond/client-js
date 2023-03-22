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
    BrokerMeta,
    BrokerMetaFromJSON,
    BrokerMetaFromJSONTyped,
    BrokerMetaToJSON,
} from './BrokerMeta';

/**
 * 
 * @export
 * @interface GetBrokersResponse
 */
export interface GetBrokersResponse {
    /**
     * 
     * @type {Array<BrokerMeta>}
     * @memberof GetBrokersResponse
     */
    brokers: Array<BrokerMeta>;
}

export function GetBrokersResponseFromJSON(json: any): GetBrokersResponse {
    return GetBrokersResponseFromJSONTyped(json, false);
}

export function GetBrokersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetBrokersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'brokers': ((json['brokers'] as Array<any>).map(BrokerMetaFromJSON)),
    };
}

export function GetBrokersResponseToJSONRecursive(value?: GetBrokersResponse | null, ignoreParent = false): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    return {
        


        'brokers': ((value.brokers as Array<any>).map(BrokerMetaToJSON)),
    };
}

export function GetBrokersResponseToJSON(value?: GetBrokersResponse | null): any {
    return GetBrokersResponseToJSONRecursive(value, false);
}
