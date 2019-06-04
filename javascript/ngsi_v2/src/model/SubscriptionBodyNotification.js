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
import SubscriptionBodyNotificationHttp from './SubscriptionBodyNotificationHttp';
import SubscriptionBodyNotificationHttpCustom from './SubscriptionBodyNotificationHttpCustom';

/**
 * The SubscriptionBodyNotification model module.
 * @module model/SubscriptionBodyNotification
 * @version 0.2.2
 */
class SubscriptionBodyNotification {
  /**
   * Constructs a new <code>SubscriptionBodyNotification</code>.
   * @alias module:model/SubscriptionBodyNotification
   */
  constructor() {
    SubscriptionBodyNotification.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>SubscriptionBodyNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionBodyNotification} obj Optional instance to populate.
   * @return {module:model/SubscriptionBodyNotification} The populated <code>SubscriptionBodyNotification</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SubscriptionBodyNotification();

      if (data.hasOwnProperty('attrs')) {
        obj.attrs = ApiClient.convertToType(data.attrs, 'String');
      }
      if (data.hasOwnProperty('exceptAttrs')) {
        obj.exceptAttrs = ApiClient.convertToType(data.exceptAttrs, 'String');
      }
      if (data.hasOwnProperty('http')) {
        obj.http = SubscriptionBodyNotificationHttp.constructFromObject(
          data.http
        );
      }
      if (data.hasOwnProperty('httpCustom')) {
        obj.httpCustom = SubscriptionBodyNotificationHttpCustom.constructFromObject(
          data.httpCustom
        );
      }
    }
    return obj;
  }
}

/**
 * @member {String} attrs
 */
SubscriptionBodyNotification.prototype.attrs = undefined;

/**
 * @member {String} exceptAttrs
 */
SubscriptionBodyNotification.prototype.exceptAttrs = undefined;

/**
 * @member {module:model/SubscriptionBodyNotificationHttp} http
 */
SubscriptionBodyNotification.prototype.http = undefined;

/**
 * @member {module:model/SubscriptionBodyNotificationHttpCustom} httpCustom
 */
SubscriptionBodyNotification.prototype.httpCustom = undefined;

export default SubscriptionBodyNotification;