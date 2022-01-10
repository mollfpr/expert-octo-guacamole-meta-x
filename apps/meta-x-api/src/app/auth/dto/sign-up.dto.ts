import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export default class SignUpDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
