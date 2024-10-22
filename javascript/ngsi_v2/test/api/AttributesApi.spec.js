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
    instance = new NgsiV2.AttributesApi();
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

  describe('AttributesApi', function() {
    describe('getAttributeData', function() {
      it('should call getAttributeData successfully', function(done) {
        //uncomment below and update the code to test getAttributeData
        //instance.getAttributeData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeASingleAttribute', function() {
      it('should call removeASingleAttribute successfully', function(done) {
        //uncomment below and update the code to test removeASingleAttribute
        //instance.removeASingleAttribute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAttributeData', function() {
      it('should call updateAttributeData successfully', function(done) {
        //uncomment below and update the code to test updateAttributeData
        //instance.updateAttributeData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});
