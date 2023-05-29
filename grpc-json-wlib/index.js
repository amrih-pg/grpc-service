const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { addReflection } = require('grpc-server-reflection');

const packageDefinition = protoLoader.loadSync('./proto/todo.proto');
const myservicePackage = grpc.loadPackageDefinition(packageDefinition).myservice;

const descriptor = grpc.loadPackageDefinition(protoLoader.loadSync('google/protobuf/descriptor.proto')).google.protobuf;
// Create a gRPC server
const server = new grpc.Server();
addReflection(server, 'descriptor_set.bin')

server.addService(myservicePackage.TodoService.service, {
  CreateTodo: (call, callback) => {
    const request = call.request;
    let jsonData;
    if (request ) {
      const buffer = request;
      const response = {
        id: '123',
        title: buffer.title,
        completed: buffer.completed
      };
      callback(null, response);
    } else {
      console.error('Invalid request data:', request);
      callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'Invalid request data',
      });
      console.log("ErROR");
      const response = {
        id: '0',
        title: 'failed',
        completed: false
      };
      callback(null, response);
    }
    
  }
});


server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server started, listening on port ${port}`);
  server.start();
});