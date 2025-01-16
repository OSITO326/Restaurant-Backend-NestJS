import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { convertToSlug } from 'src/common/helpers';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { UpdateCategoryDto } from 'src/categories/dto/update-category.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const { name } = createProductDto;
    // check if product exists
    const productExists = await this.prisma.product.findFirst({
      where: {
        name,
      },
    });

    if (productExists) {
      throw new BadRequestException('Product already exists');
    }

    // create product
    const slug = convertToSlug(name);
    const product = await this.prisma.product.create({
      data: {
        ...createProductDto,
        slug,
      },
    });
    return {
      message: 'Product created successfully',
      product,
    };
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit, page, orderBy } = paginationDto;
    const totalProducts = await this.prisma.product.count();
    const lastPage = Math.ceil(totalProducts / limit);

    const products = await this.prisma.product.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        updatedAt: orderBy,
      },
      include: {
        category: {
          select: {
            name: true,
            slug: true,
          },
        },
      },
    });

    return {
      products,
      meta: {
        total: totalProducts,
        page,
        lastPage,
      },
    };
  }

  async findOne(slug: string) {
    const product = await this.prisma.product.findFirst({
      where: { slug },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return {
      product,
    };
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const { name } = updateProductDto;
    const slug = convertToSlug(name);
    const productExists = await this.prisma.product.findFirst({
      where: {
        id,
      },
    });

    if (!productExists) {
      throw new NotFoundException('Product not found');
    }

    const updateProduct = await this.prisma.product.update({
      where: { id },
      data: {
        ...updateProductDto,
        slug,
      },
    });

    return {
      message: 'Product updated successfully',
      product: updateProduct,
    };
  }

  async remove(id: string) {
    const product = await this.prisma.product.findFirst({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const productDeleted = await this.prisma.product.delete({
      where: { id },
    });

    return {
      message: 'Product deleted successfully',
      productDeleted,
    };
  }
}
// 1:03:00 Video Clase03
