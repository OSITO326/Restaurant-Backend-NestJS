import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { convertToSlug } from 'src/common/helpers/convert-to-slug';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const { name, description } = createCategoryDto;
    const slug = convertToSlug(name);
    // check if category exists
    const gategoryExists = await this.prisma.category.findFirst({
      where: {
        name,
      },
    });
    if (gategoryExists) {
      throw new BadRequestException('Category already exists');
    }
    // create category
    const category = await this.prisma.category.create({
      data: {
        name,
        description,
        slug,
      },
    });
    return {
      message: 'Category created successfully',
      category,
    };
  }

  async findAll() {
    const categories = await this.prisma.category.findMany();
    return {
      categories,
    };
  }

  // pedirle el pipe al ing
  // condicion para ver el tipo
  async findOne(term: string) {
    const category = await this.prisma.category.findFirst({
      where: {
        id: term,
        // slug: term,
      },
      include: {
        products: {
          select: {
            id: true,
            name: true,
            slug: true,
            image: true,
            description: true,
            price: true,
            stock: true,
          },
        },
      },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return {
      category,
    };
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const { name } = updateCategoryDto;
    await this.findOne(id);
    const slug = convertToSlug(name);

    const updateCategory = await this.prisma.category.update({
      where: {
        id,
      },
      data: {
        ...updateCategoryDto,
        slug,
      },
    });
    return {
      message: 'Category updated successfully',
      category: updateCategory,
    };
  }

  async remove(id: string) {
    // NOTE: opción 1
    const { category } = await this.findOne(id);
    const deleteCategory = await this.prisma.category.delete({
      where: {
        id: category.id,
      },
    });
    // opción 2
    // const categoryExists = await this.prisma.category.findFirst({
    //   where: {
    //     id,
    //   },
    // });
    // if (!categoryExists) {
    //   throw new NotFoundException('Category not found');
    // }
    // const deleteCategory = await this.prisma.category.delete({
    //   where: {
    //     id,
    //   },
    // });

    return {
      message: 'Category deleted successfully',
      deleteCategory,
    };
  }
}
