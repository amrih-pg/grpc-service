```
npx grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --grpc_out=./ --proto_path=./ todo.proto
npx protoc-gen-grpc-gateway --js_out=import_style=commonjs,binary:. --grpc-gateway_out=./ --proto_path=./ todo.proto

grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --descriptor_set_out=descriptor_set.bin --include_imports --grpc_out=./ --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` --proto_path=./proto

```