export interface Product {
  id: string;
  name: string;
  price: number;
  image: string | null;
}

export interface CreateProduct extends Omit<Product, "id"> {}
export interface UpdateProduct extends Partial<Product> {}
