import React, { CSSProperties, useContext } from 'react';

import styles from '../../styles/styles.module.css';
import { ProductContext } from '../ProductCard';

import noImage from '../../assets/no-image.jpg';

export type ProductImageProps = {
  img?: string;
  className?: string;
  style?: CSSProperties;
};

export const ProductImage = ({ img, className, style }: ProductImageProps) => {
  const { product } = useContext(ProductContext);

  const imgToShow = img ? img : product.img ? product.img : noImage;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgToShow}
      alt="Product image"
    />
  );
};