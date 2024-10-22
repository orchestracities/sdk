# coding: utf-8

"""
    ngsi_v2

    NGSI V2 API RC-2018.07  # noqa: E501

    The version of the OpenAPI document: 0.2.2
    Contact: info@orchestracities.com
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


class AttributeValueApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def get_attribute_value(self, entity_id, attr_name, **kwargs):  # noqa: E501
        """get_attribute_value  # noqa: E501

        This operation returns the `value` property with the value of the attribute. * If attribute value is JSON Array or Object:   * If `Accept` header can be expanded to `application/json` or     `text/plain` return the value as a JSON with a response type of     application/json or text/plain (whichever is the first in `Accept`     header or `application/json` in the case of `Accept: */*`).   * Else return a HTTP error \"406 Not Acceptable: accepted MIME types:     application/json, text/plain\" * If attribute value is a string, number, null or boolean:   * If `Accept` header can be expanded to text/plain return the value     as text. In case of a string, citation     marks are used at the begining and end.   * Else return a HTTP error     \"406 Not Acceptable: accepted MIME types: text/plain\" Response: * Successful operation uses 200 OK. * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_attribute_value(entity_id, attr_name, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str entity_id: Id of the entity in question (required)
        :param str attr_name: Name of the attribute to be retrieved. (required)
        :param str fiware_service: When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
        :param str fiware_service_path: Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
        :param str type: Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: AttributeValueObject
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.get_attribute_value_with_http_info(entity_id, attr_name, **kwargs)  # noqa: E501

    def get_attribute_value_with_http_info(self, entity_id, attr_name, **kwargs):  # noqa: E501
        """get_attribute_value  # noqa: E501

        This operation returns the `value` property with the value of the attribute. * If attribute value is JSON Array or Object:   * If `Accept` header can be expanded to `application/json` or     `text/plain` return the value as a JSON with a response type of     application/json or text/plain (whichever is the first in `Accept`     header or `application/json` in the case of `Accept: */*`).   * Else return a HTTP error \"406 Not Acceptable: accepted MIME types:     application/json, text/plain\" * If attribute value is a string, number, null or boolean:   * If `Accept` header can be expanded to text/plain return the value     as text. In case of a string, citation     marks are used at the begining and end.   * Else return a HTTP error     \"406 Not Acceptable: accepted MIME types: text/plain\" Response: * Successful operation uses 200 OK. * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_attribute_value_with_http_info(entity_id, attr_name, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str entity_id: Id of the entity in question (required)
        :param str attr_name: Name of the attribute to be retrieved. (required)
        :param str fiware_service: When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
        :param str fiware_service_path: Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
        :param str type: Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(AttributeValueObject, status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = ['entity_id', 'attr_name', 'fiware_service', 'fiware_service_path', 'type']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_attribute_value" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'entity_id' is set
        if ('entity_id' not in local_var_params or
                local_var_params['entity_id'] is None):
            raise ApiValueError("Missing the required parameter `entity_id` when calling `get_attribute_value`")  # noqa: E501
        # verify the required parameter 'attr_name' is set
        if ('attr_name' not in local_var_params or
                local_var_params['attr_name'] is None):
            raise ApiValueError("Missing the required parameter `attr_name` when calling `get_attribute_value`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'entity_id' in local_var_params:
            path_params['entityId'] = local_var_params['entity_id']  # noqa: E501
        if 'attr_name' in local_var_params:
            path_params['attrName'] = local_var_params['attr_name']  # noqa: E501

        query_params = []
        if 'type' in local_var_params:
            query_params.append(('type', local_var_params['type']))  # noqa: E501

        header_params = {}
        if 'fiware_service' in local_var_params:
            header_params['Fiware-Service'] = local_var_params['fiware_service']  # noqa: E501
        if 'fiware_service_path' in local_var_params:
            header_params['Fiware-ServicePath'] = local_var_params['fiware_service_path']  # noqa: E501

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json', 'plain/text'])  # noqa: E501

        # Authentication setting
        auth_settings = ['ApiKeyAuth', 'BearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/entities/{entityId}/attrs/{attrName}/value', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='AttributeValueObject',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def update_attribute_value(self, entity_id, attr_name, request_body, **kwargs):  # noqa: E501
        """update_attribute_value  # noqa: E501

        The request payload is the new attribute value. * If the request payload MIME type is `application/json`,   then the value of the attribute is set to   the JSON object or array coded in the payload (if the payload   is not a valid JSON document, then an error is returned). * If the request payload MIME type is `text/plain`, then the following   algorithm is applied to the payload:   * If the payload starts and ends with citation-marks (`\"`), the value     is taken as a string (the citation marks themselves are not     considered part of the string)   * If `true` or `false`, the value is taken as a boolean.   * If `null`, the value is taken as null.   * If these first three tests 'fail', the text is interpreted as     a number.   * If not a valid number, then an error is returned and the attribute's     value is unchanged.  The payload MIME type in the request is specified in the `Content-Type` HTTP header. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.update_attribute_value(entity_id, attr_name, request_body, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str entity_id: Id of the entity to be updated. (required)
        :param str attr_name: Attribute name. (required)
        :param dict(str, object) request_body: (required)
        :param str fiware_service: When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
        :param str fiware_service_path: Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
        :param str type: Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
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
        return self.update_attribute_value_with_http_info(entity_id, attr_name, request_body, **kwargs)  # noqa: E501

    def update_attribute_value_with_http_info(self, entity_id, attr_name, request_body, **kwargs):  # noqa: E501
        """update_attribute_value  # noqa: E501

        The request payload is the new attribute value. * If the request payload MIME type is `application/json`,   then the value of the attribute is set to   the JSON object or array coded in the payload (if the payload   is not a valid JSON document, then an error is returned). * If the request payload MIME type is `text/plain`, then the following   algorithm is applied to the payload:   * If the payload starts and ends with citation-marks (`\"`), the value     is taken as a string (the citation marks themselves are not     considered part of the string)   * If `true` or `false`, the value is taken as a boolean.   * If `null`, the value is taken as null.   * If these first three tests 'fail', the text is interpreted as     a number.   * If not a valid number, then an error is returned and the attribute's     value is unchanged.  The payload MIME type in the request is specified in the `Content-Type` HTTP header. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.update_attribute_value_with_http_info(entity_id, attr_name, request_body, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str entity_id: Id of the entity to be updated. (required)
        :param str attr_name: Attribute name. (required)
        :param dict(str, object) request_body: (required)
        :param str fiware_service: When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
        :param str fiware_service_path: Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
        :param str type: Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
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

        all_params = ['entity_id', 'attr_name', 'request_body', 'fiware_service', 'fiware_service_path', 'type']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method update_attribute_value" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'entity_id' is set
        if ('entity_id' not in local_var_params or
                local_var_params['entity_id'] is None):
            raise ApiValueError("Missing the required parameter `entity_id` when calling `update_attribute_value`")  # noqa: E501
        # verify the required parameter 'attr_name' is set
        if ('attr_name' not in local_var_params or
                local_var_params['attr_name'] is None):
            raise ApiValueError("Missing the required parameter `attr_name` when calling `update_attribute_value`")  # noqa: E501
        # verify the required parameter 'request_body' is set
        if ('request_body' not in local_var_params or
                local_var_params['request_body'] is None):
            raise ApiValueError("Missing the required parameter `request_body` when calling `update_attribute_value`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'entity_id' in local_var_params:
            path_params['entityId'] = local_var_params['entity_id']  # noqa: E501
        if 'attr_name' in local_var_params:
            path_params['attrName'] = local_var_params['attr_name']  # noqa: E501

        query_params = []
        if 'type' in local_var_params:
            query_params.append(('type', local_var_params['type']))  # noqa: E501

        header_params = {}
        if 'fiware_service' in local_var_params:
            header_params['Fiware-Service'] = local_var_params['fiware_service']  # noqa: E501
        if 'fiware_service_path' in local_var_params:
            header_params['Fiware-ServicePath'] = local_var_params['fiware_service_path']  # noqa: E501

        form_params = []
        local_var_files = {}

        body_params = None
        if 'request_body' in local_var_params:
            body_params = local_var_params['request_body']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json', 'plain/text'])  # noqa: E501

        # Authentication setting
        auth_settings = ['ApiKeyAuth', 'BearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/entities/{entityId}/attrs/{attrName}/value', 'PUT',
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
