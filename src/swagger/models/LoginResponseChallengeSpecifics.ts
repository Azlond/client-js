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
    Challenge,
    ChallengeFromJSON,
    ChallengeFromJSONTyped,
    ChallengeToJSON,
} from './Challenge';

/**
 * 
 * @export
 * @interface LoginResponseChallengeSpecifics
 */
export interface LoginResponseChallengeSpecifics {
    /**
     * 
     * @type {Challenge}
     * @memberof LoginResponseChallengeSpecifics
     */
    challenge?: Challenge;
}

export function LoginResponseChallengeSpecificsFromJSON(json: any): LoginResponseChallengeSpecifics {
    return LoginResponseChallengeSpecificsFromJSONTyped(json, false);
}

export function LoginResponseChallengeSpecificsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginResponseChallengeSpecifics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'challenge': !exists(json, 'challenge') ? undefined : ChallengeFromJSON(json['challenge']),
    };
}

export function LoginResponseChallengeSpecificsToJSONRecursive(value?: LoginResponseChallengeSpecifics | null, ignoreParent = false): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    return {
        


        'challenge': ChallengeToJSON(value.challenge),
    };
}

export function LoginResponseChallengeSpecificsToJSON(value?: LoginResponseChallengeSpecifics | null): any {
    return LoginResponseChallengeSpecificsToJSONRecursive(value, false);
}
