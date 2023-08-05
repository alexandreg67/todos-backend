import { IsString, IsNumber, IsEmail } from "class-validator"

export class CreateUserDto {

    @IsString()
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}