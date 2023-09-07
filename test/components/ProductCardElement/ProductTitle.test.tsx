import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../../src';
import { product1 } from '../../data/products';

describe('ProductTitle', () => {
  // ? Nombre de la prueba
  test('Debe de mostrar el componente correctamente con el titulo personalizado', () => {
    //? montamos nuestro componente (renderer es una funcion instalada )
    const wrapper = renderer.create(<ProductTitle title="Custom Product" />);

    // ? creamos un snapshot de nuestro componente renderizado
    // * cada que cambiemos algo en el wrapper, se evalúa si la foto guardada coincide con la actual
    expect(wrapper.toJSON()).toMatchSnapshot();
    // console.log(
    //   '🚀 ~ file: ProductTitle.test.tsx:14 ~ test ~ wrapper.toJSON():',
    //   wrapper.toJSON()
    // );
  });

  //? cuando no se envía el title, viene del product
  test('Debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      // * como el product viene del Context que es proporcionado por el ProductCard
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
