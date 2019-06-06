/**
 * ngsi_v2
 * NGSI V2 API RC-2018.07
 *
 * The version of the OpenAPI document: 0.2.2
 *
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
    factory(root.expect, root.NgsiV2);
  }
})(this, function(expect, NgsiV2) {
  let instance;

  beforeEach(function() {
    instance = new NgsiV2.BatchNotify();
  });

  const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') {
      return object[getter]();
    }
    return object[property];
  };

  const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') {
      object[setter](value);
    } else {
      object[property] = value;
    }
  };

  describe('BatchNotify', function() {
    it('should create an instance of BatchNotify', function() {
      // uncomment below and update the code to test BatchNotify
      //var instane = new NgsiV2.BatchNotify();
      //expect(instance).to.be.a(NgsiV2.BatchNotify);
    });

    it('should have the property subscriptionId (base name: "subscriptionId")', function() {
      // uncomment below and update the code to test the property subscriptionId
      //var instane = new NgsiV2.BatchNotify();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instane = new NgsiV2.BatchNotify();
      //expect(instance).to.be();
    });
  });
});
