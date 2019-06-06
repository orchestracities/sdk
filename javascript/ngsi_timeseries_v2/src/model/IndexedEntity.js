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
 * The IndexedEntity model module.
 * @module model/IndexedEntity
 * @version 0.1.2
 */
class IndexedEntity {
  /**
   * Constructs a new <code>IndexedEntity</code>.
   * @alias module:model/IndexedEntity
   */
  constructor() {
    IndexedEntity.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>IndexedEntity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IndexedEntity} obj Optional instance to populate.
   * @return {module:model/IndexedEntity} The populated <code>IndexedEntity</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IndexedEntity();

      if (data.hasOwnProperty('index')) {
        obj['index'] = IndexArray.constructFromObject(data['index']);
      }
      if (data.hasOwnProperty('entityId')) {
        obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], [
          AttributeValues,
        ]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/IndexArray} index
 */
IndexedEntity.prototype['index'] = undefined;

/**
 * @member {String} entityId
 */
IndexedEntity.prototype['entityId'] = undefined;

/**
 * @member {Array.<module:model/AttributeValues>} attributes
 */
IndexedEntity.prototype['attributes'] = undefined;

export default IndexedEntity;
