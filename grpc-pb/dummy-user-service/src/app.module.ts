import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesController } from './heroes/heroes.controller';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { grpcClientOptions } from './grpc-client-options';

@Module({
  // imports: [],
  imports: [GrpcReflectionModule.register(grpcClientOptions)],
  controllers: [AppController, HeroesController],
  providers: [AppService],
})
export class AppModule {}
