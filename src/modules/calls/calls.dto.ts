import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

/**
 * This dto is used to control user inputs and make sure it is valid data to create calls.
 * If the input provided to the endpoint does not match the rules defined by decorators here,
 * the endpoint will immediately return an error.
 * More info here: https://docs.nestjs.com/techniques/validation
 */
export class CreateCallDto {
  @IsString()
  name: string;

  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsNumber()
  duration: number;

  @IsString()
  @IsOptional()
  crmActivityId?: string;
}
