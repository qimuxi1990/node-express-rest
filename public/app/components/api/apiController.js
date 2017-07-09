angular.module('api')
  .controller('apiController', function($scope, $http) {
    var _this = this;
    this.apis = [{
      method: 'GET',
      url: '/api/objects/?property=textValue&propertyarray=textValue0&propertyarray=textValue1',
      curd: "Read",
      description: "Read a collection of resources, which can be filtered by query string.",
      isShowResponse: false,
      responses: [{
        statusCode: 200,
        text: "OK, no matter result is empty or not.",
        data: "an array of objects, or an empty array."
      }, {
        statusCode: 400,
        text: "BAD REQUEST, when query is not valid.",
        data: null
      }, {
        statusCode: 401,
        text: "UNAUTHORIZED, authorization information required for such request, but not provided.",
        data: null
      }, {
        statusCode: 403,
        text: "FORBIDDEN, authorization information provided but not allowed for such request, please check your right.",
        data: null
      }]
    }, {
      method: 'POST',
      url: '/api/objects',
      curd: "Create",
      description: "Create a new resource, whose information is provided in request body.",
      isShowResponse: false,
      responses: [{
        statusCode: 201,
        text: "CREATED",
        data: "the created object."
      }, {
        statusCode: 400,
        text: "BAD REQUEST, when resource information is not valid.",
        data: null
      }, {
        statusCode: 401,
        text: "UNAUTHORIZED, authorization information required for such request, but not provided.",
        data: null
      }, {
        statusCode: 403,
        text: "FORBIDDEN, authorization information provided but not allowed for such request, please check your right.",
        data: null
      }, {
        statusCode: 409,
        text: "CONFLICT, the resource provided has conflict information with the resources existing in the collection, such as duplicate id.",
        data: null
      }]
    }, {
      method: 'PUT',
      url: '/api/objects',
      curd: "Update/Replace",
      description: "Not allowed, unless you want to update/replace every resource in collection, which is usually not safe.",
      isShowResponse: false,
      responses: [{
        statusCode: 405,
        text: "METHOD NOT ALLOWED.",
        data: null
      }]
    }, {
      method: 'PATCH',
      url: '/api/objects',
      curd: "Update/Modify",
      description: "Not allowed, unless you want to update/modify every resource in collection, which is usually not safe.",
      isShowResponse: false,
      responses: [{
        statusCode: 405,
        text: "METHOD NOT ALLOWED.",
        data: null
      }]
    }, {
      method: 'DELETE',
      url: '/api/objects',
      curd: "Delete",
      description: "Not allowed, unless you want to delete every resource in collection, which is usually not safe.",
      isShowResponse: false,
      responses: [{
        statusCode: 405,
        text: "METHOD NOT ALLOWED.",
        data: null
      }]
    }, {
      method: 'GET',
      url: '/api/objects/:objectId',
      curd: "Read",
      description: "Read a specific resource (by an identifier).",
      isShowResponse: false,
      responses: [{
        statusCode: 200,
        text: "OK, get the target resource",
        data: "the target resource object."
      },{
        statusCode: 401,
        text: "UNAUTHORIZED, authorization information required for such request, but not provided.",
        data: null
      },{
        statusCode: 403,
        text: "FORBIDDEN, authorization information provided but not allowed for such request, please check your right.",
        data: null
      },{
        statusCode: 404,
        text: "NOT FOUND, no resource found for the given identifier",
        data: null
      }]
    }, {
      method: 'POST',
      url: '/api/objects/:objectId',
      curd: "Create",
      description: "Not allowed, creating a resource based on identifier is usually not the case.",
      isShowResponse: false,
      responses: [{
        statusCode: 405,
        text: "METHOD NOT ALLOWED",
        data: null
      }]
    }, {
      method: 'PUT',
      url: '/api/objects/:objectId',
      curd: "Update/Replace",
      description: "Update/Replace a specific resource (by an identifier).",
      isShowResponse: false,
      responses: [{
        statusCode: 204,
        text: "NO CONTENT, indicating the object has been replaced by entire object. You can also use 201 if you allows PUT to create, or use 200 if you return the updated/original object in response data.",
        data: null
      },{
        statusCode: 400,
        text: "BAD REQUEST, when resource information is not valid.",
        data: null
      },{
        statusCode: 401,
        text: "UNAUTHORIZED, authorization information required for such request, but not provided.",
        data: null
      }, {
        statusCode: 403,
        text: "FORBIDDEN, authorization information provided but not allowed for such request, please check your right.",
        data: null
      },{
        statusCode: 404,
        text: "NOT FOUND, no resource found for the given identifier",
        data: null
      }]
    }, {
      method: 'PATCH',
      url: '/api/objects/:objectId',
      curd: "Update/Modify",
      description: "Update/Modify a specific resource (by an identifier).",
      isShowResponse: false,
      responses: [{
        statusCode: 204,
        text: "NO CONTENT, indicating the object has been modifyed on specified properties. You can also use 201 if you allows PUT to create, or use 200 if you return the updated/original object in response data.",
        data: null
      },{
        statusCode: 400,
        text: "BAD REQUEST, when resource information is not valid.",
        data: null
      },{
        statusCode: 401,
        text: "UNAUTHORIZED, authorization information required for such request, but not provided.",
        data: null
      }, {
        statusCode: 403,
        text: "FORBIDDEN, authorization information provided but not allowed for such request, please check your right.",
        data: null
      },{
        statusCode: 404,
        text: "NOT FOUND, no resource found for the given identifier",
        data: null
      }]
    }, {
      method: 'DELETE',
      url: '/api/objects/:objectId',
      curd: "Delete",
      description: "Update/Modify a specific resource (by an identifier).",
      isShowResponse: false,
      responses: [{
        statusCode: 204,
        text: "NO CONTENT, indicating the object has been deleted. You can also return the deleted object in response data.",
        data: null
      },{
        statusCode: 401,
        text: "UNAUTHORIZED, authorization information required for such request, but not provided.",
        data: null
      }, {
        statusCode: 403,
        text: "FORBIDDEN, authorization information provided but not allowed for such request, please check your right.",
        data: null
      },{
        statusCode: 404,
        text: "NOT FOUND, no resource found for the given identifier",
        data: null
      }]
    }];
    this.notes = [
    "Please remember, the operations and collections here are not referring to the those in your database, but the those from the user's aspact. For Example, you may need to operate on multiple data collections based on your schema design when the user sees only modifying one object.",
    "Besides all requests listed above, a RESTful API also allows you to define your specified requests, such as complex search, and etc. But remember, any request should return only an object/block of resources, not the entire html page.",
    "Due to http protocal, you can not pass parameter and body to a GET request, so that GET read operation will expose the query information. Use POST with your specified route and request body/parameters to avoid it for secured query information, or take adventage of cookies/tokens.",
    "In http protocal, PUT and PATCH request works similarly. PUT will replace the entire resource, while PATCH will modify only the properties mentioned. However, most of the time designers threat them alike or use only one of them to operation an general update, and determining replacement or modification based on the request body.",
    "Some designers will also prefer to allow PUT to create a resource if the target does not exist, to make the API simpler to use."];
  });