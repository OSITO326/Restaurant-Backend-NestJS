import { Controller, Get } from '@nestjs/common';
import { SeederService } from './seeder.service';

@Controller('seed')
export class SeederController {
  constructor(private readonly seederService: SeederService) {}

  @Get('categories-with-products')
  seedCategoriesWithProducts() {
    return this.seederService.createCategoriesWithProducts();
  }
}
