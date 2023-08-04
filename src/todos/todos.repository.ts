import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { CreateTodoDto } from 'src/dtos/create-todo.dto';


@Injectable()
export class TodosRepository {
    async findOne(id: string) {
        const contents = await readFile('todos.json', 'utf-8');
        const messages = JSON.parse(contents);

        return messages[id];
    }

    async findAll() {
        const contents = await readFile('todos.json', 'utf-8');
        const messages = JSON.parse(contents);

        return messages;
    }

    async create(content:CreateTodoDto) {
        const contents = await readFile('todos.json', 'utf-8');
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999);

        messages[id] = { id, content };

        await writeFile('todos.json', JSON.stringify(messages));
    }
}