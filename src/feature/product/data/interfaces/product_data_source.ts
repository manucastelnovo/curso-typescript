import { CreateProduct, Product } from "../../domain/models/product_model";

export interface ProductDataSource {
  getAllProduct(): Promise<Product[]>;
  getProduct(id: string): Promise<Product>;
  getProductByName(name: string): Promise<Product>;
  createProduct(data: CreateProduct): Promise<Product>;
  updateProduct(data: Product): Promise<Product>;
}
