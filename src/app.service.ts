import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello!';
  }

  getHelloPlazinho(): string {
    return 'Hello plazinho';
  }
}
