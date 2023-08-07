import { Injectable, NotFoundException } from '@nestjs/common';
import {Repository } from 'typeorm';
import {InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';


@Injectable()
export class UsersService {

    constructor (@InjectRepository(User) private repository: Repository<User>) {}

    create(username:string, email: string, password:string) {
        const user = this.repository.create({username, email, password });
        return this.repository.save(user)
    }

    findOne(id:number) {
        return this.repository.findOneBy({ id });
    }

    findAll(): Promise<User[]> {
        return this.repository.find();
    }

    find(email: string) {
        return this.repository.findBy({ email });
    }

    async update(id:number, attributs:Partial<User>) {
        const user = await this.findOne(id);
        if (!user) {
            throw new NotFoundException('user not found');
        }
        Object.assign(user, attributs);
        return this.repository.save(user)
    }

    async remove(id:number) {
        const user = await this.findOne(id);
        if (!user) {
            throw new NotFoundException('user not found');
        }
        return this.repository.remove(user)
    }

}
