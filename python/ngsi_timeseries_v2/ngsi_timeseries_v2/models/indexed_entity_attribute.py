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


class IndexedEntityAttribute(object):
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
        'values': 'ValuesArray',
        'index': 'IndexArray',
        'entity_id': 'str',
        'attr_name': 'str'
    }

    attribute_map = {
        'values': 'values',
        'index': 'index',
        'entity_id': 'entityId',
        'attr_name': 'attrName'
    }

    def __init__(self, values=None, index=None, entity_id=None, attr_name=None):  # noqa: E501
        """IndexedEntityAttribute - a model defined in OpenAPI"""  # noqa: E501

        self._values = None
        self._index = None
        self._entity_id = None
        self._attr_name = None
        self.discriminator = None

        if values is not None:
            self.values = values
        if index is not None:
            self.index = index
        if entity_id is not None:
            self.entity_id = entity_id
        if attr_name is not None:
            self.attr_name = attr_name

    @property
    def values(self):
        """Gets the values of this IndexedEntityAttribute.  # noqa: E501


        :return: The values of this IndexedEntityAttribute.  # noqa: E501
        :rtype: ValuesArray
        """
        return self._values

    @values.setter
    def values(self, values):
        """Sets the values of this IndexedEntityAttribute.


        :param values: The values of this IndexedEntityAttribute.  # noqa: E501
        :type: ValuesArray
        """

        self._values = values

    @property
    def index(self):
        """Gets the index of this IndexedEntityAttribute.  # noqa: E501


        :return: The index of this IndexedEntityAttribute.  # noqa: E501
        :rtype: IndexArray
        """
        return self._index

    @index.setter
    def index(self, index):
        """Sets the index of this IndexedEntityAttribute.


        :param index: The index of this IndexedEntityAttribute.  # noqa: E501
        :type: IndexArray
        """

        self._index = index

    @property
    def entity_id(self):
        """Gets the entity_id of this IndexedEntityAttribute.  # noqa: E501


        :return: The entity_id of this IndexedEntityAttribute.  # noqa: E501
        :rtype: str
        """
        return self._entity_id

    @entity_id.setter
    def entity_id(self, entity_id):
        """Sets the entity_id of this IndexedEntityAttribute.


        :param entity_id: The entity_id of this IndexedEntityAttribute.  # noqa: E501
        :type: str
        """

        self._entity_id = entity_id

    @property
    def attr_name(self):
        """Gets the attr_name of this IndexedEntityAttribute.  # noqa: E501


        :return: The attr_name of this IndexedEntityAttribute.  # noqa: E501
        :rtype: str
        """
        return self._attr_name

    @attr_name.setter
    def attr_name(self, attr_name):
        """Sets the attr_name of this IndexedEntityAttribute.


        :param attr_name: The attr_name of this IndexedEntityAttribute.  # noqa: E501
        :type: str
        """

        self._attr_name = attr_name

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
        if not isinstance(other, IndexedEntityAttribute):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
