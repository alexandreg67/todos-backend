import { Controller, Post, Body, Get, Patch, Param, Query, Delete, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UpdateUserDto } from 'src/users/dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {

    constructor (private userService: UsersService) {}

    @Get(':id')
    findUser(@Param('id') id:string) {
        return this.userService.findOne(parseInt(id));
    }

    @Get()
    findAllUsersWithEmail(@Query('email') email: string) {
        return this.userService.find(email);
    }

    @Get()
    findAllUsers() {
        return this.userService.findAll();
    }

    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        return this.userService.create(body.username, body.email, body.password);
    }

    @Delete(':id')
    removeUser(@Param('id') id:string){
        return this.userService.remove(parseInt(id));
    }

    @Patch(':id')
    updateUser(@Param('id') id:string, @Body() body:UpdateUserDto) {
        return this.userService.update(parseInt(id), body);
    }

}


