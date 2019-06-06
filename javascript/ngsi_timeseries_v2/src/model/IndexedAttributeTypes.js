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
import EntityIndexedValues from './EntityIndexedValues';

/**
 * The IndexedAttributeTypes model module.
 * @module model/IndexedAttributeTypes
 * @version 0.1.2
 */
class IndexedAttributeTypes {
  /**
   * Constructs a new <code>IndexedAttributeTypes</code>.
   * @alias module:model/IndexedAttributeTypes
   */
  constructor() {
    IndexedAttributeTypes.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>IndexedAttributeTypes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IndexedAttributeTypes} obj Optional instance to populate.
   * @return {module:model/IndexedAttributeTypes} The populated <code>IndexedAttributeTypes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IndexedAttributeTypes();

      if (data.hasOwnProperty('entities')) {
        obj['entities'] = ApiClient.convertToType(data['entities'], [
          EntityIndexedValues,
        ]);
      }
      if (data.hasOwnProperty('entityType')) {
        obj['entityType'] = ApiClient.convertToType(
          data['entityType'],
          'String'
        );
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/EntityIndexedValues>} entities
 */
IndexedAttributeTypes.prototype['entities'] = undefined;

/**
 * @member {String} entityType
 */
IndexedAttributeTypes.prototype['entityType'] = undefined;

export default IndexedAttributeTypes;
