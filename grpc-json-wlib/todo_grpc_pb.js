// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var todo_pb = require('./todo_pb.js');
var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var google_api_http_pb = require('./google/api/http_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myservice_CreateTodoRequest(arg) {
  if (!(arg instanceof todo_pb.CreateTodoRequest)) {
    throw new Error('Expected argument of type myservice.CreateTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myservice_CreateTodoRequest(buffer_arg) {
  return todo_pb.CreateTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myservice_DeleteTodoRequest(arg) {
  if (!(arg instanceof todo_pb.DeleteTodoRequest)) {
    throw new Error('Expected argument of type myservice.DeleteTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myservice_DeleteTodoRequest(buffer_arg) {
  return todo_pb.DeleteTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myservice_Todo(arg) {
  if (!(arg instanceof todo_pb.Todo)) {
    throw new Error('Expected argument of type myservice.Todo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myservice_Todo(buffer_arg) {
  return todo_pb.Todo.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoServiceService = exports.TodoServiceService = {
  createTodo: {
    path: '/myservice.TodoService/CreateTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.CreateTodoRequest,
    responseType: todo_pb.Todo,
    requestSerialize: serialize_myservice_CreateTodoRequest,
    requestDeserialize: deserialize_myservice_CreateTodoRequest,
    responseSerialize: serialize_myservice_Todo,
    responseDeserialize: deserialize_myservice_Todo,
  },
  deleteTodo: {
    path: '/myservice.TodoService/DeleteTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.DeleteTodoRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_myservice_DeleteTodoRequest,
    requestDeserialize: deserialize_myservice_DeleteTodoRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.TodoServiceClient = grpc.makeGenericClientConstructor(TodoServiceService);
