# coding: utf-8

"""
    ngsi_v2

    NGSI V2 API RC-2018.07  # noqa: E501

    The version of the OpenAPI document: 0.2.2
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest

import ngsi_v2
from ngsi_v2.api.api_entry_point_api import APIEntryPointApi  # noqa: E501
from ngsi_v2.rest import ApiException


class TestAPIEntryPointApi(unittest.TestCase):
    """APIEntryPointApi unit test stubs"""

    def setUp(self):
        self.api = ngsi_v2.api.api_entry_point_api.APIEntryPointApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_retrieve_api_resources(self):
        """Test case for retrieve_api_resources

        """
        pass


if __name__ == '__main__':
    unittest.main()
