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

/**
 * The EntityTypeBody model module.
 * @module model/EntityTypeBody
 * @version 0.2.2
 */
class EntityTypeBody {
  /**
   * Constructs a new <code>EntityTypeBody</code>.
   * @alias module:model/EntityTypeBody
   * @param attrs {Object}
   * @param count {Number}
   */
  constructor(attrs, count) {
    EntityTypeBody.initialize(this, attrs, count);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, attrs, count) {
    obj['attrs'] = attrs;
    obj['count'] = count;
  }

  /**
   * Constructs a <code>EntityTypeBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntityTypeBody} obj Optional instance to populate.
   * @return {module:model/EntityTypeBody} The populated <code>EntityTypeBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EntityTypeBody();

      if (data.hasOwnProperty('attrs')) {
        obj['attrs'] = ApiClient.convertToType(data['attrs'], Object);
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
    }
    return obj;
  }
}

/**
 * @member {Object} attrs
 */
EntityTypeBody.prototype['attrs'] = undefined;

/**
 * @member {Number} count
 */
EntityTypeBody.prototype['count'] = undefined;

export default EntityTypeBody;
