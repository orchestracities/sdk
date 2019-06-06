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
import AttributeValues from './AttributeValues';
import IndexArray from './IndexArray';

/**
 * The IndexedEntityValue model module.
 * @module model/IndexedEntityValue
 * @version 0.1.2
 */
class IndexedEntityValue {
  /**
   * Constructs a new <code>IndexedEntityValue</code>.
   * @alias module:model/IndexedEntityValue
   */
  constructor() {
    IndexedEntityValue.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>IndexedEntityValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IndexedEntityValue} obj Optional instance to populate.
   * @return {module:model/IndexedEntityValue} The populated <code>IndexedEntityValue</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IndexedEntityValue();

      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], [
          AttributeValues,
        ]);
      }
      if (data.hasOwnProperty('index')) {
        obj['index'] = IndexArray.constructFromObject(data['index']);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/AttributeValues>} values
 */
IndexedEntityValue.prototype['values'] = undefined;

/**
 * @member {module:model/IndexArray} index
 */
IndexedEntityValue.prototype['index'] = undefined;

export default IndexedEntityValue;
