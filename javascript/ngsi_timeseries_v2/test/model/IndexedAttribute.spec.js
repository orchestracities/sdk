/**
 * ngsi_timeseries_v2
 * QuantumLeap API
 *
 * The version of the OpenAPI document: 0.1.2
 * Contact: info@orchestracities.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd() + '/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd() + '/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NgsiTimeseriesV2);
  }
})(this, function(expect, NgsiTimeseriesV2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NgsiTimeseriesV2.IndexedAttribute();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') return object[getter]();
    else return object[property];
  };

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') object[setter](value);
    else object[property] = value;
  };

  describe('IndexedAttribute', function() {
    it('should create an instance of IndexedAttribute', function() {
      // uncomment below and update the code to test IndexedAttribute
      //var instane = new NgsiTimeseriesV2.IndexedAttribute();
      //expect(instance).to.be.a(NgsiTimeseriesV2.IndexedAttribute);
    });

    it('should have the property types (base name: "types")', function() {
      // uncomment below and update the code to test the property types
      //var instane = new NgsiTimeseriesV2.IndexedAttribute();
      //expect(instance).to.be();
    });

    it('should have the property attrName (base name: "attrName")', function() {
      // uncomment below and update the code to test the property attrName
      //var instane = new NgsiTimeseriesV2.IndexedAttribute();
      //expect(instance).to.be();
    });
  });
});
