import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares/logger.middlewares';
import axios from 'axios';

const getEnv = async () => {
  // 향후 이렇게 비밀번호를 요청할수도 있음
  const response = await axios.get('/비밀키요청');
  return response.data;

  // 또는 이렇게 (위에가 더 많이 쓰임)
  return {
    DB_PASSWORD: 'nodejsbook',
    NAME: 'JongwookJang',
  };
};

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [getEnv] })],
  controllers: [AppController],
  // providers: [AppService, ConfigService],
  providers: [
    {
      provide: AppService,
      useClass: AppService,
    },
    {
      provide: 'CUSTOM_KEY',
      useValue: 'CUSTOM_VALUE',
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
