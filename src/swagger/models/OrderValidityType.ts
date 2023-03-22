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


/**
 * Order validity:
 * - `AUTO`: choose automatically
 * - `GFD`: good for day (*today/current trading day*)
 * - `GTC`: good til canceled
 * - `GTD` good til given date
 * - `GTU` good til ultimo (end of month)
 * @export
 */
export const OrderValidityType = {
    Auto: 'AUTO',
    Gfd: 'GFD',
    Gtc: 'GTC',
    Gtu: 'GTU',
    Gtd: 'GTD'
} as const;
export type OrderValidityType = typeof OrderValidityType[keyof typeof OrderValidityType];


export function OrderValidityTypeFromJSON(json: any): OrderValidityType {
    return OrderValidityTypeFromJSONTyped(json, false);
}

export function OrderValidityTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderValidityType {
    return json as OrderValidityType;
}

export function OrderValidityTypeToJSON(value?: OrderValidityType | null): any {
    return value as any;
}

