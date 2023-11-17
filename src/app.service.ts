import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloPlazinho(): string {
    return 'Hello plazinho';
  }
}
