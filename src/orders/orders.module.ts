import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersGateway } from './orders.gateway';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  providers: [OrdersGateway, OrdersService],
  imports: [PrismaModule, ProductsModule],
})
export class OrdersModule {}
