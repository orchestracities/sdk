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
import Entity from '../model/Entity';
import ErrorResponse from '../model/ErrorResponse';

/**
 * Entities service.
 * @module api/EntitiesApi
 * @version 0.2.2
 */
export default class EntitiesApi {
  /**
   * Constructs a new EntitiesApi.
   * @alias module:api/EntitiesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the createEntity operation.
   * @callback module:api/EntitiesApi~createEntityCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * The payload is an object representing the entity to be created. The object follows the JSON entity Representation format (described in a [JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable) section). Response: * Successful operation uses 201 Created or 204 No Content (if upsert   option is used). Response includes a `Location` header with the URL   of the created entity. * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.
   * @param {Object.<String, {String: Object}>} requestBody
   * @param {Object} opts Optional parameters
   * @param {String} opts.fiwareService When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
   * @param {String} opts.fiwareServicePath Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
   * @param {module:model/String} opts.options Options dictionary
   * @param {module:api/EntitiesApi~createEntityCallback} callback The callback function, accepting three arguments: error, data, response
   */
  createEntity(requestBody, opts, callback) {
    opts = opts || {};
    let postBody = requestBody;
    // verify the required parameter 'requestBody' is set
    if (requestBody === undefined || requestBody === null) {
      throw new Error(
        "Missing the required parameter 'requestBody' when calling createEntity"
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
      '/entities',
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
   * Callback function to receive the result of the listEntities operation.
   * @callback module:api/EntitiesApi~listEntitiesCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Entity>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves a list of entities that match different criteria by id, type, pattern matching (either id or type) and/or those which match a query or geographical query (see [Simple Query Language](https://fiware.github.io/specifications/ngsiv2/stable) and [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable)). A given entity has to match all the criteria to be retrieved (i.e., the criteria is combined in a logical AND way). Note that pattern matching query parameters are incompatible (i.e. mutually exclusive) with their corresponding exact matching parameters, i.e. `idPattern` with `id` and `typePattern` with `type`. The response payload is an array containing one object per matching entity. Each entity follows the JSON entity Representation format (described in [JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable) section). Response code: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload.   See subsection on   [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.
   * @param {Object} opts Optional parameters
   * @param {String} opts.fiwareService When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
   * @param {String} opts.fiwareServicePath Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
   * @param {String} opts.id A comma-separated list of elements. Retrieve entities whose ID matches one of the elements in the list. Incompatible with `idPattern`.
   * @param {String} opts.type comma-separated list of elements. Retrieve entities whose type matches one of the elements in the list. Incompatible with `typePattern`.
   * @param {String} opts.idPattern A correctly formated regular expression. Retrieve entities whose ID matches the regular expression. Incompatible with `id`.
   * @param {String} opts.typePattern A correctly formated regular expression. Retrieve entities whose type matches the regular expression. Incompatible with `type`.
   * @param {String} opts.q A query expression, composed of a list of statements separated by `;`, i.e., q=statement;statements;statement. See [Simple Query Language specification](https://fiware.github.io/specifications/ngsiv2/stable).
   * @param {String} opts.mq A query expression for attribute metadata, composed of a list of statements separated by `;`, i.e., mq=statement1;statement2;statement3. See [Simple Query Language specification](https://fiware.github.io/specifications/ngsiv2/stable).
   * @param {String} opts.georel Spatial relationship between matching entities and a reference shape. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable).
   * @param {String} opts.geometry Geografical area to which the query is restricted. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable).
   * @param {String} opts.coords List of latitude-longitude pairs of coordinates separated by `;`. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable).
   * @param {Number} opts.limit Limits the number of entities to be retrieved
   * @param {Number} opts.offset Establishes the offset from where entities are retrieved
   * @param {String} opts.attrs Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order.
   * @param {String} opts.metadata A list of metadata names to include in the response.
   * @param {String} opts.orderBy Criteria for ordering results. See [Ordering Results](https://fiware.github.io/specifications/ngsiv2/stable) section for details.
   * @param {module:model/String} opts.options Options dictionary
   * @param {module:api/EntitiesApi~listEntitiesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Entity>}
   */
  listEntities(opts, callback) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {};
    let queryParams = {
      id: opts['id'],
      type: opts['type'],
      idPattern: opts['idPattern'],
      typePattern: opts['typePattern'],
      q: opts['q'],
      mq: opts['mq'],
      georel: opts['georel'],
      geometry: opts['geometry'],
      coords: opts['coords'],
      limit: opts['limit'],
      offset: opts['offset'],
      attrs: opts['attrs'],
      metadata: opts['metadata'],
      orderBy: opts['orderBy'],
      options: opts['options'],
    };
    let headerParams = {
      'Fiware-Service': opts['fiwareService'],
      'Fiware-ServicePath': opts['fiwareServicePath'],
    };
    let formParams = {};

    let authNames = ['ApiKeyAuth', 'BearerAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = [Entity];
    return this.apiClient.callApi(
      '/entities',
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
   * Callback function to receive the result of the removeEntity operation.
   * @callback module:api/EntitiesApi~removeEntityCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete the entity. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.
   * @param {String} entityId Id of the entity to be deleted
   * @param {Object} opts Optional parameters
   * @param {String} opts.fiwareService When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
   * @param {String} opts.fiwareServicePath Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
   * @param {String} opts.type Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
   * @param {module:api/EntitiesApi~removeEntityCallback} callback The callback function, accepting three arguments: error, data, response
   */
  removeEntity(entityId, opts, callback) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'entityId' is set
    if (entityId === undefined || entityId === null) {
      throw new Error(
        "Missing the required parameter 'entityId' when calling removeEntity"
      );
    }

    let pathParams = {
      entityId: entityId,
    };
    let queryParams = {
      type: opts['type'],
    };
    let headerParams = {
      'Fiware-Service': opts['fiwareService'],
      'Fiware-ServicePath': opts['fiwareServicePath'],
    };
    let formParams = {};

    let authNames = ['ApiKeyAuth', 'BearerAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi(
      '/entities/{entityId}',
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
   * Callback function to receive the result of the replaceAllEntityAttributes operation.
   * @callback module:api/EntitiesApi~replaceAllEntityAttributesCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * The request payload is an object representing the new entity attributes. The object follows the JSON entity Representation format (described in a [JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable) above), except that `id` and `type` are not allowed. The attributes previously existing in the entity are removed and replaced by the ones in the request. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.
   * @param {String} entityId Id of the entity in question.
   * @param {Object} body
   * @param {Object} opts Optional parameters
   * @param {String} opts.fiwareService When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
   * @param {String} opts.fiwareServicePath Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
   * @param {String} opts.type Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
   * @param {module:model/String} opts.options Operations options
   * @param {module:api/EntitiesApi~replaceAllEntityAttributesCallback} callback The callback function, accepting three arguments: error, data, response
   */
  replaceAllEntityAttributes(entityId, body, opts, callback) {
    opts = opts || {};
    let postBody = body;
    // verify the required parameter 'entityId' is set
    if (entityId === undefined || entityId === null) {
      throw new Error(
        "Missing the required parameter 'entityId' when calling replaceAllEntityAttributes"
      );
    }
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling replaceAllEntityAttributes"
      );
    }

    let pathParams = {
      entityId: entityId,
    };
    let queryParams = {
      type: opts['type'],
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
      '/entities/{entityId}/attrs',
      'PUT',
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
   * Callback function to receive the result of the retrieveEntity operation.
   * @callback module:api/EntitiesApi~retrieveEntityCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Entity} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * The response is an object representing the entity identified by the ID. The object follows the JSON entity Representation format (described in a [JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable) section). This operation must return one entity element only, but there may be more than one entity with the same ID (e.g. entities with same ID but different types). In such case, an error message is returned, with the HTTP status code set to 409 Conflict. Response: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.
   * @param {String} entityId Id of the entity to be retrieved
   * @param {Object} opts Optional parameters
   * @param {String} opts.fiwareService When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
   * @param {String} opts.fiwareServicePath Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
   * @param {String} opts.type Entity type, to avoid ambiguity in case there are several entities with the same entity id.
   * @param {String} opts.attrs Comma-separated list of attribute names whose data must be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response.
   * @param {String} opts.metadata A list of metadata names to include in the response. See \"Filtering out attributes and metadata\" section for more detail.
   * @param {module:model/String} opts.options Options dictionary
   * @param {module:api/EntitiesApi~retrieveEntityCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Entity}
   */
  retrieveEntity(entityId, opts, callback) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'entityId' is set
    if (entityId === undefined || entityId === null) {
      throw new Error(
        "Missing the required parameter 'entityId' when calling retrieveEntity"
      );
    }

    let pathParams = {
      entityId: entityId,
    };
    let queryParams = {
      type: opts['type'],
      attrs: opts['attrs'],
      metadata: opts['metadata'],
      options: opts['options'],
    };
    let headerParams = {
      'Fiware-Service': opts['fiwareService'],
      'Fiware-ServicePath': opts['fiwareServicePath'],
    };
    let formParams = {};

    let authNames = ['ApiKeyAuth', 'BearerAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = Entity;
    return this.apiClient.callApi(
      '/entities/{entityId}',
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
   * Callback function to receive the result of the retrieveEntityAttributes operation.
   * @callback module:api/EntitiesApi~retrieveEntityAttributesCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * This request is similar to retreiving the whole entity, however this one omits the `id` and `type` fields. Just like the general request of getting an entire entity, this operation must return only one entity element. If more than one entity with the same ID is found (e.g. entities with same ID but different type), an error message is returned, with the HTTP status code set to 409 Conflict. Response: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.
   * @param {String} entityId Id of the entity to be retrieved
   * @param {Object} opts Optional parameters
   * @param {String} opts.fiwareService When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
   * @param {String} opts.fiwareServicePath Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
   * @param {String} opts.type Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
   * @param {String} opts.attrs Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response.
   * @param {String} opts.metadata A list of metadata names to include in the response. See [Filtering out attributes and metadata](https://fiware.github.io/specifications/ngsiv2/stable) section for more detail.
   * @param {module:model/String} opts.options Options dictionary
   * @param {module:api/EntitiesApi~retrieveEntityAttributesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */
  retrieveEntityAttributes(entityId, opts, callback) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'entityId' is set
    if (entityId === undefined || entityId === null) {
      throw new Error(
        "Missing the required parameter 'entityId' when calling retrieveEntityAttributes"
      );
    }

    let pathParams = {
      entityId: entityId,
    };
    let queryParams = {
      type: opts['type'],
      attrs: opts['attrs'],
      metadata: opts['metadata'],
      options: opts['options'],
    };
    let headerParams = {
      'Fiware-Service': opts['fiwareService'],
      'Fiware-ServicePath': opts['fiwareServicePath'],
    };
    let formParams = {};

    let authNames = ['ApiKeyAuth', 'BearerAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = Object;
    return this.apiClient.callApi(
      '/entities/{entityId}/attrs',
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
   * Callback function to receive the result of the updateExistingEntityAttributes operation.
   * @callback module:api/EntitiesApi~updateExistingEntityAttributesCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * The request payload is an object representing the attributes to update. The object follows the JSON entity Representation format (described in [JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)  section), except that `id` and `type` are not allowed. The entity attributes are updated with the ones in the payload. In addition to that, if one or more attributes in the payload doesn't exist in the entity, an error is returned. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.
   * @param {String} entityId Id of the entity to be updated
   * @param {Object} body
   * @param {Object} opts Optional parameters
   * @param {String} opts.fiwareService When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
   * @param {String} opts.fiwareServicePath Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
   * @param {String} opts.type Entity type, to avoid ambiguity in case there are several entities with the same entity id.
   * @param {module:model/String} opts.options Operations options
   * @param {module:api/EntitiesApi~updateExistingEntityAttributesCallback} callback The callback function, accepting three arguments: error, data, response
   */
  updateExistingEntityAttributes(entityId, body, opts, callback) {
    opts = opts || {};
    let postBody = body;
    // verify the required parameter 'entityId' is set
    if (entityId === undefined || entityId === null) {
      throw new Error(
        "Missing the required parameter 'entityId' when calling updateExistingEntityAttributes"
      );
    }
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling updateExistingEntityAttributes"
      );
    }

    let pathParams = {
      entityId: entityId,
    };
    let queryParams = {
      type: opts['type'],
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
      '/entities/{entityId}/attrs',
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

  /**
   * Callback function to receive the result of the updateOrAppendEntityAttributes operation.
   * @callback module:api/EntitiesApi~updateOrAppendEntityAttributesCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * The request payload is an object representing the attributes to append or update. The object follows the JSON entity Representation format (described in [JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)  section), except that `id` and `type` are not allowed. The entity attributes are updated with the ones in the payload, depending on whether the `append` operation option is used or not. * If `append` is not used: the entity attributes are updated   (if they previously exist) or appended (if they don't previously   exist) with the ones in the payload. * If `append` is used (i.e. strict append semantics): all the attributes   in the payload not previously existing in the entity are appended.   In addition to that, in case some of the attributes in the payload   already exist in the entity, an error is returned.    Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.
   * @param {String} entityId Entity id to be updated
   * @param {Object} body
   * @param {Object} opts Optional parameters
   * @param {String} opts.fiwareService When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
   * @param {String} opts.fiwareServicePath Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
   * @param {String} opts.type Entity type, to avoid ambiguity in case there are several entities with the same entity id.
   * @param {module:model/String} opts.options Operations options
   * @param {module:api/EntitiesApi~updateOrAppendEntityAttributesCallback} callback The callback function, accepting three arguments: error, data, response
   */
  updateOrAppendEntityAttributes(entityId, body, opts, callback) {
    opts = opts || {};
    let postBody = body;
    // verify the required parameter 'entityId' is set
    if (entityId === undefined || entityId === null) {
      throw new Error(
        "Missing the required parameter 'entityId' when calling updateOrAppendEntityAttributes"
      );
    }
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling updateOrAppendEntityAttributes"
      );
    }

    let pathParams = {
      entityId: entityId,
    };
    let queryParams = {
      type: opts['type'],
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
      '/entities/{entityId}/attrs',
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
