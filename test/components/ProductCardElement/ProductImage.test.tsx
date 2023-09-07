import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../../src';
import { product2 } from '../../data/products';

describe('ProductImage', () => {
  // ? Nombre de la prueba
  test('Debe de mostrar el componente correctamente con la imagen personalizada', () => {
    //? montamos nuestro componente (renderer es una funcion instalada )
    const wrapper = renderer.create(<ProductImage img={'https://hola.jpg'} />);

    // ? creamos un snapshot de nuestro componente renderizado
    // * cada que cambiemos algo en el wrapper, se evalúa si la foto guardada coincide con la actual
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // //? cuando no se envía el title, viene del product
  test('Debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      // * como el product viene del Context que es proporcionado por el ProductCard
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
