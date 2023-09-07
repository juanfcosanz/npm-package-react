import React, { CSSProperties, createContext } from 'react';

import { useProduct } from '../hooks';
import {
  InitialValues,
  Product,
  ProductCardHandlerts,
  ProductContextProps,
  onChangeArgs,
} from '../interfaces';
import styles from '../styles/styles.module.css';

export type ProductCardProps = {
  product: Product;
  // children?: ReactElement | ReactElement[]; // ? para que reciba un hijo o varios el componente
  children?: (args: ProductCardHandlerts) => JSX.Element; //? par recibir funcion que retorna un JSX
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
};

// * el context se compartirá entre todos los hijos y debe lucir igual al value del Provider (inf, que se compartirá)
export const ProductContext = createContext({} as ProductContextProps);
//? el provider nos permite proveer la información
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  //? onChange sera una dependencia de useProduct para cambiar el estado del componente
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({ onChange, product, value, initialValues });

  return (
    // * todos los elementos que envuelve el provider tendrán acceso a la información del contexto con la propiedad "value"
    <Provider
      value={
        // ? es un objeto donde se indica que información del componente se va compartir con los hijos
        {
          counter,
          increaseBy,
          product,
          maxCount,
        }
      }
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children &&
          children({
            count: counter,
            isMaxCountReached,
            product,
            maxCount,

            increaseBy,
            reset,
          })}
        {/* <ProductImage img={product.img} />
			<ProductTitle title={product.title} />
			<ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};

//! como son componentes separados, no se recomienda establecerlos como una propiedad en el mismo componente
// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
