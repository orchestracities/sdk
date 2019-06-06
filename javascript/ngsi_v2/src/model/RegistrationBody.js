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
import DataProvided from './DataProvided';
import Provider from './Provider';

/**
 * The RegistrationBody model module.
 * @module model/RegistrationBody
 * @version 0.2.2
 */
class RegistrationBody {
  /**
   * Constructs a new <code>RegistrationBody</code>.
   * @alias module:model/RegistrationBody
   * @param provider {module:model/Provider}
   * @param dataProvided {module:model/DataProvided}
   */
  constructor(provider, dataProvided) {
    RegistrationBody.initialize(this, provider, dataProvided);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, provider, dataProvided) {
    obj['provider'] = provider;
    obj['dataProvided'] = dataProvided;
  }

  /**
   * Constructs a <code>RegistrationBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RegistrationBody} obj Optional instance to populate.
   * @return {module:model/RegistrationBody} The populated <code>RegistrationBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RegistrationBody();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(
          data['description'],
          'String'
        );
      }
      if (data.hasOwnProperty('provider')) {
        obj['provider'] = Provider.constructFromObject(data['provider']);
      }
      if (data.hasOwnProperty('dataProvided')) {
        obj['dataProvided'] = DataProvided.constructFromObject(
          data['dataProvided']
        );
      }
      if (data.hasOwnProperty('expires')) {
        obj['expires'] = ApiClient.convertToType(data['expires'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }
}

/**
 * @member {String} description
 */
RegistrationBody.prototype['description'] = undefined;

/**
 * @member {module:model/Provider} provider
 */
RegistrationBody.prototype['provider'] = undefined;

/**
 * @member {module:model/DataProvided} dataProvided
 */
RegistrationBody.prototype['dataProvided'] = undefined;

/**
 * @member {Date} expires
 */
RegistrationBody.prototype['expires'] = undefined;

/**
 * @member {module:model/RegistrationBody.StatusEnum} status
 */
RegistrationBody.prototype['status'] = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
RegistrationBody['StatusEnum'] = {
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

export default RegistrationBody;
