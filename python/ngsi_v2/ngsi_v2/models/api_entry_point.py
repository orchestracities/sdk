# coding: utf-8

"""
    ngsi_v2

    NGSI V2 API RC-2018.07  # noqa: E501

    The version of the OpenAPI document: 0.2.2
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six


class APIEntryPoint(object):
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
        'entities_url': 'str',
        'types_url': 'str',
        'subscriptions_url': 'str',
        'registrations_url': 'str'
    }

    attribute_map = {
        'entities_url': 'entities_url',
        'types_url': 'types_url',
        'subscriptions_url': 'subscriptions_url',
        'registrations_url': 'registrations_url'
    }

    def __init__(self, entities_url=None, types_url=None, subscriptions_url=None, registrations_url=None):  # noqa: E501
        """APIEntryPoint - a model defined in OpenAPI"""  # noqa: E501

        self._entities_url = None
        self._types_url = None
        self._subscriptions_url = None
        self._registrations_url = None
        self.discriminator = None

        self.entities_url = entities_url
        self.types_url = types_url
        self.subscriptions_url = subscriptions_url
        self.registrations_url = registrations_url

    @property
    def entities_url(self):
        """Gets the entities_url of this APIEntryPoint.  # noqa: E501

        URL which points to the entities resource  # noqa: E501

        :return: The entities_url of this APIEntryPoint.  # noqa: E501
        :rtype: str
        """
        return self._entities_url

    @entities_url.setter
    def entities_url(self, entities_url):
        """Sets the entities_url of this APIEntryPoint.

        URL which points to the entities resource  # noqa: E501

        :param entities_url: The entities_url of this APIEntryPoint.  # noqa: E501
        :type: str
        """
        if entities_url is None:
            raise ValueError("Invalid value for `entities_url`, must not be `None`")  # noqa: E501

        self._entities_url = entities_url

    @property
    def types_url(self):
        """Gets the types_url of this APIEntryPoint.  # noqa: E501

        URL which points to the types resource  # noqa: E501

        :return: The types_url of this APIEntryPoint.  # noqa: E501
        :rtype: str
        """
        return self._types_url

    @types_url.setter
    def types_url(self, types_url):
        """Sets the types_url of this APIEntryPoint.

        URL which points to the types resource  # noqa: E501

        :param types_url: The types_url of this APIEntryPoint.  # noqa: E501
        :type: str
        """
        if types_url is None:
            raise ValueError("Invalid value for `types_url`, must not be `None`")  # noqa: E501

        self._types_url = types_url

    @property
    def subscriptions_url(self):
        """Gets the subscriptions_url of this APIEntryPoint.  # noqa: E501

        URL which points to the subscriptions resource  # noqa: E501

        :return: The subscriptions_url of this APIEntryPoint.  # noqa: E501
        :rtype: str
        """
        return self._subscriptions_url

    @subscriptions_url.setter
    def subscriptions_url(self, subscriptions_url):
        """Sets the subscriptions_url of this APIEntryPoint.

        URL which points to the subscriptions resource  # noqa: E501

        :param subscriptions_url: The subscriptions_url of this APIEntryPoint.  # noqa: E501
        :type: str
        """
        if subscriptions_url is None:
            raise ValueError("Invalid value for `subscriptions_url`, must not be `None`")  # noqa: E501

        self._subscriptions_url = subscriptions_url

    @property
    def registrations_url(self):
        """Gets the registrations_url of this APIEntryPoint.  # noqa: E501

        URL which points to the registrations resource  # noqa: E501

        :return: The registrations_url of this APIEntryPoint.  # noqa: E501
        :rtype: str
        """
        return self._registrations_url

    @registrations_url.setter
    def registrations_url(self, registrations_url):
        """Sets the registrations_url of this APIEntryPoint.

        URL which points to the registrations resource  # noqa: E501

        :param registrations_url: The registrations_url of this APIEntryPoint.  # noqa: E501
        :type: str
        """
        if registrations_url is None:
            raise ValueError("Invalid value for `registrations_url`, must not be `None`")  # noqa: E501

        self._registrations_url = registrations_url

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
        if not isinstance(other, APIEntryPoint):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other