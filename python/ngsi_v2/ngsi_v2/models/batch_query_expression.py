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


class BatchQueryExpression(object):
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
        'q': 'str',
        'mq': 'str',
        'georel': 'str',
        'geometry': 'str',
        'coords': 'str'
    }

    attribute_map = {
        'q': 'q',
        'mq': 'mq',
        'georel': 'georel',
        'geometry': 'geometry',
        'coords': 'coords'
    }

    def __init__(self, q=None, mq=None, georel=None, geometry=None, coords=None):  # noqa: E501
        """BatchQueryExpression - a model defined in OpenAPI"""  # noqa: E501

        self._q = None
        self._mq = None
        self._georel = None
        self._geometry = None
        self._coords = None
        self.discriminator = None

        if q is not None:
            self.q = q
        if mq is not None:
            self.mq = mq
        if georel is not None:
            self.georel = georel
        if geometry is not None:
            self.geometry = geometry
        if coords is not None:
            self.coords = coords

    @property
    def q(self):
        """Gets the q of this BatchQueryExpression.  # noqa: E501


        :return: The q of this BatchQueryExpression.  # noqa: E501
        :rtype: str
        """
        return self._q

    @q.setter
    def q(self, q):
        """Sets the q of this BatchQueryExpression.


        :param q: The q of this BatchQueryExpression.  # noqa: E501
        :type: str
        """

        self._q = q

    @property
    def mq(self):
        """Gets the mq of this BatchQueryExpression.  # noqa: E501


        :return: The mq of this BatchQueryExpression.  # noqa: E501
        :rtype: str
        """
        return self._mq

    @mq.setter
    def mq(self, mq):
        """Sets the mq of this BatchQueryExpression.


        :param mq: The mq of this BatchQueryExpression.  # noqa: E501
        :type: str
        """

        self._mq = mq

    @property
    def georel(self):
        """Gets the georel of this BatchQueryExpression.  # noqa: E501


        :return: The georel of this BatchQueryExpression.  # noqa: E501
        :rtype: str
        """
        return self._georel

    @georel.setter
    def georel(self, georel):
        """Sets the georel of this BatchQueryExpression.


        :param georel: The georel of this BatchQueryExpression.  # noqa: E501
        :type: str
        """

        self._georel = georel

    @property
    def geometry(self):
        """Gets the geometry of this BatchQueryExpression.  # noqa: E501


        :return: The geometry of this BatchQueryExpression.  # noqa: E501
        :rtype: str
        """
        return self._geometry

    @geometry.setter
    def geometry(self, geometry):
        """Sets the geometry of this BatchQueryExpression.


        :param geometry: The geometry of this BatchQueryExpression.  # noqa: E501
        :type: str
        """

        self._geometry = geometry

    @property
    def coords(self):
        """Gets the coords of this BatchQueryExpression.  # noqa: E501


        :return: The coords of this BatchQueryExpression.  # noqa: E501
        :rtype: str
        """
        return self._coords

    @coords.setter
    def coords(self, coords):
        """Sets the coords of this BatchQueryExpression.


        :param coords: The coords of this BatchQueryExpression.  # noqa: E501
        :type: str
        """

        self._coords = coords

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
        if not isinstance(other, BatchQueryExpression):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
