import { IsString, IsNumber, IsEmail } from "class-validator"

export class CreateUserDto {
    @IsNumber()
    id: number;

    @IsString()
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}