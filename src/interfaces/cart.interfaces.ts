import { Product } from '.';

export interface ProductInCart extends Product {
	count: number;
}

export interface onChangeArgs {
	product: Product;
	count: number;
}
