import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import * as MESSAGES from '../../../messages/index.json';

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: MESSAGES.NAME_LENGTH_ERROR })
  @IsNotEmpty()
  name: string;
}
