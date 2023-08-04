import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('todos')
export class TodosController {

    @Get()
    listTodos() {}

    @Post()
    creatTodo() {}

    @Get(':id')
    getOneTodo() {}
    
}
