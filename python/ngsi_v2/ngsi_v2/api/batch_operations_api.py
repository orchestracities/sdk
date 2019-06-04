# coding: utf-8

"""
    ngsi_v2

    NGSI V2 API RC-2018.07  # noqa: E501

    The version of the OpenAPI document: 0.2.2
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from ngsi_v2.api_client import ApiClient
from ngsi_v2.exceptions import (
    ApiTypeError,
    ApiValueError
)


class BatchOperationsApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def notify(self, batch_notify, **kwargs):  # noqa: E501
        """notify  # noqa: E501

        This operation is intended to consume a notification payload so that all the entity data included by such notification is persisted, overwriting if necessary. This operation is useful when one NGSIv2 endpoint is subscribed to another NGSIv2 endpoint (federation scenarios). The request payload must be an NGSIv2 notification payload. The behaviour must be exactly the same as POST /v2/op/update with actionType equal to append. Response code: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.notify(batch_notify, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param BatchNotify batch_notify: (required)
        :param str fiware_service:
        :param str fiware_service_path:
        :param str options: Options dictionary
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.notify_with_http_info(batch_notify, **kwargs)  # noqa: E501

    def notify_with_http_info(self, batch_notify, **kwargs):  # noqa: E501
        """notify  # noqa: E501

        This operation is intended to consume a notification payload so that all the entity data included by such notification is persisted, overwriting if necessary. This operation is useful when one NGSIv2 endpoint is subscribed to another NGSIv2 endpoint (federation scenarios). The request payload must be an NGSIv2 notification payload. The behaviour must be exactly the same as POST /v2/op/update with actionType equal to append. Response code: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.notify_with_http_info(batch_notify, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param BatchNotify batch_notify: (required)
        :param str fiware_service:
        :param str fiware_service_path:
        :param str options: Options dictionary
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = ['batch_notify', 'fiware_service', 'fiware_service_path', 'options']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method notify" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'batch_notify' is set
        if ('batch_notify' not in local_var_params or
                local_var_params['batch_notify'] is None):
            raise ApiValueError("Missing the required parameter `batch_notify` when calling `notify`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []
        if 'options' in local_var_params:
            query_params.append(('options', local_var_params['options']))  # noqa: E501

        header_params = {}
        if 'fiware_service' in local_var_params:
            header_params['Fiware-Service'] = local_var_params['fiware_service']  # noqa: E501
        if 'fiware_service_path' in local_var_params:
            header_params['Fiware-ServicePath'] = local_var_params['fiware_service_path']  # noqa: E501

        form_params = []
        local_var_files = {}

        body_params = None
        if 'batch_notify' in local_var_params:
            body_params = local_var_params['batch_notify']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['ApiKeyAuth', 'BearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/op/notify', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type=None,  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def query(self, batch_query, **kwargs):  # noqa: E501
        """query  # noqa: E501

        The response payload is an Array containing one object per matching entity, or an empty array `[]` if no entities are found. The entities follow the JSON entity Representation format (described in the section [JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)). The payload may contain the following elements (all of them optional): + `entities`: a list of entites to search for. Each element is   represented by a JSON object with the following elements:     + `id` or `idPattern`: Id or pattern of the affected entities.       Both cannot be used at the same time,       but at least one of them must be present.     + `type` or `typePattern`: Type or type pattern of the entities to       search for. Both cannot be used at       the same time. If omitted, it means \"any entity type\". + `attributes`: a list of attribute names to search for. If omitted,   it means \"all attributes\".   Response code: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.query(batch_query, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param BatchQuery batch_query: (required)
        :param str fiware_service:
        :param str fiware_service_path:
        :param int limit: Limit the number of entities to be retrieved.
        :param int offset: Skip a number of records.
        :param str order_by: Criteria for ordering results. See \"Ordering Results\" section for details.
        :param str options: Options dictionary
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: list[Entity]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.query_with_http_info(batch_query, **kwargs)  # noqa: E501

    def query_with_http_info(self, batch_query, **kwargs):  # noqa: E501
        """query  # noqa: E501

        The response payload is an Array containing one object per matching entity, or an empty array `[]` if no entities are found. The entities follow the JSON entity Representation format (described in the section [JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)). The payload may contain the following elements (all of them optional): + `entities`: a list of entites to search for. Each element is   represented by a JSON object with the following elements:     + `id` or `idPattern`: Id or pattern of the affected entities.       Both cannot be used at the same time,       but at least one of them must be present.     + `type` or `typePattern`: Type or type pattern of the entities to       search for. Both cannot be used at       the same time. If omitted, it means \"any entity type\". + `attributes`: a list of attribute names to search for. If omitted,   it means \"all attributes\".   Response code: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.query_with_http_info(batch_query, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param BatchQuery batch_query: (required)
        :param str fiware_service:
        :param str fiware_service_path:
        :param int limit: Limit the number of entities to be retrieved.
        :param int offset: Skip a number of records.
        :param str order_by: Criteria for ordering results. See \"Ordering Results\" section for details.
        :param str options: Options dictionary
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(list[Entity], status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = ['batch_query', 'fiware_service', 'fiware_service_path', 'limit', 'offset', 'order_by', 'options']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method query" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'batch_query' is set
        if ('batch_query' not in local_var_params or
                local_var_params['batch_query'] is None):
            raise ApiValueError("Missing the required parameter `batch_query` when calling `query`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []
        if 'limit' in local_var_params:
            query_params.append(('limit', local_var_params['limit']))  # noqa: E501
        if 'offset' in local_var_params:
            query_params.append(('offset', local_var_params['offset']))  # noqa: E501
        if 'order_by' in local_var_params:
            query_params.append(('orderBy', local_var_params['order_by']))  # noqa: E501
        if 'options' in local_var_params:
            query_params.append(('options', local_var_params['options']))  # noqa: E501

        header_params = {}
        if 'fiware_service' in local_var_params:
            header_params['Fiware-Service'] = local_var_params['fiware_service']  # noqa: E501
        if 'fiware_service_path' in local_var_params:
            header_params['Fiware-ServicePath'] = local_var_params['fiware_service_path']  # noqa: E501

        form_params = []
        local_var_files = {}

        body_params = None
        if 'batch_query' in local_var_params:
            body_params = local_var_params['batch_query']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['ApiKeyAuth', 'BearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/op/query', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[Entity]',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def update(self, batch_update, **kwargs):  # noqa: E501
        """update  # noqa: E501

        This operation allows to create, update and/or delete several entities in a single batch operation. The payload is an object with two properties: + `actionType`, to specify the kind of update action to do: either   `append`, `appendStrict`, `update`, `delete`. + `entities`, an array of entities, each one specified using the JSON   entity Representation format (described in the section   [JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)).     Response: * Successful operation uses 204 No Content. * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.update(batch_update, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param BatchUpdate batch_update: (required)
        :param str fiware_service:
        :param str fiware_service_path:
        :param str options: Options dictionary
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.update_with_http_info(batch_update, **kwargs)  # noqa: E501

    def update_with_http_info(self, batch_update, **kwargs):  # noqa: E501
        """update  # noqa: E501

        This operation allows to create, update and/or delete several entities in a single batch operation. The payload is an object with two properties: + `actionType`, to specify the kind of update action to do: either   `append`, `appendStrict`, `update`, `delete`. + `entities`, an array of entities, each one specified using the JSON   entity Representation format (described in the section   [JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)).     Response: * Successful operation uses 204 No Content. * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.update_with_http_info(batch_update, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param BatchUpdate batch_update: (required)
        :param str fiware_service:
        :param str fiware_service_path:
        :param str options: Options dictionary
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = ['batch_update', 'fiware_service', 'fiware_service_path', 'options']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method update" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'batch_update' is set
        if ('batch_update' not in local_var_params or
                local_var_params['batch_update'] is None):
            raise ApiValueError("Missing the required parameter `batch_update` when calling `update`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []
        if 'options' in local_var_params:
            query_params.append(('options', local_var_params['options']))  # noqa: E501

        header_params = {}
        if 'fiware_service' in local_var_params:
            header_params['Fiware-Service'] = local_var_params['fiware_service']  # noqa: E501
        if 'fiware_service_path' in local_var_params:
            header_params['Fiware-ServicePath'] = local_var_params['fiware_service_path']  # noqa: E501

        form_params = []
        local_var_files = {}

        body_params = None
        if 'batch_update' in local_var_params:
            body_params = local_var_params['batch_update']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['ApiKeyAuth', 'BearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/op/update', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type=None,  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)