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


class IndexedValues(object):
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
        'index': 'IndexArray',
        'values': 'ValuesArray'
    }

    attribute_map = {
        'index': 'index',
        'values': 'values'
    }

    def __init__(self, index=None, values=None):  # noqa: E501
        """IndexedValues - a model defined in OpenAPI"""  # noqa: E501

        self._index = None
        self._values = None
        self.discriminator = None

        if index is not None:
            self.index = index
        if values is not None:
            self.values = values

    @property
    def index(self):
        """Gets the index of this IndexedValues.  # noqa: E501


        :return: The index of this IndexedValues.  # noqa: E501
        :rtype: IndexArray
        """
        return self._index

    @index.setter
    def index(self, index):
        """Sets the index of this IndexedValues.


        :param index: The index of this IndexedValues.  # noqa: E501
        :type: IndexArray
        """

        self._index = index

    @property
    def values(self):
        """Gets the values of this IndexedValues.  # noqa: E501


        :return: The values of this IndexedValues.  # noqa: E501
        :rtype: ValuesArray
        """
        return self._values

    @values.setter
    def values(self, values):
        """Sets the values of this IndexedValues.


        :param values: The values of this IndexedValues.  # noqa: E501
        :type: ValuesArray
        """

        self._values = values

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
        if not isinstance(other, IndexedValues):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
