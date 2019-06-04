# NgsiV2.AttributeValueApi

All URIs are relative to _https://api.s.orchestracities.com/context/v2_

| Method                                                                | HTTP request                                        | Description |
| --------------------------------------------------------------------- | --------------------------------------------------- | ----------- |
| [**getAttributeValue**](AttributeValueApi.md#getAttributeValue)       | **GET** /entities/{entityId}/attrs/{attrName}/value |
| [**updateAttributeValue**](AttributeValueApi.md#updateAttributeValue) | **PUT** /entities/{entityId}/attrs/{attrName}/value |

## getAttributeValue

> AttributeValueObject getAttributeValue(entityId, attrName, opts)

This operation returns the &#x60;value&#x60; property with the value of the
attribute. _ If attribute value is JSON Array or Object: _ If &#x60;Accept&#x60;
header can be expanded to &#x60;application/json&#x60; or &#x60;text/plain&#x60;
return the value as a JSON with a response type of application/json or
text/plain (whichever is the first in &#x60;Accept&#x60; header or
&#x60;application/json&#x60; in the case of &#x60;Accept: _*/*_&#x60;). _ Else
return a HTTP error \&quot;406 Not Acceptable: accepted MIME types:
application/json, text/plain\&quot; _ If attribute value is a string, number,
null or boolean: _ If &#x60;Accept&#x60; header can be expanded to text/plain
return the value as text. In case of a string, citation marks are used at the
begining and end. _ Else return a HTTP error \&quot;406 Not Acceptable: accepted
MIME types: text/plain\&quot; Response: _ Successful operation uses 200 OK. _
Errors use a non-2xx and (optionally) an error payload. See subsection on
[Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
more details.

### Example

```javascript
import NgsiV2 from "ngsi_v2";
let defaultClient = NgsiV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiV2.AttributeValueApi();
let entityId = "entityId_example"; // String | Id of the entity in question
let attrName = "attrName_example"; // String | Name of the attribute to be retrieved.
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    type: "type_example" // String | Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
};
apiInstance.getAttributeValue(
    entityId,
    attrName,
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

| Name                  | Type       | Description                                                                                     | Notes      |
| --------------------- | ---------- | ----------------------------------------------------------------------------------------------- | ---------- |
| **entityId**          | **String** | Id of the entity in question                                                                    |
| **attrName**          | **String** | Name of the attribute to be retrieved.                                                          |
| **fiwareService**     | **String** |                                                                                                 | [optional] |
| **fiwareServicePath** | **String** |                                                                                                 | [optional] |
| **type**              | **String** | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. | [optional] |

### Return type

[**AttributeValueObject**](AttributeValueObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json, plain/text

## updateAttributeValue

> updateAttributeValue(entityId, attrName, requestBody, opts)

The request payload is the new attribute value. _ If the request payload MIME
type is &#x60;application/json&#x60;, then the value of the attribute is set to
the JSON object or array coded in the payload (if the payload is not a valid
JSON document, then an error is returned). _ If the request payload MIME type is
&#x60;text/plain&#x60;, then the following algorithm is applied to the payload:
_ If the payload starts and ends with citation-marks (&#x60;\&quot;&#x60;), the
value is taken as a string (the citation marks themselves are not considered
part of the string) _ If &#x60;true&#x60; or &#x60;false&#x60;, the value is
taken as a boolean. _ If &#x60;null&#x60;, the value is taken as null. _ If
these first three tests &#39;fail&#39;, the text is interpreted as a number. _
If not a valid number, then an error is returned and the attribute&#39;s value
is unchanged. The payload MIME type in the request is specified in the
&#x60;Content-Type&#x60; HTTP header. Response: _ Successful operation uses 204
No Content \* Errors use a non-2xx and (optionally) an error payload. See
subsection on
[Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
more details.

### Example

```javascript
import NgsiV2 from "ngsi_v2";
let defaultClient = NgsiV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiV2.AttributeValueApi();
let entityId = "entityId_example"; // String | Id of the entity to be updated.
let attrName = "attrName_example"; // String | Attribute name.
let requestBody = { key: null }; // {String: Object} |
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    type: "type_example" // String | Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
};
apiInstance.updateAttributeValue(
    entityId,
    attrName,
    requestBody,
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

| Name                  | Type                              | Description                                                                                     | Notes      |
| --------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------- | ---------- |
| **entityId**          | **String**                        | Id of the entity to be updated.                                                                 |
| **attrName**          | **String**                        | Attribute name.                                                                                 |
| **requestBody**       | [**{String: Object}**](Object.md) |                                                                                                 |
| **fiwareService**     | **String**                        |                                                                                                 | [optional] |
| **fiwareServicePath** | **String**                        |                                                                                                 | [optional] |
| **type**              | **String**                        | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json, plain/text
-   **Accept**: application/json
