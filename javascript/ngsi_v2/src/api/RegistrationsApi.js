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
import ErrorResponse from '../model/ErrorResponse';
import Registration from '../model/Registration';
import RegistrationBody from '../model/RegistrationBody';

/**
 * Registrations service.
 * @module api/RegistrationsApi
 * @version 0.2.2
 */
export default class RegistrationsApi {
  /**
   * Constructs a new RegistrationsApi.
   * @alias module:api/RegistrationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the createRegistrations operation.
   * @callback module:api/RegistrationsApi~createRegistrationsCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a new context provider registration. This is typically used for binding context sources as providers of certain data. The registration is represented by a JSON object as described at the beginning of this section. Response: * Successful operation uses 201 Created * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.
   * @param {module:model/RegistrationBody} registrationBody
   * @param {Object} opts Optional parameters
   * @param {String} opts.fiwareService
   * @param {String} opts.fiwareServicePath
   * @param {module:api/RegistrationsApi~createRegistrationsCallback} callback The callback function, accepting three arguments: error, data, response
   */
  createRegistrations(registrationBody, opts, callback) {
    opts = opts || {};
    const postBody = registrationBody;
    // verify the required parameter 'registrationBody' is set
    if (registrationBody === undefined || registrationBody === null) {
      throw new Error(
        "Missing the required parameter 'registrationBody' when calling createRegistrations"
      );
    }

    const pathParams = {};
    const queryParams = {};
    const headerParams = {
      'Fiware-Service': opts.fiwareService,
      'Fiware-ServicePath': opts.fiwareServicePath,
    };
    const formParams = {};

    const authNames = ['ApiKeyAuth', 'BearerAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json'];
    const returnType = null;
    return this.apiClient.callApi(
      '/registrations',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null,
      callback
    );
  }

  /**
   * Callback function to receive the result of the deleteRegistration operation.
   * @callback module:api/RegistrationsApi~deleteRegistrationCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Cancels a context provider registration. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.
   * @param {String} registrationId registration Id.
   * @param {Object} opts Optional parameters
   * @param {String} opts.fiwareService
   * @param {String} opts.fiwareServicePath
   * @param {module:api/RegistrationsApi~deleteRegistrationCallback} callback The callback function, accepting three arguments: error, data, response
   */
  deleteRegistration(registrationId, opts, callback) {
    opts = opts || {};
    const postBody = null;
    // verify the required parameter 'registrationId' is set
    if (registrationId === undefined || registrationId === null) {
      throw new Error(
        "Missing the required parameter 'registrationId' when calling deleteRegistration"
      );
    }

    const pathParams = {
      registrationId,
    };
    const queryParams = {};
    const headerParams = {
      'Fiware-Service': opts.fiwareService,
      'Fiware-ServicePath': opts.fiwareServicePath,
    };
    const formParams = {};

    const authNames = ['ApiKeyAuth', 'BearerAuth'];
    const contentTypes = [];
    const accepts = ['application/json'];
    const returnType = null;
    return this.apiClient.callApi(
      '/registrations/{registrationId}',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null,
      callback
    );
  }

  /**
   * Callback function to receive the result of the retrieveRegistration operation.
   * @callback module:api/RegistrationsApi~retrieveRegistrationCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Registration} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * The response is the registration represented by a JSON object as described at the beginning of this section. Response: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.
   * @param {String} registrationId registration Id.
   * @param {Object} opts Optional parameters
   * @param {String} opts.fiwareService
   * @param {String} opts.fiwareServicePath
   * @param {module:api/RegistrationsApi~retrieveRegistrationCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Registration}
   */
  retrieveRegistration(registrationId, opts, callback) {
    opts = opts || {};
    const postBody = null;
    // verify the required parameter 'registrationId' is set
    if (registrationId === undefined || registrationId === null) {
      throw new Error(
        "Missing the required parameter 'registrationId' when calling retrieveRegistration"
      );
    }

    const pathParams = {
      registrationId,
    };
    const queryParams = {};
    const headerParams = {
      'Fiware-Service': opts.fiwareService,
      'Fiware-ServicePath': opts.fiwareServicePath,
    };
    const formParams = {};

    const authNames = ['ApiKeyAuth', 'BearerAuth'];
    const contentTypes = [];
    const accepts = ['application/json'];
    const returnType = Registration;
    return this.apiClient.callApi(
      '/registrations/{registrationId}',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null,
      callback
    );
  }

  /**
   * Callback function to receive the result of the retrieveRegistrations operation.
   * @callback module:api/RegistrationsApi~retrieveRegistrationsCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Registration>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Lists all the context provider registrations present in the system.
   * @param {Object} opts Optional parameters
   * @param {String} opts.fiwareService
   * @param {String} opts.fiwareServicePath
   * @param {Number} opts.limit Limit the number of types to be retrieved
   * @param {Number} opts.offset Skip a number of records
   * @param {module:model/String} opts.options Options dictionary
   * @param {module:api/RegistrationsApi~retrieveRegistrationsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Registration>}
   */
  retrieveRegistrations(opts, callback) {
    opts = opts || {};
    const postBody = null;

    const pathParams = {};
    const queryParams = {
      limit: opts.limit,
      offset: opts.offset,
      options: opts.options,
    };
    const headerParams = {
      'Fiware-Service': opts.fiwareService,
      'Fiware-ServicePath': opts.fiwareServicePath,
    };
    const formParams = {};

    const authNames = ['ApiKeyAuth', 'BearerAuth'];
    const contentTypes = [];
    const accepts = ['application/json'];
    const returnType = [Registration];
    return this.apiClient.callApi(
      '/registrations',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null,
      callback
    );
  }

  /**
   * Callback function to receive the result of the updateRegistration operation.
   * @callback module:api/RegistrationsApi~updateRegistrationCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a new context provider registration. This is typically used for binding context sources as providers of certain data. The registration is represented by a JSON object as described at the beginning of this section. Response: * Successful operation uses 201 Created * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.
   * @param {String} registrationId registration Id.
   * @param {module:model/RegistrationBody} registrationBody
   * @param {Object} opts Optional parameters
   * @param {String} opts.fiwareService
   * @param {String} opts.fiwareServicePath
   * @param {module:api/RegistrationsApi~updateRegistrationCallback} callback The callback function, accepting three arguments: error, data, response
   */
  updateRegistration(registrationId, registrationBody, opts, callback) {
    opts = opts || {};
    const postBody = registrationBody;
    // verify the required parameter 'registrationId' is set
    if (registrationId === undefined || registrationId === null) {
      throw new Error(
        "Missing the required parameter 'registrationId' when calling updateRegistration"
      );
    }
    // verify the required parameter 'registrationBody' is set
    if (registrationBody === undefined || registrationBody === null) {
      throw new Error(
        "Missing the required parameter 'registrationBody' when calling updateRegistration"
      );
    }

    const pathParams = {
      registrationId,
    };
    const queryParams = {};
    const headerParams = {
      'Fiware-Service': opts.fiwareService,
      'Fiware-ServicePath': opts.fiwareServicePath,
    };
    const formParams = {};

    const authNames = ['ApiKeyAuth', 'BearerAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json'];
    const returnType = null;
    return this.apiClient.callApi(
      '/registrations/{registrationId}',
      'PATCH',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null,
      callback
    );
  }
}
