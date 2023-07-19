import { CreateProduct, UpdateProduct, Product } from "../models/product_model";

export interface ProductRepositories {
  getProduct(id: string): Promise<Product>;
  getAllProduct(): Promise<Product[]>;
  getProductByName(name: string): Promise<Product>;
  createProduct(data: CreateProduct): Promise<Product>;
  UpdateProduct(id: string, data: UpdateProduct): Promise<Product>;
}
