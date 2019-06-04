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
import SubscriptionBodyNotification from './SubscriptionBodyNotification';
import SubscriptionBodySubject from './SubscriptionBodySubject';

/**
 * The Subscription model module.
 * @module model/Subscription
 * @version 0.2.2
 */
class Subscription {
  /**
   * Constructs a new <code>Subscription</code>.
   * @alias module:model/Subscription
   * @param id {String}
   * @param subject {module:model/SubscriptionBodySubject}
   * @param notification {module:model/SubscriptionBodyNotification}
   */
  constructor(id, subject, notification) {
    Subscription.initialize(this, id, subject, notification);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, id, subject, notification) {
    obj['id'] = id;
    obj['subject'] = subject;
    obj['notification'] = notification;
  }

  /**
   * Constructs a <code>Subscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Subscription} obj Optional instance to populate.
   * @return {module:model/Subscription} The populated <code>Subscription</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Subscription();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(
          data['description'],
          'String'
        );
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = SubscriptionBodySubject.constructFromObject(
          data['subject']
        );
      }
      if (data.hasOwnProperty('notification')) {
        obj['notification'] = SubscriptionBodyNotification.constructFromObject(
          data['notification']
        );
      }
      if (data.hasOwnProperty('expires')) {
        obj['expires'] = ApiClient.convertToType(data['expires'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('throttling')) {
        obj['throttling'] = ApiClient.convertToType(
          data['throttling'],
          'Number'
        );
      }
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Subscription.prototype['id'] = undefined;

/**
 * @member {String} description
 */
Subscription.prototype['description'] = undefined;

/**
 * @member {module:model/SubscriptionBodySubject} subject
 */
Subscription.prototype['subject'] = undefined;

/**
 * @member {module:model/SubscriptionBodyNotification} notification
 */
Subscription.prototype['notification'] = undefined;

/**
 * @member {Date} expires
 */
Subscription.prototype['expires'] = undefined;

/**
 * @member {module:model/Subscription.StatusEnum} status
 */
Subscription.prototype['status'] = undefined;

/**
 * @member {Number} throttling
 */
Subscription.prototype['throttling'] = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Subscription['StatusEnum'] = {
  /**
   * value: "active"
   * @const
   */
  active: 'active',

  /**
   * value: "inactive"
   * @const
   */
  inactive: 'inactive',
};

export default Subscription;
