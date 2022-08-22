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

export interface IProducts {
  _id: string;
  checked: boolean;
  manufacturer: string;
  brand: string;
  collection: string;
  title: string;
  description: string;
  image: string;
  status: string;
  price: string;
  regular_price: string;
  slug: string;
  categories: string;
  keywords: string;
  images: Array<string>;
  protection_plans: Array<TProtection>;
  attributes: Array<TSpecifications>;
  specifications: Array<TSpecifications>;
}

type TSpecifications = {
  name: string;
  value: string;
};

type TProtection = {
  asin: string;
  title: string;
  price: {
    symbol: string;
    value: number;
    currency: string;
    raw: string;
  };
};
