# coding: utf-8

"""
    ngsi_timeseries_v2

    QuantumLeap API  # noqa: E501

    The version of the OpenAPI document: 0.1.2
    Contact: info@orchestracities.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six


class Notification(object):
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
        'subscription_id': 'str',
        'data': 'list[Entity]'
    }

    attribute_map = {
        'subscription_id': 'subscriptionId',
        'data': 'data'
    }

    def __init__(self, subscription_id=None, data=None):  # noqa: E501
        """Notification - a model defined in OpenAPI"""  # noqa: E501

        self._subscription_id = None
        self._data = None
        self.discriminator = None

        if subscription_id is not None:
            self.subscription_id = subscription_id
        self.data = data

    @property
    def subscription_id(self):
        """Gets the subscription_id of this Notification.  # noqa: E501


        :return: The subscription_id of this Notification.  # noqa: E501
        :rtype: str
        """
        return self._subscription_id

    @subscription_id.setter
    def subscription_id(self, subscription_id):
        """Sets the subscription_id of this Notification.


        :param subscription_id: The subscription_id of this Notification.  # noqa: E501
        :type: str
        """

        self._subscription_id = subscription_id

    @property
    def data(self):
        """Gets the data of this Notification.  # noqa: E501


        :return: The data of this Notification.  # noqa: E501
        :rtype: list[Entity]
        """
        return self._data

    @data.setter
    def data(self, data):
        """Sets the data of this Notification.


        :param data: The data of this Notification.  # noqa: E501
        :type: list[Entity]
        """
        if data is None:
            raise ValueError("Invalid value for `data`, must not be `None`")  # noqa: E501

        self._data = data

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
        if not isinstance(other, Notification):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other