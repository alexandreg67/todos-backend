import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { Todo } from './todos/todos.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

import * as dotenv from 'dotenv'

dotenv.config({path: '.env.local'});

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Todo, User],
    synchronize: true, // Ne pas utiliser en production !
  }), TodosModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
