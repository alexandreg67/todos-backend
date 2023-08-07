import { Controller, Get, Post, Delete, Body, Param, Patch, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {

    constructor(private todosService: TodosService) {}

    @Get()
    getAllTodos() {
        return this.todosService.findAll()
    }

    @Post()
    creatTodo(@Body() body: CreateTodoDto) {
        return this.todosService.create(body.title, body.description, body.done)
    }

    @Get(':id')
    getOneTodo(@Param('id') id:string) {
        return this.todosService.findOne(parseInt(id));
    }

    @Delete(':id')
    removeTodo(@Param('id') id:string) {
        return this.todosService.remove(parseInt(id));
    } 

    @Patch(':id')
    updateTodo(@Param('id') id:string, @Body() body: CreateTodoDto) {
        
        return this.todosService.update(parseInt(id), body);
    }
}
