import { Injectable } from '@nestjs/common';
import {Repository } from 'typeorm';
import {InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';


@Injectable()
export class UsersService {

    constructor (@InjectRepository(User) private repository: Repository<User>) {}

    create(username:string, email: string, password:string) {
        const user = this.repository.create({username, email, password });

        return this.repository.save(user)
    }

}
