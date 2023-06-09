import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { grpcClientOptions } from './grpc-client-options';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, grpcClientOptions);

  //hybrid: supports for both HTTP + GRPC
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);


  await app.startAllMicroservices();
  
  await app.listen(3001);
  // await app.listen();
  // console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
