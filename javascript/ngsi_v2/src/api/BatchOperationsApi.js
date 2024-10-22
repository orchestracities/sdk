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
import BatchNotify from '../model/BatchNotify';
import BatchQuery from '../model/BatchQuery';
import BatchUpdate from '../model/BatchUpdate';
import Entity from '../model/Entity';
import ErrorResponse from '../model/ErrorResponse';

/**
 * BatchOperations service.
 * @module api/BatchOperationsApi
 * @version 0.2.2
 */
export default class BatchOperationsApi {
  /**
   * Constructs a new BatchOperationsApi.
   * @alias module:api/BatchOperationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the notify operation.
   * @callback module:api/BatchOperationsApi~notifyCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * This operation is intended to consume a notification payload so that all the entity data included by such notification is persisted, overwriting if necessary. This operation is useful when one NGSIv2 endpoint is subscribed to another NGSIv2 endpoint (federation scenarios). The request payload must be an NGSIv2 notification payload. The behaviour must be exactly the same as POST /v2/op/update with actionType equal to append. Response code: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.
   * @param {module:model/BatchNotify} batchNotify
   * @param {Object} opts Optional parameters
   * @param {String} opts.fiwareService When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
   * @param {String} opts.fiwareServicePath Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
   * @param {module:model/String} opts.options Options dictionary
   * @param {module:api/BatchOperationsApi~notifyCallback} callback The callback function, accepting three arguments: error, data, response
   */
  notify(batchNotify, opts, callback) {
    opts = opts || {};
    let postBody = batchNotify;
    // verify the required parameter 'batchNotify' is set
    if (batchNotify === undefined || batchNotify === null) {
      throw new Error(
        "Missing the required parameter 'batchNotify' when calling notify"
      );
    }

    let pathParams = {};
    let queryParams = {
      options: opts['options'],
    };
    let headerParams = {
      'Fiware-Service': opts['fiwareService'],
      'Fiware-ServicePath': opts['fiwareServicePath'],
    };
    let formParams = {};

    let authNames = ['ApiKeyAuth', 'BearerAuth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi(
      '/op/notify',
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
   * Callback function to receive the result of the query operation.
   * @callback module:api/BatchOperationsApi~queryCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Entity>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * The response payload is an Array containing one object per matching entity, or an empty array `[]` if no entities are found. The entities follow the JSON entity Representation format (described in the section [JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)). The payload may contain the following elements (all of them optional): + `entities`: a list of entites to search for. Each element is   represented by a JSON object with the following elements:     + `id` or `idPattern`: Id or pattern of the affected entities.       Both cannot be used at the same time,       but at least one of them must be present.     + `type` or `typePattern`: Type or type pattern of the entities to       search for. Both cannot be used at       the same time. If omitted, it means \"any entity type\". + `attributes`: a list of attribute names to search for. If omitted,   it means \"all attributes\".   Response code: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.
   * @param {module:model/BatchQuery} batchQuery
   * @param {Object} opts Optional parameters
   * @param {String} opts.fiwareService When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
   * @param {String} opts.fiwareServicePath Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
   * @param {Number} opts.limit Limit the number of entities to be retrieved.
   * @param {Number} opts.offset Skip a number of records.
   * @param {String} opts.orderBy Criteria for ordering results. See \"Ordering Results\" section for details.
   * @param {module:model/String} opts.options Options dictionary
   * @param {module:api/BatchOperationsApi~queryCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Entity>}
   */
  query(batchQuery, opts, callback) {
    opts = opts || {};
    let postBody = batchQuery;
    // verify the required parameter 'batchQuery' is set
    if (batchQuery === undefined || batchQuery === null) {
      throw new Error(
        "Missing the required parameter 'batchQuery' when calling query"
      );
    }

    let pathParams = {};
    let queryParams = {
      limit: opts['limit'],
      offset: opts['offset'],
      orderBy: opts['orderBy'],
      options: opts['options'],
    };
    let headerParams = {
      'Fiware-Service': opts['fiwareService'],
      'Fiware-ServicePath': opts['fiwareServicePath'],
    };
    let formParams = {};

    let authNames = ['ApiKeyAuth', 'BearerAuth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = [Entity];
    return this.apiClient.callApi(
      '/op/query',
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
   * Callback function to receive the result of the update operation.
   * @callback module:api/BatchOperationsApi~updateCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * This operation allows to create, update and/or delete several entities in a single batch operation. The payload is an object with two properties: + `actionType`, to specify the kind of update action to do: either   `append`, `appendStrict`, `update`, `delete`. + `entities`, an array of entities, each one specified using the JSON   entity Representation format (described in the section   [JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)).     Response: * Successful operation uses 204 No Content. * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.
   * @param {module:model/BatchUpdate} batchUpdate
   * @param {Object} opts Optional parameters
   * @param {String} opts.fiwareService When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
   * @param {String} opts.fiwareServicePath Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
   * @param {module:model/String} opts.options Options dictionary
   * @param {module:api/BatchOperationsApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
   */
  update(batchUpdate, opts, callback) {
    opts = opts || {};
    let postBody = batchUpdate;
    // verify the required parameter 'batchUpdate' is set
    if (batchUpdate === undefined || batchUpdate === null) {
      throw new Error(
        "Missing the required parameter 'batchUpdate' when calling update"
      );
    }

    let pathParams = {};
    let queryParams = {
      options: opts['options'],
    };
    let headerParams = {
      'Fiware-Service': opts['fiwareService'],
      'Fiware-ServicePath': opts['fiwareServicePath'],
    };
    let formParams = {};

    let authNames = ['ApiKeyAuth', 'BearerAuth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi(
      '/op/update',
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
}
