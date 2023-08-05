import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from '../dtos/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {

    constructor(private todosService: TodosService) {}

    @Get()
    getAllTodos() {
    }

    @Post()
    creatTodo(@Body() body: CreateTodoDto) {
    }

    @Get(':id')
    async getOneTodo(@Param('id') id:string) {

    }

}
