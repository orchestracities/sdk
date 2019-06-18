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
import IndexArray from './IndexArray';
import ValuesArray from './ValuesArray';

/**
 * The EntityIndexedValues model module.
 * @module model/EntityIndexedValues
 * @version 0.1.2
 */
class EntityIndexedValues {
  /**
   * Constructs a new <code>EntityIndexedValues</code>.
   * @alias module:model/EntityIndexedValues
   */
  constructor() {
    EntityIndexedValues.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>EntityIndexedValues</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntityIndexedValues} obj Optional instance to populate.
   * @return {module:model/EntityIndexedValues} The populated <code>EntityIndexedValues</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EntityIndexedValues();

      if (data.hasOwnProperty('entityId')) {
        obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
      }
      if (data.hasOwnProperty('index')) {
        obj['index'] = IndexArray.constructFromObject(data['index']);
      }
      if (data.hasOwnProperty('values')) {
        obj['values'] = ValuesArray.constructFromObject(data['values']);
      }
    }
    return obj;
  }
}

/**
 * @member {String} entityId
 */
EntityIndexedValues.prototype['entityId'] = undefined;

/**
 * @member {module:model/IndexArray} index
 */
EntityIndexedValues.prototype['index'] = undefined;

/**
 * @member {module:model/ValuesArray} values
 */
EntityIndexedValues.prototype['values'] = undefined;

export default EntityIndexedValues;