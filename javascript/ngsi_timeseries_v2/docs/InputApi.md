# NgsiTimeseriesV2.InputApi

All URIs are relative to _https://api.s.orchestracities.com/timeseries_

| Method                                                                       | HTTP request                    | Description                                                  |
| ---------------------------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------ |
| [**reporterDeleteDeleteEntities**](InputApi.md#reporterDeleteDeleteEntities) | **DELETE** /types/{entityType}  | Delete historical data of all entities of a certain type.    |
| [**reporterDeleteDeleteEntity**](InputApi.md#reporterDeleteDeleteEntity)     | **DELETE** /entities/{entityId} | Delete historical data of a certain entity.                  |
| [**reporterReporterNotify**](InputApi.md#reporterReporterNotify)             | **POST** /notify                | Notify QuantumLeap the arrival of a new NGSI notification.   |
| [**reporterReporterSubscribe**](InputApi.md#reporterReporterSubscribe)       | **POST** /subscribe             | Subscribe QL to process Orion notifications of certain type. |

## reporterDeleteDeleteEntities

> reporterDeleteDeleteEntities(entityType, opts)

Delete historical data of all entities of a certain type.

Given an entity type, delete all the historical records of all entities of such
type.

### Example

```javascript
import NgsiTimeseriesV2 from "ngsi_timeseries_v2";
let defaultClient = NgsiTimeseriesV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiTimeseriesV2.InputApi();
let entityType = "entityType_example"; // String | The entity type in which the query is restricted on. Used to constraint the search to entities of this type, specially useful when the entity id is not enough to uniquely identify an entity.
let opts = {
    fromDate: "fromDate_example", // String | Optional. The starting date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34)
    toDate: "toDate_example", // String | Optional. The final date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34)
    fiwareService: "fiwareService_example", // String | The corresponding 'fiware-service' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy
    fiwareServicePath: "fiwareServicePath_example" // String | The corresponding 'fiware-servicepath' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy
};
apiInstance.reporterDeleteDeleteEntities(
    entityType,
    opts,
    (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully.");
        }
    }
);
```

### Parameters

| Name                  | Type       | Description                                                                                                                                                                                    | Notes      |
| --------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **entityType**        | **String** | The entity type in which the query is restricted on. Used to constraint the search to entities of this type, specially useful when the entity id is not enough to uniquely identify an entity. |
| **fromDate**          | **String** | Optional. The starting date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34)                                          | [optional] |
| **toDate**            | **String** | Optional. The final date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34)                                             | [optional] |
| **fiwareService**     | **String** | The corresponding &#39;fiware-service&#39; header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy                                                 | [optional] |
| **fiwareServicePath** | **String** | The corresponding &#39;fiware-servicepath&#39; header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy                                             | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: Not defined

## reporterDeleteDeleteEntity

> String reporterDeleteDeleteEntity(entityId, opts)

Delete historical data of a certain entity.

Given an entity (with type and id), delete all its historical records.

### Example

```javascript
import NgsiTimeseriesV2 from "ngsi_timeseries_v2";
let defaultClient = NgsiTimeseriesV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiTimeseriesV2.InputApi();
let entityId = "entityId_example"; // String | The entity id in which the query is restricted on. If the id is unique among all entity types, this could be used to uniquely identify the entity instance. Otherwise, you will have to use the entityType attribute to resolve ambiguity.
let opts = {
    type: "type_example", // String | Comma-separated list of entity types whose data are to be included in the response. Use only one (no comma) when required. If used to resolve ambiguity for the given entityId, make sure the given entityId exists for this entityType.
    fromDate: "fromDate_example", // String | Optional. The starting date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34)
    toDate: "toDate_example", // String | Optional. The final date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34)
    fiwareService: "fiwareService_example", // String | The corresponding 'fiware-service' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy
    fiwareServicePath: "fiwareServicePath_example" // String | The corresponding 'fiware-servicepath' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy
};
apiInstance.reporterDeleteDeleteEntity(
    entityId,
    opts,
    (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully. Returned data: " + data);
        }
    }
);
```

### Parameters

| Name                  | Type       | Description                                                                                                                                                                                                                                | Notes      |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **entityId**          | **String** | The entity id in which the query is restricted on. If the id is unique among all entity types, this could be used to uniquely identify the entity instance. Otherwise, you will have to use the entityType attribute to resolve ambiguity. |
| **type**              | **String** | Comma-separated list of entity types whose data are to be included in the response. Use only one (no comma) when required. If used to resolve ambiguity for the given entityId, make sure the given entityId exists for this entityType.   | [optional] |
| **fromDate**          | **String** | Optional. The starting date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34)                                                                                      | [optional] |
| **toDate**            | **String** | Optional. The final date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34)                                                                                         | [optional] |
| **fiwareService**     | **String** | The corresponding &#39;fiware-service&#39; header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy                                                                                             | [optional] |
| **fiwareServicePath** | **String** | The corresponding &#39;fiware-servicepath&#39; header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy                                                                                         | [optional] |

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: text/plain, application/json

## reporterReporterNotify

> reporterReporterNotify(notification, opts)

Notify QuantumLeap the arrival of a new NGSI notification.

### Example

```javascript
import NgsiTimeseriesV2 from "ngsi_timeseries_v2";
let defaultClient = NgsiTimeseriesV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiTimeseriesV2.InputApi();
let notification = new NgsiTimeseriesV2.Notification(); // Notification |
let opts = {
    fiwareService: "fiwareService_example", // String | The corresponding 'fiware-service' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy
    fiwareServicePath: "fiwareServicePath_example" // String | The corresponding 'fiware-servicepath' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy
};
apiInstance.reporterReporterNotify(
    notification,
    opts,
    (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully.");
        }
    }
);
```

### Parameters

| Name                  | Type                                | Description                                                                                                                                        | Notes      |
| --------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **notification**      | [**Notification**](Notification.md) |                                                                                                                                                    |
| **fiwareService**     | **String**                          | The corresponding &#39;fiware-service&#39; header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy     | [optional] |
| **fiwareServicePath** | **String**                          | The corresponding &#39;fiware-servicepath&#39; header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: Not defined

## reporterReporterSubscribe

> reporterReporterSubscribe(orionUrl, quantumleapUrl, opts)

Subscribe QL to process Orion notifications of certain type.

This endpoint simplifies the creation of the subscription in orion that will
generate the notifications to be consumed by QuantumLeap in order to save
historical records. If you want an advanced specification of the notifications,
you can always create the subscription in orion at your will. This endpoint just
aims to simplify the common use case.

### Example

```javascript
import NgsiTimeseriesV2 from "ngsi_timeseries_v2";
let defaultClient = NgsiTimeseriesV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiTimeseriesV2.InputApi();
let orionUrl = "orionUrl_example"; // String | The url where QuantumLeap can reach Orion. Do not include specific paths, just the base one including the api version. E.g http://my-orion.com:1026/v2
let quantumleapUrl = "quantumleapUrl_example"; // String | The url where Orion can reach QuantumLeap. Do not include specific paths, just the base one including the api version. E.g http://my-quantumleap.com:8668/v2
let opts = {
    entityType: "entityType_example", // String | The type of entities for which to create a subscription, so as to persist historical data of entities of this type. ATTENTION: If not specified, all entity types will be tracked.
    entityId: "entityId_example", // String | Id of the entity to track. If specified, it takes precedence over the idPattern parameter. If absent but an idPattern is given, then QL will use the idPattern to determine which entities to track. If no idPattern is given either, then QL will use the entityType if present. If not even an entityType is given, then QL will fall back to tracking all entities.
    idPattern: "idPattern_example", // String | The pattern covering the entity ids for which to subscribe. If not specified, QL will track all entities of the specified type. This attribute is documented in orion, see https://fiware-orion.readthedocs.io/en/master/user/walkthrough_apiv2/index.html#subscriptions
    attributes: "attributes_example", // String | Comma-separated list of attribute names to track. These attributes are used to narrow the condition that triggers data change notifications---i.e. they will be used to fill the attrs field of the subject's condition of the Orion subscription QL creates. They will also be used to fill the attrs field of the notification object in the subscription QL creates. (Full details at: http://telefonicaid.github.io/fiware-orion/api/v2/stable/) More specifically, call E the set of entities determined by the given combination of entityType, entityId and idPattern. Then we have a set A of all attributes of entities in E whose name is in attributes. When the value of any of the attributes in A changes, Orion will send QL the current values of those attributes. Note that when using this attributes parameter the set of attributes that Orion will track for changes (observed attributes) is the same as the set of attributes that determine which data Orion will put in notifications (notified attributes). If the two sets need to be different, use the observedAttributes and notifiedAttributes parameters below. (If you supply an attributes parameter, observedAttributes and notifiedAttributes will be ignored.)
    observedAttributes: "observedAttributes_example", // String | Comma-separated list of attribute names to track. These attributes are used to narrow the condition that triggers data change notifications---i.e. they will be used to fill the attrs field of the subject's condition of the Orion subscription QL creates. (Full details at: http://telefonicaid.github.io/fiware-orion/api/v2/stable/) More specifically, call E the set of entities determined by the given combination of entityType, entityId and idPattern. Then we have a set A of all attributes of entities in E whose name is in observedAttributes. When the value of any of the attributes in A changes, Orion will send QL the current values of the attributes specified by the notifiedAttributes parameter. If observedAttributes is absent, QL will be notified of any changes to the entities in E.
    notifiedAttributes: "notifiedAttributes_example", // String | Comma-separated list of attribute names to be used to restrict the data of which QL will keep a history. This list will be used to set the notification's attrs field of the subscription that QL creates. (Full details at: http://telefonicaid.github.io/fiware-orion/api/v2/stable/) If not specified, QL will keep a history of all data changes in any of the entities identified by the given combination of entityType, entityId and idPattern.
    throttling: 56, // Number | Minimal period of time in seconds which must elapse between two consecutive notifications. This is the value QL will use for the throttling field when creating the subscription. If not specified, it defaults to 1.
    timeIndexAttribute: "timeIndexAttribute_example", // String | The name of a custom attribute to be used as a time index. On receiving notifications containing this attribute, QL will use its value as a time series index for the entity being notified. If specified, it should refer to an entity attribute whose value is an ISO 8601 timestamp.
    fiwareService: "fiwareService_example", // String | The corresponding 'fiware-service' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy
    fiwareServicePath: "fiwareServicePath_example" // String | The corresponding 'fiware-servicepath' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy
};
apiInstance.reporterReporterSubscribe(
    orionUrl,
    quantumleapUrl,
    opts,
    (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully.");
        }
    }
);
```

### Parameters

| Name                   | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Notes      |
| ---------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **orionUrl**           | **String** | The url where QuantumLeap can reach Orion. Do not include specific paths, just the base one including the api version. E.g http://my-orion.com:1026/v2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **quantumleapUrl**     | **String** | The url where Orion can reach QuantumLeap. Do not include specific paths, just the base one including the api version. E.g http://my-quantumleap.com:8668/v2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **entityType**         | **String** | The type of entities for which to create a subscription, so as to persist historical data of entities of this type. ATTENTION: If not specified, all entity types will be tracked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | [optional] |
| **entityId**           | **String** | Id of the entity to track. If specified, it takes precedence over the idPattern parameter. If absent but an idPattern is given, then QL will use the idPattern to determine which entities to track. If no idPattern is given either, then QL will use the entityType if present. If not even an entityType is given, then QL will fall back to tracking all entities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | [optional] |
| **idPattern**          | **String** | The pattern covering the entity ids for which to subscribe. If not specified, QL will track all entities of the specified type. This attribute is documented in orion, see https://fiware-orion.readthedocs.io/en/master/user/walkthrough_apiv2/index.html#subscriptions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [optional] |
| **attributes**         | **String** | Comma-separated list of attribute names to track. These attributes are used to narrow the condition that triggers data change notifications---i.e. they will be used to fill the attrs field of the subject&#39;s condition of the Orion subscription QL creates. They will also be used to fill the attrs field of the notification object in the subscription QL creates. (Full details at: http://telefonicaid.github.io/fiware-orion/api/v2/stable/) More specifically, call E the set of entities determined by the given combination of entityType, entityId and idPattern. Then we have a set A of all attributes of entities in E whose name is in attributes. When the value of any of the attributes in A changes, Orion will send QL the current values of those attributes. Note that when using this attributes parameter the set of attributes that Orion will track for changes (observed attributes) is the same as the set of attributes that determine which data Orion will put in notifications (notified attributes). If the two sets need to be different, use the observedAttributes and notifiedAttributes parameters below. (If you supply an attributes parameter, observedAttributes and notifiedAttributes will be ignored.) | [optional] |
| **observedAttributes** | **String** | Comma-separated list of attribute names to track. These attributes are used to narrow the condition that triggers data change notifications---i.e. they will be used to fill the attrs field of the subject&#39;s condition of the Orion subscription QL creates. (Full details at: http://telefonicaid.github.io/fiware-orion/api/v2/stable/) More specifically, call E the set of entities determined by the given combination of entityType, entityId and idPattern. Then we have a set A of all attributes of entities in E whose name is in observedAttributes. When the value of any of the attributes in A changes, Orion will send QL the current values of the attributes specified by the notifiedAttributes parameter. If observedAttributes is absent, QL will be notified of any changes to the entities in E.                                                                                                                                                                                                                                                                                                                                                                                                                              | [optional] |
| **notifiedAttributes** | **String** | Comma-separated list of attribute names to be used to restrict the data of which QL will keep a history. This list will be used to set the notification&#39;s attrs field of the subscription that QL creates. (Full details at: http://telefonicaid.github.io/fiware-orion/api/v2/stable/) If not specified, QL will keep a history of all data changes in any of the entities identified by the given combination of entityType, entityId and idPattern.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | [optional] |
| **throttling**         | **Number** | Minimal period of time in seconds which must elapse between two consecutive notifications. This is the value QL will use for the throttling field when creating the subscription. If not specified, it defaults to 1.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | [optional] |
| **timeIndexAttribute** | **String** | The name of a custom attribute to be used as a time index. On receiving notifications containing this attribute, QL will use its value as a time series index for the entity being notified. If specified, it should refer to an entity attribute whose value is an ISO 8601 timestamp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | [optional] |
| **fiwareService**      | **String** | The corresponding &#39;fiware-service&#39; header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | [optional] |
| **fiwareServicePath**  | **String** | The corresponding &#39;fiware-servicepath&#39; header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json
