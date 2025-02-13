/**
 * ngsi_v2
 * NGSI V2 API RC-2018.07
 *
 * The version of the OpenAPI document: 0.2.2
 * Contact: info@orchestracities.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Entity from './Entity';

/**
 * The BatchUpdate model module.
 * @module model/BatchUpdate
 * @version 0.2.2
 */
class BatchUpdate {
  /**
   * Constructs a new <code>BatchUpdate</code>.
   * @alias module:model/BatchUpdate
   * @param actionType {module:model/BatchUpdate.ActionTypeEnum}
   * @param entities {Array.<module:model/Entity>}
   */
  constructor(actionType, entities) {
    BatchUpdate.initialize(this, actionType, entities);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, actionType, entities) {
    obj['actionType'] = actionType;
    obj['entities'] = entities;
  }

  /**
   * Constructs a <code>BatchUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchUpdate} obj Optional instance to populate.
   * @return {module:model/BatchUpdate} The populated <code>BatchUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BatchUpdate();

      if (data.hasOwnProperty('actionType')) {
        obj['actionType'] = ApiClient.convertToType(
          data['actionType'],
          'String'
        );
      }
      if (data.hasOwnProperty('entities')) {
        obj['entities'] = ApiClient.convertToType(data['entities'], [Entity]);
      }
    }
    return obj;
  }
}

/**
 * @member {module:model/BatchUpdate.ActionTypeEnum} actionType
 */
BatchUpdate.prototype['actionType'] = undefined;

/**
 * @member {Array.<module:model/Entity>} entities
 */
BatchUpdate.prototype['entities'] = undefined;

/**
 * Allowed values for the <code>actionType</code> property.
 * @enum {String}
 * @readonly
 */
BatchUpdate['ActionTypeEnum'] = {
  /**
   * value: "append"
   * @const
   */
  append: 'append',

  /**
   * value: "appendStrict"
   * @const
   */
  appendStrict: 'appendStrict',

  /**
   * value: "update"
   * @const
   */
  update: 'update',

  /**
   * value: "delete"
   * @const
   */
  delete: 'delete',

  /**
   * value: "replace"
   * @const
   */
  replace: 'replace',
};

export default BatchUpdate;
