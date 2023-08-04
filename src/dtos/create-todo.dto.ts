import { IsString, IsNumber, IsBoolean } from "class-validator"

export class CreateTodoDto {
    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsBoolean()
    done: boolean;
}