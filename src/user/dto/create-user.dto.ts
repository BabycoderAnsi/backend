import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import * as MESSAGES from '../../../messages/index.json';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: MESSAGES.NAME_LENGTH_ERROR })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @MinLength(2, { message: MESSAGES.USERNAME_LENGTH_ERROR })
  @IsAlphanumeric(null, {
    message: MESSAGES.USERNAME_VALIDATION_ERROR,
  })
  username: string;

  @IsNotEmpty()
  @IsEmail(null, {
    message: MESSAGES.EMAIL_VALIDATION_ERROR,
  })
  email: string;

  @IsInt()
  age: number;

  @IsString()
  @IsEnum(['f', 'm', 'u'])
  gender: string;

  @IsNotEmpty()
  @Matches(passwordRegEx, { message: MESSAGES.PASSWORD_LENGTH_ERROR })
  password: string;
}
