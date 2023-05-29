// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var myservice_pb = require('./myservice_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

function serialize_myservice_MyRequest(arg) {
  if (!(arg instanceof myservice_pb.MyRequest)) {
    throw new Error('Expected argument of type myservice.MyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myservice_MyRequest(buffer_arg) {
  return myservice_pb.MyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myservice_MyResponse(arg) {
  if (!(arg instanceof myservice_pb.MyResponse)) {
    throw new Error('Expected argument of type myservice.MyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myservice_MyResponse(buffer_arg) {
  return myservice_pb.MyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MyServiceService = exports.MyServiceService = {
  myMethod: {
    path: '/myservice.MyService/MyMethod',
    requestStream: false,
    responseStream: false,
    requestType: myservice_pb.MyRequest,
    responseType: myservice_pb.MyResponse,
    requestSerialize: serialize_myservice_MyRequest,
    requestDeserialize: deserialize_myservice_MyRequest,
    responseSerialize: serialize_myservice_MyResponse,
    responseDeserialize: deserialize_myservice_MyResponse,
  },
};

exports.MyServiceClient = grpc.makeGenericClientConstructor(MyServiceService);
