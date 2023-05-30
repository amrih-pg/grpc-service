import { ClientOptions, GrpcOptions, Transport } from '@nestjs/microservices';
import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';
import { join } from 'path';

export const grpcClientOptions: GrpcOptions = addReflectionToGrpcConfig({
  transport: Transport.GRPC,
  options: {
    url:'0.0.0.0:50051', // 'localhost:50051
    package: 'hero', 
    protoPath: join(__dirname, './proto/hero.proto'), 
  },
}) ;