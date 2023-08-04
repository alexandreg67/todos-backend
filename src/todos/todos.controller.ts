import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from '../dtos/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {

    constructor(private todosService: TodosService) {}

    @Get()
    getAllTodos() {
        return this.todosService.findAll();
    }

    @Post()
    creatTodo(@Body() body: CreateTodoDto) {
        return this.todosService.create(body);
    }

    @Get(':id')
    async getOneTodo(@Param('id') id:string) {
        const message = await this.todosService.findOne(id);

        if (!message) {
            throw new NotFoundException('todo not found');
        }

        return message;
    }

}
