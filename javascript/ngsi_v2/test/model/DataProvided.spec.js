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
    instance = new NgsiV2.DataProvided();
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

  describe('DataProvided', function() {
    it('should create an instance of DataProvided', function() {
      // uncomment below and update the code to test DataProvided
      //var instane = new NgsiV2.DataProvided();
      //expect(instance).to.be.a(NgsiV2.DataProvided);
    });

    it('should have the property entities (base name: "entities")', function() {
      // uncomment below and update the code to test the property entities
      //var instane = new NgsiV2.DataProvided();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new NgsiV2.DataProvided();
      //expect(instance).to.be();
    });

    it('should have the property expression (base name: "expression")', function() {
      // uncomment below and update the code to test the property expression
      //var instane = new NgsiV2.DataProvided();
      //expect(instance).to.be();
    });
  });
});
