import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

export interface Hero {
    id: number;
    name: string;
}

export interface HeroById {
    id: number;
}

@Controller()
export class HeroesController {
    //export declare function GrpcMethod(service: string, method?: string): MethodDecorator;
    @GrpcMethod('HeroService','FindOne')
    findOne(data:HeroById, metadata: Metadata, call:ServerUnaryCall<any,any>):Hero {
        const items = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Doe' },
          ];
        return items.find(({ id }) => id === data.id);
    }
}
