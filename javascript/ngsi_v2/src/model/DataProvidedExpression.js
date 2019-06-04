/**
 * ngsi_v2
 * NGSI V2 API RC-2018.07
 *
 * The version of the OpenAPI document: 0.2.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DataProvidedExpression model module.
 * @module model/DataProvidedExpression
 * @version 0.2.2
 */
class DataProvidedExpression {
  /**
   * Constructs a new <code>DataProvidedExpression</code>.
   * @alias module:model/DataProvidedExpression
   */
  constructor() {
    DataProvidedExpression.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DataProvidedExpression</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataProvidedExpression} obj Optional instance to populate.
   * @return {module:model/DataProvidedExpression} The populated <code>DataProvidedExpression</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DataProvidedExpression();

      if (data.hasOwnProperty('georel')) {
        obj['georel'] = ApiClient.convertToType(data['georel'], 'String');
      }
      if (data.hasOwnProperty('geometry')) {
        obj['geometry'] = ApiClient.convertToType(data['geometry'], 'String');
      }
      if (data.hasOwnProperty('coords')) {
        obj['coords'] = ApiClient.convertToType(data['coords'], 'String');
      }
    }
    return obj;
  }
}

/**
 * @member {String} georel
 */
DataProvidedExpression.prototype['georel'] = undefined;

/**
 * @member {String} geometry
 */
DataProvidedExpression.prototype['geometry'] = undefined;

/**
 * @member {String} coords
 */
DataProvidedExpression.prototype['coords'] = undefined;

export default DataProvidedExpression;
