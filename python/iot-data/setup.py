# coding: utf-8

"""
    iot-data

    IoT Data  # noqa: E501

    The version of the OpenAPI document: 1.9.0
    Contact: info@orchestracities.com
    Generated by: https://openapi-generator.tech
"""


from setuptools import setup, find_packages  # noqa: H301

NAME = "iot-data"
VERSION = "1.0.0"
# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

REQUIRES = ["urllib3 >= 1.15", "six >= 1.10", "certifi", "python-dateutil"]

setup(
    name=NAME,
    version=VERSION,
    description="iot-data",
    author_email="info@orchestracities.com",
    url="",
    keywords=["OpenAPI", "OpenAPI-Generator", "iot-data"],
    install_requires=REQUIRES,
    packages=find_packages(),
    include_package_data=True,
    long_description="""\
    IoT Data  # noqa: E501
    """
)
