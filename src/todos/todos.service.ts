import { Injectable } from '@nestjs/common';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {

    constructor(private todosRepository: TodosRepository) {}

    findOne(id: string) {
        return this.todosRepository.findOne(id)
    }

    findAll() {
        return this.todosRepository.findAll()
    }

    create(content:any) {
        return this.todosRepository.create(content);
    }

}
