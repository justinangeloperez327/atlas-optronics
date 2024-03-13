import { products } from "@/constants/products";

export const findProductBySlug = (slug: string) => {
  return products.find(product => product.slug === slug);
}