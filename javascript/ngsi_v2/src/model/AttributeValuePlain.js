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
 * The AttributeValuePlain model module.
 * @module model/AttributeValuePlain
 * @version 0.2.2
 */
class AttributeValuePlain {
  /**
   * Constructs a new <code>AttributeValuePlain</code>.
   * @alias module:model/AttributeValuePlain
   */
  constructor() {
    AttributeValuePlain.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>AttributeValuePlain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttributeValuePlain} obj Optional instance to populate.
   * @return {module:model/AttributeValuePlain} The populated <code>AttributeValuePlain</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AttributeValuePlain();
    }
    return obj;
  }
}

export default AttributeValuePlain;
