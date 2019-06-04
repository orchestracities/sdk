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
 * The BatchQueryExpression model module.
 * @module model/BatchQueryExpression
 * @version 0.2.2
 */
class BatchQueryExpression {
  /**
   * Constructs a new <code>BatchQueryExpression</code>.
   * @alias module:model/BatchQueryExpression
   */
  constructor() {
    BatchQueryExpression.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>BatchQueryExpression</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchQueryExpression} obj Optional instance to populate.
   * @return {module:model/BatchQueryExpression} The populated <code>BatchQueryExpression</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BatchQueryExpression();

      if (data.hasOwnProperty('q')) {
        obj.q = ApiClient.convertToType(data.q, 'String');
      }
      if (data.hasOwnProperty('mq')) {
        obj.mq = ApiClient.convertToType(data.mq, 'String');
      }
      if (data.hasOwnProperty('georel')) {
        obj.georel = ApiClient.convertToType(data.georel, 'String');
      }
      if (data.hasOwnProperty('geometry')) {
        obj.geometry = ApiClient.convertToType(data.geometry, 'String');
      }
      if (data.hasOwnProperty('coords')) {
        obj.coords = ApiClient.convertToType(data.coords, 'String');
      }
    }
    return obj;
  }
}

/**
 * @member {String} q
 */
BatchQueryExpression.prototype.q = undefined;

/**
 * @member {String} mq
 */
BatchQueryExpression.prototype.mq = undefined;

/**
 * @member {String} georel
 */
BatchQueryExpression.prototype.georel = undefined;

/**
 * @member {String} geometry
 */
BatchQueryExpression.prototype.geometry = undefined;

/**
 * @member {String} coords
 */
BatchQueryExpression.prototype.coords = undefined;

export default BatchQueryExpression;