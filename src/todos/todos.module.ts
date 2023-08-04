import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Todo } from './todos.entity';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodosRepository } from './todos.repository'

@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    controllers: [TodosController],
    providers: [TodosService, TodosRepository],
})
export class TodosModule {}
