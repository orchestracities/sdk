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


class SubscriptionBodySubjectConditions(object):
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
        'attrs': 'list[str]',
        'expression': 'BatchQueryExpression'
    }

    attribute_map = {
        'attrs': 'attrs',
        'expression': 'expression'
    }

    def __init__(self, attrs=None, expression=None):  # noqa: E501
        """SubscriptionBodySubjectConditions - a model defined in OpenAPI"""  # noqa: E501

        self._attrs = None
        self._expression = None
        self.discriminator = None

        if attrs is not None:
            self.attrs = attrs
        if expression is not None:
            self.expression = expression

    @property
    def attrs(self):
        """Gets the attrs of this SubscriptionBodySubjectConditions.  # noqa: E501


        :return: The attrs of this SubscriptionBodySubjectConditions.  # noqa: E501
        :rtype: list[str]
        """
        return self._attrs

    @attrs.setter
    def attrs(self, attrs):
        """Sets the attrs of this SubscriptionBodySubjectConditions.


        :param attrs: The attrs of this SubscriptionBodySubjectConditions.  # noqa: E501
        :type: list[str]
        """

        self._attrs = attrs

    @property
    def expression(self):
        """Gets the expression of this SubscriptionBodySubjectConditions.  # noqa: E501


        :return: The expression of this SubscriptionBodySubjectConditions.  # noqa: E501
        :rtype: BatchQueryExpression
        """
        return self._expression

    @expression.setter
    def expression(self, expression):
        """Sets the expression of this SubscriptionBodySubjectConditions.


        :param expression: The expression of this SubscriptionBodySubjectConditions.  # noqa: E501
        :type: BatchQueryExpression
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
        if not isinstance(other, SubscriptionBodySubjectConditions):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other