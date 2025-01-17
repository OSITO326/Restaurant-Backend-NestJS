import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { SeederModule } from './seeder/seeder.module';

@Module({
  imports: [CategoriesModule, PrismaModule, ProductsModule, SeederModule],
})
export class AppModule {}
