import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { SeederModule } from './seeder/seeder.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [CategoriesModule, PrismaModule, ProductsModule, SeederModule, OrdersModule],
})
export class AppModule {}
