import React from 'react';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../../src';
import { product1 } from '../../data/products';

// const { act } = renderer;

describe('ProductCard', () => {
  test('Debe de mostrar el componente correctamente', () => {
    const wrapper = renderer.create(
      <ProductCard
        product={product1}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de incrementar el contador', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    //? como el click cambia el state, esperamos a que re-dibuje el componente con la funcion act()
    act(() => {
      //? recuperamos la referencia del button en los children
      (tree as any).children[2].props.onClick(); // * simulamos el click
    });

    tree = wrapper.toJSON(); //? recupera el estado actual del componente renderizado
    expect(tree).toMatchSnapshot();

    // ? evaluamos que el span sea igual a 1
    // expect((tree as any).children[1].children[0]).toBe('1');
  });
});
