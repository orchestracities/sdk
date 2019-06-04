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
import BatchQueryExpression from './BatchQueryExpression';

/**
 * The SubscriptionBodySubjectConditions model module.
 * @module model/SubscriptionBodySubjectConditions
 * @version 0.2.2
 */
class SubscriptionBodySubjectConditions {
  /**
   * Constructs a new <code>SubscriptionBodySubjectConditions</code>.
   * @alias module:model/SubscriptionBodySubjectConditions
   */
  constructor() {
    SubscriptionBodySubjectConditions.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>SubscriptionBodySubjectConditions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionBodySubjectConditions} obj Optional instance to populate.
   * @return {module:model/SubscriptionBodySubjectConditions} The populated <code>SubscriptionBodySubjectConditions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SubscriptionBodySubjectConditions();

      if (data.hasOwnProperty('attrs')) {
        obj['attrs'] = ApiClient.convertToType(data['attrs'], ['String']);
      }
      if (data.hasOwnProperty('expression')) {
        obj['expression'] = BatchQueryExpression.constructFromObject(
          data['expression']
        );
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} attrs
 */
SubscriptionBodySubjectConditions.prototype['attrs'] = undefined;

/**
 * @member {module:model/BatchQueryExpression} expression
 */
SubscriptionBodySubjectConditions.prototype['expression'] = undefined;

export default SubscriptionBodySubjectConditions;
