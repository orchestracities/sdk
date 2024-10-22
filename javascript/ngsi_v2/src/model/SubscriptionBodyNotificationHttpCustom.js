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
 * The SubscriptionBodyNotificationHttpCustom model module.
 * @module model/SubscriptionBodyNotificationHttpCustom
 * @version 0.2.2
 */
class SubscriptionBodyNotificationHttpCustom {
  /**
   * Constructs a new <code>SubscriptionBodyNotificationHttpCustom</code>.
   * @alias module:model/SubscriptionBodyNotificationHttpCustom
   */
  constructor() {
    SubscriptionBodyNotificationHttpCustom.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>SubscriptionBodyNotificationHttpCustom</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionBodyNotificationHttpCustom} obj Optional instance to populate.
   * @return {module:model/SubscriptionBodyNotificationHttpCustom} The populated <code>SubscriptionBodyNotificationHttpCustom</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SubscriptionBodyNotificationHttpCustom();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
      if (data.hasOwnProperty('qs')) {
        obj['qs'] = ApiClient.convertToType(data['qs'], Object);
      }
      if (data.hasOwnProperty('headers')) {
        obj['headers'] = ApiClient.convertToType(data['headers'], Object);
      }
      if (data.hasOwnProperty('payload')) {
        obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
      }
    }
    return obj;
  }
}

/**
 * @member {String} url
 */
SubscriptionBodyNotificationHttpCustom.prototype['url'] = undefined;

/**
 * @member {module:model/SubscriptionBodyNotificationHttpCustom.MethodEnum} method
 */
SubscriptionBodyNotificationHttpCustom.prototype['method'] = undefined;

/**
 * @member {Object} qs
 */
SubscriptionBodyNotificationHttpCustom.prototype['qs'] = undefined;

/**
 * @member {Object} headers
 */
SubscriptionBodyNotificationHttpCustom.prototype['headers'] = undefined;

/**
 * @member {String} payload
 */
SubscriptionBodyNotificationHttpCustom.prototype['payload'] = undefined;

/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
SubscriptionBodyNotificationHttpCustom['MethodEnum'] = {
  /**
   * value: "GET"
   * @const
   */
  GET: 'GET',

  /**
   * value: "PUT"
   * @const
   */
  PUT: 'PUT',

  /**
   * value: "POST"
   * @const
   */
  POST: 'POST',

  /**
   * value: "DELETE"
   * @const
   */
  DELETE: 'DELETE',

  /**
   * value: "PATCH"
   * @const
   */
  PATCH: 'PATCH',

  /**
   * value: "HEAD"
   * @const
   */
  HEAD: 'HEAD',

  /**
   * value: "OPTIONS"
   * @const
   */
  OPTIONS: 'OPTIONS',

  /**
   * value: "TRACE"
   * @const
   */
  TRACE: 'TRACE',

  /**
   * value: "CONNECT"
   * @const
   */
  CONNECT: 'CONNECT',
};

export default SubscriptionBodyNotificationHttpCustom;
