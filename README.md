# grpc-service

Install tools & run the tool to generate the stubs
```
npm install -g grpc-tools

grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --descriptor_set_out=descriptor_set.bin --include_imports --grpc_out=./ --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` myservice.proto

grpcui -plaintext localhost:50051 # to run grpcui

## or call thru grpc_curl

grpcurl -plaintext -d '{"json_data": {"@type": "type.googleapis.com/google.protobuf.StringValue", "value": "{\"key\": \"value\"}"}}' localhost:50051 myservice.MyService/MyMethod


```