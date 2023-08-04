import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateTodoDto } from '../dtos/create-todo.dto'

@Controller('todos')
export class TodosController {

    @Get()
    getAllTodos() {}

    @Post()
    creatTodo(@Body() body: CreateTodoDto) {
        console.log(body); 
    }

    @Get(':id')
    getOneTodo(@Param('id') id:string) {
        console.log(id);      
    }

}
