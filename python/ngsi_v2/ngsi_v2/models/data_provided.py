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


class DataProvided(object):
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
        'entities': 'list[QueryPattern]',
        'attributes': 'list[str]',
        'expression': 'DataProvidedExpression'
    }

    attribute_map = {
        'entities': 'entities',
        'attributes': 'attributes',
        'expression': 'expression'
    }

    def __init__(self, entities=None, attributes=None, expression=None):  # noqa: E501
        """DataProvided - a model defined in OpenAPI"""  # noqa: E501

        self._entities = None
        self._attributes = None
        self._expression = None
        self.discriminator = None

        if entities is not None:
            self.entities = entities
        if attributes is not None:
            self.attributes = attributes
        if expression is not None:
            self.expression = expression

    @property
    def entities(self):
        """Gets the entities of this DataProvided.  # noqa: E501


        :return: The entities of this DataProvided.  # noqa: E501
        :rtype: list[QueryPattern]
        """
        return self._entities

    @entities.setter
    def entities(self, entities):
        """Sets the entities of this DataProvided.


        :param entities: The entities of this DataProvided.  # noqa: E501
        :type: list[QueryPattern]
        """

        self._entities = entities

    @property
    def attributes(self):
        """Gets the attributes of this DataProvided.  # noqa: E501


        :return: The attributes of this DataProvided.  # noqa: E501
        :rtype: list[str]
        """
        return self._attributes

    @attributes.setter
    def attributes(self, attributes):
        """Sets the attributes of this DataProvided.


        :param attributes: The attributes of this DataProvided.  # noqa: E501
        :type: list[str]
        """

        self._attributes = attributes

    @property
    def expression(self):
        """Gets the expression of this DataProvided.  # noqa: E501


        :return: The expression of this DataProvided.  # noqa: E501
        :rtype: DataProvidedExpression
        """
        return self._expression

    @expression.setter
    def expression(self, expression):
        """Sets the expression of this DataProvided.


        :param expression: The expression of this DataProvided.  # noqa: E501
        :type: DataProvidedExpression
        """

        self._expression = expression

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
        if not isinstance(other, DataProvided):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other