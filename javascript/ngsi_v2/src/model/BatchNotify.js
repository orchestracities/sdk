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
import Entity from './Entity';

/**
 * The BatchNotify model module.
 * @module model/BatchNotify
 * @version 0.2.2
 */
class BatchNotify {
  /**
   * Constructs a new <code>BatchNotify</code>.
   * @alias module:model/BatchNotify
   * @param subscriptionId {String}
   * @param data {Array.<module:model/Entity>}
   */
  constructor(subscriptionId, data) {
    BatchNotify.initialize(this, subscriptionId, data);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, subscriptionId, data) {
    obj.subscriptionId = subscriptionId;
    obj.data = data;
  }

  /**
   * Constructs a <code>BatchNotify</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchNotify} obj Optional instance to populate.
   * @return {module:model/BatchNotify} The populated <code>BatchNotify</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BatchNotify();

      if (data.hasOwnProperty('subscriptionId')) {
        obj.subscriptionId = ApiClient.convertToType(
          data.subscriptionId,
          'String'
        );
      }
      if (data.hasOwnProperty('data')) {
        obj.data = ApiClient.convertToType(data.data, [Entity]);
      }
    }
    return obj;
  }
}

/**
 * @member {String} subscriptionId
 */
BatchNotify.prototype.subscriptionId = undefined;

/**
 * @member {Array.<module:model/Entity>} data
 */
BatchNotify.prototype.data = undefined;

export default BatchNotify;