import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private logger = new Logger('Prisma Client');
  async onModuleInit() {
    try {
      this.logger.log('Connecting to the database: Mongo Atlas');
      await this.$connect();
    } catch (error) {
      this.logger.log('Error connecting to the database');
    }
  }
}
