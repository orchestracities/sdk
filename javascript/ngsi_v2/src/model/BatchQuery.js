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
import BatchQueryExpression from './BatchQueryExpression';
import QueryPattern from './QueryPattern';

/**
 * The BatchQuery model module.
 * @module model/BatchQuery
 * @version 0.2.2
 */
class BatchQuery {
  /**
   * Constructs a new <code>BatchQuery</code>.
   * @alias module:model/BatchQuery
   */
  constructor() {
    BatchQuery.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>BatchQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchQuery} obj Optional instance to populate.
   * @return {module:model/BatchQuery} The populated <code>BatchQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BatchQuery();

      if (data.hasOwnProperty('entities')) {
        obj.entities = ApiClient.convertToType(data.entities, [QueryPattern]);
      }
      if (data.hasOwnProperty('attrs')) {
        obj.attrs = ApiClient.convertToType(data.attrs, ['String']);
      }
      if (data.hasOwnProperty('expression')) {
        obj.expression = BatchQueryExpression.constructFromObject(
          data.expression
        );
      }
      if (data.hasOwnProperty('metadata')) {
        obj.metadata = ApiClient.convertToType(data.metadata, ['String']);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/QueryPattern>} entities
 */
BatchQuery.prototype.entities = undefined;

/**
 * @member {Array.<String>} attrs
 */
BatchQuery.prototype.attrs = undefined;

/**
 * @member {module:model/BatchQueryExpression} expression
 */
BatchQuery.prototype.expression = undefined;

/**
 * @member {Array.<String>} metadata
 */
BatchQuery.prototype.metadata = undefined;

export default BatchQuery;
