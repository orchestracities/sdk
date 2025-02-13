# coding: utf-8

"""
    ngsi_v2

    NGSI V2 API RC-2018.07  # noqa: E501

    The version of the OpenAPI document: 0.2.2
    Contact: info@orchestracities.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six


class Provider(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'http': 'SubscriptionBodyNotificationHttp',
        'supported_forwarding_mode': 'str'
    }

    attribute_map = {
        'http': 'http',
        'supported_forwarding_mode': 'supportedForwardingMode'
    }

    def __init__(self, http=None, supported_forwarding_mode=None):  # noqa: E501
        """Provider - a model defined in OpenAPI"""  # noqa: E501

        self._http = None
        self._supported_forwarding_mode = None
        self.discriminator = None

        if http is not None:
            self.http = http
        if supported_forwarding_mode is not None:
            self.supported_forwarding_mode = supported_forwarding_mode

    @property
    def http(self):
        """Gets the http of this Provider.  # noqa: E501


        :return: The http of this Provider.  # noqa: E501
        :rtype: SubscriptionBodyNotificationHttp
        """
        return self._http

    @http.setter
    def http(self, http):
        """Sets the http of this Provider.


        :param http: The http of this Provider.  # noqa: E501
        :type: SubscriptionBodyNotificationHttp
        """

        self._http = http

    @property
    def supported_forwarding_mode(self):
        """Gets the supported_forwarding_mode of this Provider.  # noqa: E501


        :return: The supported_forwarding_mode of this Provider.  # noqa: E501
        :rtype: str
        """
        return self._supported_forwarding_mode

    @supported_forwarding_mode.setter
    def supported_forwarding_mode(self, supported_forwarding_mode):
        """Sets the supported_forwarding_mode of this Provider.


        :param supported_forwarding_mode: The supported_forwarding_mode of this Provider.  # noqa: E501
        :type: str
        """
        allowed_values = ["none", "query", "update", "all"]  # noqa: E501
        if supported_forwarding_mode not in allowed_values:
            raise ValueError(
                "Invalid value for `supported_forwarding_mode` ({0}), must be one of {1}"  # noqa: E501
                .format(supported_forwarding_mode, allowed_values)
            )

        self._supported_forwarding_mode = supported_forwarding_mode

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, Provider):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
