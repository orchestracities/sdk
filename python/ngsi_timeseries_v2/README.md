# ngsi-timeseries-v2

QuantumLeap API

This Python package is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

-   API version: 0.1.2
-   Package version: 1.0.0
-   Build package: org.openapitools.codegen.languages.PythonClientCodegen For
    more information, please visit
    [https://www.orchestracities.com](https://www.orchestracities.com)

## Requirements.

Python 2.7 and 3.4+

## Installation & Usage

### pip install

If the python package is hosted on Github, you can install directly from Github

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```

(you may need to run `pip` with root permission:
`sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:

```python
import ngsi_timeseries_v2
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```

(or `sudo python setup.py install` to install the package for all users)

Then import the package:

```python
import ngsi_timeseries_v2
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run
the following:

```python
from __future__ import print_function
import time
import ngsi_timeseries_v2
from ngsi_timeseries_v2.rest import ApiException
from pprint import pprint

configuration = ngsi_timeseries_v2.Configuration()
# Configure API key authorization: ApiKeyAuth
configuration.api_key['X-Gravitee-Api-Key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Gravitee-Api-Key'] = 'Bearer'
configuration = ngsi_timeseries_v2.Configuration()
# Configure Bearer authorization (JWT): BearerAuth
configuration.access_token = 'YOUR_BEARER_TOKEN'

# create an instance of the API class
api_instance = ngsi_timeseries_v2.InputApi(ngsi_timeseries_v2.ApiClient(configuration))
entity_type = 'entity_type_example' # str | The entity type in which the query is restricted on. Used to constraint the search to entities of this type, specially useful when the entity id is not enough to uniquely identify an entity.
from_date = 'from_date_example' # str | Optional. The starting date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34) (optional)
to_date = 'to_date_example' # str | Optional. The final date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34) (optional)
fiware_service = 'fiware_service_example' # str | The corresponding 'fiware-service' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)
fiware_service_path = 'fiware_service_path_example' # str | The corresponding 'fiware-servicepath' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)

try:
    # Delete historical data of all entities of a certain type.
    api_instance.reporter_delete_delete_entities(entity_type, from_date=from_date, to_date=to_date, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling InputApi->reporter_delete_delete_entities: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to _https://api.s.orchestracities.com/timeseries_

| Class        | Method                                                                                                              | HTTP request                                        | Description                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| _InputApi_   | [**reporter_delete_delete_entities**](docs/InputApi.md#reporter_delete_delete_entities)                             | **DELETE** /types/{entityType}                      | Delete historical data of all entities of a certain type.                                 |
| _InputApi_   | [**reporter_delete_delete_entity**](docs/InputApi.md#reporter_delete_delete_entity)                                 | **DELETE** /entities/{entityId}                     | Delete historical data of a certain entity.                                               |
| _InputApi_   | [**reporter_reporter_notify**](docs/InputApi.md#reporter_reporter_notify)                                           | **POST** /notify                                    | Notify QuantumLeap the arrival of a new NGSI notification.                                |
| _InputApi_   | [**reporter_reporter_subscribe**](docs/InputApi.md#reporter_reporter_subscribe)                                     | **POST** /subscribe                                 | Subscribe QL to process Orion notifications of certain type.                              |
| _MetaApi_    | [**reporter_health_get_health**](docs/MetaApi.md#reporter_health_get_health)                                        | **GET** /health                                     | Returns the health-check status of QuantumLeap and the services it depends on.            |
| _MetaApi_    | [**reporter_reporter_config**](docs/MetaApi.md#reporter_reporter_config)                                            | **POST** /config                                    | (To Be Implemented) Customize your persistance configuration to better suit your needs.   |
| _MetaApi_    | [**reporter_version_version**](docs/MetaApi.md#reporter_version_version)                                            | **GET** /version                                    | Returns the version of QuantumLeap.                                                       |
| _QueriesApi_ | [**reporter_query1_t1_e1_a_query1_t1_e1_a**](docs/QueriesApi.md#reporter_query1_t1_e1_a_query1_t1_e1_a)             | **GET** /entities/{entityId}/attrs/{attrName}       | History of an attribute of a given entity instance.                                       |
| _QueriesApi_ | [**reporter_query1_t1_e1_a_query1_t1_e1_a_value**](docs/QueriesApi.md#reporter_query1_t1_e1_a_query1_t1_e1_a_value) | **GET** /entities/{entityId}/attrs/{attrName}/value | History of an attribute (values only) of a given entity instance.                         |
| _QueriesApi_ | [**reporter_query1_t1_ena_query1_t1_ena**](docs/QueriesApi.md#reporter_query1_t1_ena_query1_t1_ena)                 | **GET** /entities/{entityId}                        | History of N attributes of a given entity instance.                                       |
| _QueriesApi_ | [**reporter_query1_t1_ena_query1_t1_ena_value**](docs/QueriesApi.md#reporter_query1_t1_ena_query1_t1_ena_value)     | **GET** /entities/{entityId}/value                  | History of N attributes (values only) of a given entity instance.                         |
| _QueriesApi_ | [**reporter_query1_tne1_a_query1_tne1_a**](docs/QueriesApi.md#reporter_query1_tne1_a_query1_tne1_a)                 | **GET** /types/{entityType}/attrs/{attrName}        | History of an attribute of N entities of the same type.                                   |
| _QueriesApi_ | [**reporter_query1_tne1_a_query1_tne1_a_value**](docs/QueriesApi.md#reporter_query1_tne1_a_query1_tne1_a_value)     | **GET** /types/{entityType}/attrs/{attrName}/value  | History of an attribute (values only) of N entities of the same type.                     |
| _QueriesApi_ | [**reporter_reporter_query1_tnena**](docs/QueriesApi.md#reporter_reporter_query1_tnena)                             | **GET** /types/{entityType}                         | (To Be Implemented) History of N attributes of N entities of the same type.               |
| _QueriesApi_ | [**reporter_reporter_query1_tnena_value**](docs/QueriesApi.md#reporter_reporter_query1_tnena_value)                 | **GET** /types/{entityType}/value                   | (To Be Implemented) History of N attributes (values only) of N entities of the same type. |
| _QueriesApi_ | [**reporter_reporter_query_ntne1_a**](docs/QueriesApi.md#reporter_reporter_query_ntne1_a)                           | **GET** /attrs/{attrName}                           | (To Be Implemented) History of an attribute of N entities of N types.                     |
| _QueriesApi_ | [**reporter_reporter_query_ntne1_a_value**](docs/QueriesApi.md#reporter_reporter_query_ntne1_a_value)               | **GET** /attrs/{attrName}/value                     | (To Be Implemented) History of an attribute (values only) of N entities of N types.       |
| _QueriesApi_ | [**reporter_reporter_query_ntnena**](docs/QueriesApi.md#reporter_reporter_query_ntnena)                             | **GET** /attrs                                      | (To Be Implemented) History of N attributes of N entities of N types.                     |
| _QueriesApi_ | [**reporter_reporter_query_ntnena_value**](docs/QueriesApi.md#reporter_reporter_query_ntnena_value)                 | **GET** /attrs/value                                | (To Be Implemented) History of N attributes (values only) of N entities of N types.       |

## Documentation For Models

-   [AttributeValues](docs/AttributeValues.md)
-   [Entity](docs/Entity.md)
-   [EntityIndexedValues](docs/EntityIndexedValues.md)
-   [ErrorResponse](docs/ErrorResponse.md)
-   [IndexArray](docs/IndexArray.md)
-   [IndexedAllAttribute](docs/IndexedAllAttribute.md)
-   [IndexedAttribute](docs/IndexedAttribute.md)
-   [IndexedAttributeTypes](docs/IndexedAttributeTypes.md)
-   [IndexedAttributeValue](docs/IndexedAttributeValue.md)
-   [IndexedEntity](docs/IndexedEntity.md)
-   [IndexedEntityAttribute](docs/IndexedEntityAttribute.md)
-   [IndexedEntityType](docs/IndexedEntityType.md)
-   [IndexedEntityTypeAttribute](docs/IndexedEntityTypeAttribute.md)
-   [IndexedEntityTypeAttributeValue](docs/IndexedEntityTypeAttributeValue.md)
-   [IndexedEntityTypeEntities](docs/IndexedEntityTypeEntities.md)
-   [IndexedEntityTypeValue](docs/IndexedEntityTypeValue.md)
-   [IndexedEntityValue](docs/IndexedEntityValue.md)
-   [IndexedValues](docs/IndexedValues.md)
-   [Notification](docs/Notification.md)
-   [Status](docs/Status.md)
-   [ValuesArray](docs/ValuesArray.md)
-   [Version](docs/Version.md)

## Documentation For Authorization

## ApiKeyAuth

-   **Type**: API key
-   **API key parameter name**: X-Gravitee-Api-Key
-   **Location**: HTTP header

## BearerAuth

-   **Type**: Bearer authentication (JWT)

## Author

info@orchestracities.com