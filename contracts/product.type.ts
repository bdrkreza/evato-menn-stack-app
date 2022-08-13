export interface Asset {
  height: number;
  width: number;
  preview: string;
  name?: string;
}

export interface ProductItem {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  featuredAsset: Asset;
  variants: Array<ProductVariant>;
}

export interface ProductVariant {
  sku: string;
  name: string;
  productId: number;
  price: number;
}
