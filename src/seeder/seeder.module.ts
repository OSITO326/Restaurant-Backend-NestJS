import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { SeederController } from './seeder.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SeederController],
  providers: [SeederService],
  imports: [PrismaModule],
})
export class SeederModule {}
