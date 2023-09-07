import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../src';

const producto = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png',
};

const App = () => {
  return (
    <>
      <ProductCard
        product={producto}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({
          count,
          isMaxCountReached,
          product,
          maxCount,
          increaseBy,
          reset,
        }) => (
          <>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
