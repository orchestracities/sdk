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


class RegistrationsApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def create_registrations(self, registration_body, **kwargs):  # noqa: E501
        """create_registrations  # noqa: E501

        Creates a new context provider registration. This is typically used for binding context sources as providers of certain data. The registration is represented by a JSON object as described at the beginning of this section. Response: * Successful operation uses 201 Created * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.create_registrations(registration_body, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param RegistrationBody registration_body: (required)
        :param str fiware_service:
        :param str fiware_service_path:
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
        return self.create_registrations_with_http_info(registration_body, **kwargs)  # noqa: E501

    def create_registrations_with_http_info(self, registration_body, **kwargs):  # noqa: E501
        """create_registrations  # noqa: E501

        Creates a new context provider registration. This is typically used for binding context sources as providers of certain data. The registration is represented by a JSON object as described at the beginning of this section. Response: * Successful operation uses 201 Created * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.create_registrations_with_http_info(registration_body, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param RegistrationBody registration_body: (required)
        :param str fiware_service:
        :param str fiware_service_path:
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

        all_params = ['registration_body', 'fiware_service', 'fiware_service_path']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method create_registrations" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'registration_body' is set
        if ('registration_body' not in local_var_params or
                local_var_params['registration_body'] is None):
            raise ApiValueError("Missing the required parameter `registration_body` when calling `create_registrations`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}
        if 'fiware_service' in local_var_params:
            header_params['Fiware-Service'] = local_var_params['fiware_service']  # noqa: E501
        if 'fiware_service_path' in local_var_params:
            header_params['Fiware-ServicePath'] = local_var_params['fiware_service_path']  # noqa: E501

        form_params = []
        local_var_files = {}

        body_params = None
        if 'registration_body' in local_var_params:
            body_params = local_var_params['registration_body']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['ApiKeyAuth', 'BearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/registrations', 'POST',
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

    def delete_registration(self, registration_id, **kwargs):  # noqa: E501
        """delete_registration  # noqa: E501

        Cancels a context provider registration. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.delete_registration(registration_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str registration_id: registration Id. (required)
        :param str fiware_service:
        :param str fiware_service_path:
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
        return self.delete_registration_with_http_info(registration_id, **kwargs)  # noqa: E501

    def delete_registration_with_http_info(self, registration_id, **kwargs):  # noqa: E501
        """delete_registration  # noqa: E501

        Cancels a context provider registration. Response: * Successful operation uses 204 No Content * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.delete_registration_with_http_info(registration_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str registration_id: registration Id. (required)
        :param str fiware_service:
        :param str fiware_service_path:
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

        all_params = ['registration_id', 'fiware_service', 'fiware_service_path']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method delete_registration" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'registration_id' is set
        if ('registration_id' not in local_var_params or
                local_var_params['registration_id'] is None):
            raise ApiValueError("Missing the required parameter `registration_id` when calling `delete_registration`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'registration_id' in local_var_params:
            path_params['registrationId'] = local_var_params['registration_id']  # noqa: E501

        query_params = []

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
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['ApiKeyAuth', 'BearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/registrations/{registrationId}', 'DELETE',
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

    def retrieve_registration(self, registration_id, **kwargs):  # noqa: E501
        """retrieve_registration  # noqa: E501

        The response is the registration represented by a JSON object as described at the beginning of this section. Response: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.retrieve_registration(registration_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str registration_id: registration Id. (required)
        :param str fiware_service:
        :param str fiware_service_path:
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: Registration
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.retrieve_registration_with_http_info(registration_id, **kwargs)  # noqa: E501

    def retrieve_registration_with_http_info(self, registration_id, **kwargs):  # noqa: E501
        """retrieve_registration  # noqa: E501

        The response is the registration represented by a JSON object as described at the beginning of this section. Response: * Successful operation uses 200 OK * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.retrieve_registration_with_http_info(registration_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str registration_id: registration Id. (required)
        :param str fiware_service:
        :param str fiware_service_path:
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(Registration, status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = ['registration_id', 'fiware_service', 'fiware_service_path']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method retrieve_registration" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'registration_id' is set
        if ('registration_id' not in local_var_params or
                local_var_params['registration_id'] is None):
            raise ApiValueError("Missing the required parameter `registration_id` when calling `retrieve_registration`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'registration_id' in local_var_params:
            path_params['registrationId'] = local_var_params['registration_id']  # noqa: E501

        query_params = []

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
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['ApiKeyAuth', 'BearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/registrations/{registrationId}', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='Registration',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def retrieve_registrations(self, **kwargs):  # noqa: E501
        """retrieve_registrations  # noqa: E501

        Lists all the context provider registrations present in the system.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.retrieve_registrations(async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str fiware_service:
        :param str fiware_service_path:
        :param int limit: Limit the number of types to be retrieved
        :param int offset: Skip a number of records
        :param str options: Options dictionary
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: list[Registration]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.retrieve_registrations_with_http_info(**kwargs)  # noqa: E501

    def retrieve_registrations_with_http_info(self, **kwargs):  # noqa: E501
        """retrieve_registrations  # noqa: E501

        Lists all the context provider registrations present in the system.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.retrieve_registrations_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str fiware_service:
        :param str fiware_service_path:
        :param int limit: Limit the number of types to be retrieved
        :param int offset: Skip a number of records
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
        :return: tuple(list[Registration], status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = ['fiware_service', 'fiware_service_path', 'limit', 'offset', 'options']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method retrieve_registrations" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []
        if 'limit' in local_var_params:
            query_params.append(('limit', local_var_params['limit']))  # noqa: E501
        if 'offset' in local_var_params:
            query_params.append(('offset', local_var_params['offset']))  # noqa: E501
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
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['ApiKeyAuth', 'BearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/registrations', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[Registration]',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def update_registration(self, registration_id, registration_body, **kwargs):  # noqa: E501
        """update_registration  # noqa: E501

        Creates a new context provider registration. This is typically used for binding context sources as providers of certain data. The registration is represented by a JSON object as described at the beginning of this section. Response: * Successful operation uses 201 Created * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.update_registration(registration_id, registration_body, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str registration_id: registration Id. (required)
        :param RegistrationBody registration_body: (required)
        :param str fiware_service:
        :param str fiware_service_path:
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
        return self.update_registration_with_http_info(registration_id, registration_body, **kwargs)  # noqa: E501

    def update_registration_with_http_info(self, registration_id, registration_body, **kwargs):  # noqa: E501
        """update_registration  # noqa: E501

        Creates a new context provider registration. This is typically used for binding context sources as providers of certain data. The registration is represented by a JSON object as described at the beginning of this section. Response: * Successful operation uses 201 Created * Errors use a non-2xx and (optionally) an error payload. See subsection   on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable)   for more details.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.update_registration_with_http_info(registration_id, registration_body, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str registration_id: registration Id. (required)
        :param RegistrationBody registration_body: (required)
        :param str fiware_service:
        :param str fiware_service_path:
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

        all_params = ['registration_id', 'registration_body', 'fiware_service', 'fiware_service_path']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method update_registration" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'registration_id' is set
        if ('registration_id' not in local_var_params or
                local_var_params['registration_id'] is None):
            raise ApiValueError("Missing the required parameter `registration_id` when calling `update_registration`")  # noqa: E501
        # verify the required parameter 'registration_body' is set
        if ('registration_body' not in local_var_params or
                local_var_params['registration_body'] is None):
            raise ApiValueError("Missing the required parameter `registration_body` when calling `update_registration`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'registration_id' in local_var_params:
            path_params['registrationId'] = local_var_params['registration_id']  # noqa: E501

        query_params = []

        header_params = {}
        if 'fiware_service' in local_var_params:
            header_params['Fiware-Service'] = local_var_params['fiware_service']  # noqa: E501
        if 'fiware_service_path' in local_var_params:
            header_params['Fiware-ServicePath'] = local_var_params['fiware_service_path']  # noqa: E501

        form_params = []
        local_var_files = {}

        body_params = None
        if 'registration_body' in local_var_params:
            body_params = local_var_params['registration_body']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['ApiKeyAuth', 'BearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/registrations/{registrationId}', 'PATCH',
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
