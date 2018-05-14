var express = require('express');

// api
var router = express.Router();
// middleware to avoid router from stopping halfway
router.use(function(req, res, next){
    next();
});
router.get('/',
  function(req, res) {
    res.json({
      message: "hello, RESTful!"
    });
  });
router.route('/objects')
  .get(function(req, res){
    // query: /api/objects/?property=textValue&propertyarray=textValue0&propertyarray=textValue1
    var query = req.query;
    var objects = [];
    // if (query.isInvalid) 400 BAD REQUEST
    // if (isNoAuthIntormation) 401 UNAUTHORIZED
    // if (isNoRights) 403 FORBIDDEN
    var statusCode = 200; // 200 OK, no matter result is empty or not
    res.status(statusCode);
    res.json(objects);
  })
  .post(function(req, res){
    var body = req.body;
    var object = {};
    // if (body.isInvalid) 400 BAD REQUEST
    // if (isNoAuthIntormation) 401 UNAUTHORIZED
    // if (isNoRights) 403 FORBIDDEN
    // if (body.isConflict) 409 CONFLICT
    var statusCode = 201; // 201 CREATED
    res.status(statusCode);
    res.json(object); // or requrn object identifier
  })
  .put(function(req, res){
    // not allowed, unless you want to update/replace every resource in the entire collection
    var statusCode = 405; // 405 METHOD NOT ALLOWED
    res.status(statusCode);
    res.json();
  })
  .patch(function(req, res){
    // not allowed, unless you want to update/modify every resource in the entire collection
    var statusCode = 405; // 405 METHOD NOT ALLOWED
    res.status(statusCode);
    res.json();
  })
  .delete(function(req, res){
    // not allowed, unless you want to delete the whole collection—not often desirable
    var statusCode = 405; // 405 METHOD NOT ALLOWED
    res.status(statusCode);
    res.json();
  });
router.route('/objects/:objectId')
  .get(function(req, res){
    var objectId = req.params.objectId;
    var object = {};
    // if (objectId.isNotFound) 404 NOT FOUND
    // if (isNoAuthIntormation) 401 UNAUTHORIZED
    // if (isNoRights) 403 FORBIDDEN
    var statusCode = 200; // 200 OK
    res.status(statusCode);
    res.json(object);
  })
  .post(function(req, res){
    // not allowed
    var statusCode = 405; // 405 METHOD NOT ALLOWED
    res.status(statusCode);
    res.json();
  })
  .put(function(req, res){
    var objectId = req.params.objectId;
    var body = req.body;
    // if (body.isInvalid) 400 BAD REQUEST
    // if (objectId.isNotFound) 404 NOT FOUND
    // if (isNoAuthIntormation) 401 UNAUTHORIZED
    // if (isNoRights) 403 FORBIDDEN
    var statusCode = 204; // 204 NO CONTENT, indicating the object has been replaced by entire object.
    res.status(statusCode);
    res.json();
  })
  .patch(function(req, res){
    var objectId = req.params.objectId;
    var body = req.body;
    // if (body.isInvalid) 400 BAD REQUEST
    // if (objectId.isNotFound) 404 NOT FOUND
    // if (isNoAuthIntormation) 401 UNAUTHORIZED
    // if (isNoRights) 403 FORBIDDEN
    var statusCode = 204; // 204 NO CONTENT, indicating the object has been modified on specific properties.
    res.status(statusCode);
    res.json();
  })
  .delete(function(req, res){
    var objectId = req.params.objectId;
    // if (objectId.isNotFound) 404 NOT FOUND
    // if (isNoAuthIntormation) 401 UNAUTHORIZED
    // if (isNoRights) 403 FORBIDDEN
    var statusCode = 204; // 204 NO CONTENT, indicating the object has been deleted.
    res.status(statusCode);
    res.json();
  });

  module.exports = router;