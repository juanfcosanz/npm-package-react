import { IProductCardProps } from '../interfaces';

import { ProductCard as ProductCardComponent } from './ProductCard';
import { ProductButtons, ProductImage, ProductTitle } from './ProductCardElement';

export * from './ProductCard';
export * from './ProductCardElement';

// * de esta forma al componente ProductCard le expandimos nuevas propiedades
export const ProductCard: IProductCardProps = Object.assign(ProductCardComponent, {
	Title: ProductTitle,
	Image: ProductImage,
	Buttons: ProductButtons,
});
