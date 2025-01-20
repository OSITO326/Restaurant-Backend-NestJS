import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productsService: ProductsService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const { orderItems } = createOrderDto;
    // Check if all products exist
    const productsIds = createOrderDto.orderItems.map(
      (product) => product.productId,
    );
    const products = await this.prisma.product.findMany({
      where: {
        id: {
          in: productsIds,
        },
      },
    });

    if (products.length !== productsIds.length) {
      throw new BadRequestException('Some products do not exist');
    }

    // Check and update the stock of each product
    products.map((product, index) => {
      if (product.stock < orderItems[index].quantity) {
        throw new BadRequestException(
          `Product ${product.name} does not have enough stock`,
        );
      }
      // product.stock -= createOrderDto.orderItems[index].quantity
    });

    // Update the stock of each product
    products.map((product, index) => {
      const newStock = product.stock - orderItems[index].quantity;
      this.productsService.update(product.id, { stock: newStock });
    });

    // Save the order
    await this.prisma.order.create({
      data: createOrderDto,
    });

    return {
      message: 'Order was created successfully',
    };
  }

  async findAll() {
    const orders = await this.prisma.order.findMany();
    return orders;
  }
}
