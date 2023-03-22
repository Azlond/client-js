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
 * 
 * @export
 */
export const Direction = {
    Buy: 'buy',
    Sell: 'sell'
} as const;
export type Direction = typeof Direction[keyof typeof Direction];


export function DirectionFromJSON(json: any): Direction {
    return DirectionFromJSONTyped(json, false);
}

export function DirectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Direction {
    return json as Direction;
}

export function DirectionToJSON(value?: Direction | null): any {
    return value as any;
}

