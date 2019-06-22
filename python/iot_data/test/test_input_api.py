# coding: utf-8

"""
    iot_data

    IoT Data  # noqa: E501

    The version of the OpenAPI document: 1.9.0
    Contact: info@orchestracities.com
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest

import iot_data
from iot_data.api.input_api import InputApi  # noqa: E501
from iot_data.rest import ApiException


class TestInputApi(unittest.TestCase):
    """InputApi unit test stubs"""

    def setUp(self):
        self.api = iot_data.api.input_api.InputApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_json_data(self):
        """Test case for json_data

        Send data to a device using JSON  # noqa: E501
        """
        pass

    def test_ul_data(self):
        """Test case for ul_data

        Send data to a device using UL2.0  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()