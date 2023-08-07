import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entity/todos.entity';

@Injectable()
export class TodosService {

    constructor(@InjectRepository(Todo) private repository: Repository<Todo>) {}

    create(title:string, description:string, done:boolean) {
        const todo = this.repository.create({title, description, done});
        return this.repository.save(todo);
    }

    findOne(id: number) {
        const user = this.repository.findOneBy( {id} );
        if (!user) {
            throw new NotFoundException('user not found');
        }
        return user;
    }

    findAll() {
        return this.repository.find();
    }

    async remove(id:number) {
        const todo = await this.findOne(id);
        return this.repository.remove(todo);
    }

    async update(id:number, attributs:Partial<Todo>) {
        const todo = await this.findOne(id);
        Object.assign(todo, attributs);
        return this.repository.save(todo);
    }


}
