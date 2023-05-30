const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Load the gRPC package definition
const packageDefinition = protoLoader.loadSync('../proto/todo.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

// Load the gRPC service
const myService = grpc.loadPackageDefinition(packageDefinition).myservice;

// Define the gRPC client
const client = new myService.TodoService('localhost:50051', grpc.credentials.createInsecure());

// Define the request
const request = {
  title: 'My Todo',
  completed: true
};

// Call the gRPC service
client.createTodo(request, (err, response) => {
  if (err) {
    console.error(err);
  } else {
    console.log(response);
  }
});