/**
 * ngsi_timeseries_v2
 * QuantumLeap API
 *
 * The version of the OpenAPI document: 0.1.2
 * Contact: info@orchestracities.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ErrorResponse model module.
 * @module model/ErrorResponse
 * @version 0.1.2
 */
class ErrorResponse {
  /**
   * Constructs a new <code>ErrorResponse</code>.
   * Default error response contains an error code, and a description
   * @alias module:model/ErrorResponse
   * @param error {String}
   */
  constructor(error) {
    ErrorResponse.initialize(this, error);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, error) {
    obj['error'] = error;
  }

  /**
   * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorResponse} obj Optional instance to populate.
   * @return {module:model/ErrorResponse} The populated <code>ErrorResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ErrorResponse();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(
          data['description'],
          'String'
        );
      }
    }
    return obj;
  }
}

/**
 * @member {String} error
 */
ErrorResponse.prototype['error'] = undefined;

/**
 * @member {String} description
 */
ErrorResponse.prototype['description'] = undefined;

export default ErrorResponse;
