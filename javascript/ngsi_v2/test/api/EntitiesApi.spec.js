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
    instance = new NgsiV2.EntitiesApi();
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

  describe('EntitiesApi', function() {
    describe('createEntity', function() {
      it('should call createEntity successfully', function(done) {
        //uncomment below and update the code to test createEntity
        //instance.createEntity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listEntities', function() {
      it('should call listEntities successfully', function(done) {
        //uncomment below and update the code to test listEntities
        //instance.listEntities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeEntity', function() {
      it('should call removeEntity successfully', function(done) {
        //uncomment below and update the code to test removeEntity
        //instance.removeEntity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAllEntityAttributes', function() {
      it('should call replaceAllEntityAttributes successfully', function(done) {
        //uncomment below and update the code to test replaceAllEntityAttributes
        //instance.replaceAllEntityAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveEntity', function() {
      it('should call retrieveEntity successfully', function(done) {
        //uncomment below and update the code to test retrieveEntity
        //instance.retrieveEntity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveEntityAttributes', function() {
      it('should call retrieveEntityAttributes successfully', function(done) {
        //uncomment below and update the code to test retrieveEntityAttributes
        //instance.retrieveEntityAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateExistingEntityAttributes', function() {
      it('should call updateExistingEntityAttributes successfully', function(done) {
        //uncomment below and update the code to test updateExistingEntityAttributes
        //instance.updateExistingEntityAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrAppendEntityAttributes', function() {
      it('should call updateOrAppendEntityAttributes successfully', function(done) {
        //uncomment below and update the code to test updateOrAppendEntityAttributes
        //instance.updateOrAppendEntityAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});
