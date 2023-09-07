import { ProductButtonsProps, ProductCardProps, ProductImageProps, ProductTitleProps } from '../components';

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	product: Product;
	maxCount?: number;
}

export interface IProductCardProps {
	// ({ children, product }: ProductCardProps): JSX.Element;
	(Props: ProductCardProps): JSX.Element; //? no es necesario des-estructurar
	// Title: ({ title, className }: { title?: string; className?: string }) => JSX.Element;
	Title: (Props: ProductTitleProps) => JSX.Element; //? no es necesario des-estructurar
	// Image: ({ img, className }: { img?: string; className?: string }) => JSX.Element;
	Image: (Props: ProductImageProps) => JSX.Element; //? no es necesario des-estructurar
	// Buttons: ({ className }: { className?: string }) => JSX.Element;
	Buttons: (Props: ProductButtonsProps) => JSX.Element; //? no es necesario des-estructurar
}

export interface InitialValues {
	count?: number;
	maxCount?: number;
}

//? todo los que nuestra funcion JSX va exponer
export interface ProductCardHandlerts {
	count: number;
	isMaxCountReached: boolean;
	product: Product;
	maxCount?: number;

	increaseBy: (value: number) => void;
	reset: () => void;
}
