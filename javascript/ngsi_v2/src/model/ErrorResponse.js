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
 * The ErrorResponse model module.
 * @module model/ErrorResponse
 * @version 0.2.2
 */
class ErrorResponse {
  /**
   * Constructs a new <code>ErrorResponse</code>.
   * All NGSIv2 server implementations must use the following HTTP response codes and error texts. However, the particular text used for description field is an implementation specific aspect. Error list (HTTP response code in parenthesis):  * &#x60;ParseError&#x60; (400). The incoming JSON payload cannot be parsed. * &#x60;BadRequest&#x60; (400). The incoming request is invalid in this context. * &#x60;NotFound&#x60; (404). The resource (entity, subscription, etc.) referred in the request has not been found. * &#x60;TooManyResults&#x60; (409). There are several results that match with the resource identification used in the request. * &#x60;ContentLengthRequired&#x60; (411). Zero/No Content-Length in PUT/POST/PATCH request. * &#x60;RequestEntityTooLarge&#x60; (413). Payload is too large * &#x60;UnsupportedMediaType&#x60; (415). Request content type is not supported. * &#x60;InvalidModification&#x60; (422). Some piece of information is missing in payload. * &#x60;NotSupportedQuery&#x60; (422). The implementation does not support the query issued. * &#x60;NoResourcesAvailable&#x60; (413). There are no server resources to fulfill the client request. New error codes may be defined in new iterations of this specificatio.\&quot;
   * @alias module:model/ErrorResponse
   * @param error {String}
   */
  constructor(error) {
    ErrorResponse.initialize(this, error);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, error) {
    obj['error'] = error;
  }

  /**
   * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorResponse} obj Optional instance to populate.
   * @return {module:model/ErrorResponse} The populated <code>ErrorResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ErrorResponse();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(
          data['description'],
          'String'
        );
      }
    }
    return obj;
  }
}

/**
 * @member {String} error
 */
ErrorResponse.prototype['error'] = undefined;

/**
 * @member {String} description
 */
ErrorResponse.prototype['description'] = undefined;

export default ErrorResponse;
