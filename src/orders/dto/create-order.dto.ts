import { OrderItems } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

export class OrderItemsDto implements OrderItems {
  productId: string;
  productName: string;
  productPrice: number;
  quantity: number;
  subTotal: number;
}

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  total: number;
  @IsString()
  clientName: string;
  @IsString()
  userId: string;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemsDto)
  orderItems: OrderItemsDto[];
}
