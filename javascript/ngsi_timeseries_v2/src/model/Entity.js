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
 * The Entity model module.
 * @module model/Entity
 * @version 0.1.2
 */
class Entity {
  /**
   * Constructs a new <code>Entity</code>.
   * @alias module:model/Entity
   * @param type {String} The NGSI Entity Type.
   * @param id {String} The NGSI Entity Id.
   */
  constructor(type, id) {
    Entity.initialize(this, type, id);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, type, id) {
    obj['type'] = type;
    obj['id'] = id;
  }

  /**
   * Constructs a <code>Entity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Entity} obj Optional instance to populate.
   * @return {module:model/Entity} The populated <code>Entity</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Entity();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }
}

/**
 * The NGSI Entity Type.
 * @member {String} type
 */
Entity.prototype['type'] = undefined;

/**
 * The NGSI Entity Id.
 * @member {String} id
 */
Entity.prototype['id'] = undefined;

export default Entity;
