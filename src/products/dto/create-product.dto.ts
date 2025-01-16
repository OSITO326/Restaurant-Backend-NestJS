import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;
  @IsString()
  @IsOptional()
  slug?: string;
  @IsString()
  description: string;
  @IsInt()
  @IsOptional()
  stock?: number;
  @IsNumber()
  price: number;
  @IsBoolean()
  @IsOptional()
  enabled?: boolean;
  @IsString()
  image: string;
  @IsString()
  categoryId: string;
}
