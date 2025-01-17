import { Prisma } from '@prisma/client';

// NOTE: This is a mook data, it's not real data, it's just for testing purposes
// LEARN: search how to use faker.js
export const pizzasCategory: Prisma.CategoryCreateInput = {
  name: 'Pizzas 🍕',
  slug: 'prizzas',
  description: 'Las mejores pizzas de Bolivia',
  products: {
    createMany: {
      data: [
        {
          name: 'Pizza napolitana',
          description: 'Pizza napolitana con tomate, mozzarella y orégano',
          price: 10.0,
          image:
            'https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          stock: 10,
          enable: true,
          slug: 'pizza-napolitana',
        },
        {
          name: 'Pizza de peperoni',
          description: 'Pizza de peperoni con tomate, mozzarella y peperoni',
          price: 12.0,
          image:
            'https://images.pexels.com/photos/12407828/pexels-photo-12407828.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          stock: 10,
          enable: true,
          slug: 'pizza-peperoni',
        },
        {
          name: 'Pizza de jamon',
          description: 'Pizza de jamon con tomate, mozzarella y jamon',
          price: 12.0,
          image:
            'https://images.pexels.com/photos/28996257/pexels-photo-28996257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          stock: 10,
          enable: true,
          slug: 'pizza-jamon',
        },
      ],
    },
  },
};

export const soupsCategory: Prisma.CategoryCreateInput = {
  name: 'Sopas 🥣',
  slug: 'sopas',
  description: 'Las mejores sopas de Bolivia',
  products: {
    createMany: {
      data: [
        {
          name: 'Ramen',
          description: 'Ramen con pollo, cebolla, pimenton y tomate',
          price: 10.0,
          image:
            'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          stock: 10,
          enable: true,
          slug: 'ramen',
        },
        {
          name: 'Sopa de pollo',
          description: 'Sopa de pollo con cebolla, pimenton y tomate',
          price: 10.0,
          image:
            'https://images.pexels.com/photos/2532442/pexels-photo-2532442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          stock: 10,
          enable: true,
          slug: 'sopa-pollo',
        },
        {
          name: 'Sopa de verduras',
          description: 'Sopa de verduras con cebolla, pimenton y tomate',
          price: 10.0,
          image:
            'https://images.pexels.com/photos/24017888/pexels-photo-24017888/free-photo-of-tomates-bol-tazon-cuenco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          stock: 10,
          enable: true,
          slug: 'sopa-verduras',
        },
      ],
    },
  },
};

export const dessertsCategory: Prisma.CategoryCreateInput = {
  name: 'Postres 🍨',
  slug: 'postres',
  description: 'Los mejores postres de Bolivia',
  products: {
    createMany: {
      data: [
        {
          name: 'Helado de chocolate',
          description: 'Helado de chocolate con oreo',
          price: 5.0,
          image:
            'https://images.pexels.com/photos/4314231/pexels-photo-4314231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          stock: 10,
          enable: true,
          slug: 'helado-chocolate',
        },
        {
          name: 'Helado de vainilla',
          description: 'Helado de vainilla con oreo',
          price: 5.0,
          image:
            'https://images.pexels.com/photos/5060281/pexels-photo-5060281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          stock: 10,
          enable: true,
          slug: 'helado-vainilla',
        },
        {
          name: 'Helado de fresa',
          description: 'Helado de fresa con oreo',
          price: 5.0,
          image:
            'https://images.pexels.com/photos/2161643/pexels-photo-2161643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          stock: 10,
          enable: true,
          slug: 'helado-fresa',
        },
      ],
    },
  },
};

export const drinksCategory: Prisma.CategoryCreateInput = {
  name: 'Bebidas 🍹',
  slug: 'bebidas',
  description: 'Las mejores bebidas de Bolivia',
  products: {
    createMany: {
      data: [
        {
          name: 'Coca cola',
          description: 'Coca cola 1.5L',
          price: 2.0,
          image:
            'https://images.pexels.com/photos/3200651/pexels-photo-3200651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          stock: 10,
          enable: true,
          slug: 'coca-cola',
        },
        {
          name: 'Pepsi',
          description: 'Pepsi 1.5L',
          price: 2.0,
          image:
            'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          stock: 10,
          enable: true,
          slug: 'pepsi',
        },
        {
          name: 'Sprite',
          description: 'Sprite 1.5L',
          price: 2.0,
          image:
            'https://images.pexels.com/photos/4161715/pexels-photo-4161715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          stock: 10,
          enable: true,
          slug: 'sprite',
        },
      ],
    },
  },
};
