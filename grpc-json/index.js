const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { addReflection } = require('grpc-server-reflection');

// Load the gRPC service definition
const packageDefinition = protoLoader.loadSync('myservice.proto');
const myservicePackage = grpc.loadPackageDefinition(packageDefinition).myservice;

// Load the descriptor.proto file
const descriptor = grpc.loadPackageDefinition(protoLoader.loadSync('google/protobuf/descriptor.proto')).google.protobuf;
// Create a gRPC server
const server = new grpc.Server();
addReflection(server, 'descriptor_set.bin')

// Add your gRPC service implementation to the server
server.addService(myservicePackage.MyService.service, {
  MyMethod: (call, callback) => {
    const request = call.request;
    // Extract JSON data from the request
    let jsonData;
    if (request.jsonData && request.jsonData.value) {
      const buffer = request.jsonData.value;
      let stringValue = buffer.toString('utf-8');
      stringValue = stringValue.replace(/\u0010/g, '').replace(/\u0018/g, '').trim();
    
      try{
        jsonData = JSON.parse(stringValue);
        
      }
      catch(err){
        console.log(err);
      }
      
    } else {
      console.error('Invalid request data:', request.json_data);
      callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'Invalid request data',
      });
      console.log("ErROR");
      return;
    }
    const response = {
      message: 'Success : ' + jsonData.key
    };
    callback(null, response);
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