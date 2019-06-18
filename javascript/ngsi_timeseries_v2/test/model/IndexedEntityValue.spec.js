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
    instance = new NgsiTimeseriesV2.IndexedEntityValue();
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

  describe('IndexedEntityValue', function() {
    it('should create an instance of IndexedEntityValue', function() {
      // uncomment below and update the code to test IndexedEntityValue
      //var instane = new NgsiTimeseriesV2.IndexedEntityValue();
      //expect(instance).to.be.a(NgsiTimeseriesV2.IndexedEntityValue);
    });

    it('should have the property values (base name: "values")', function() {
      // uncomment below and update the code to test the property values
      //var instane = new NgsiTimeseriesV2.IndexedEntityValue();
      //expect(instance).to.be();
    });

    it('should have the property index (base name: "index")', function() {
      // uncomment below and update the code to test the property index
      //var instane = new NgsiTimeseriesV2.IndexedEntityValue();
      //expect(instance).to.be();
    });
  });
});