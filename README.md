# Package React

> Este es un paquete de prueba para import un componente de React

## Ejemplo

```
import { ProductCard } from '../components';
```

```
	<ProductCard
		product={producto}
		initialValues={{
			count: 4,
			maxCount: 10,
		}}
	>
		{({ count, isMaxCountReached, product, maxCount, increaseBy, reset }) => (
			<>
				<ProductCard.Image />
				<ProductCard.Title />
				<ProductCard.Buttons />
			</>
		)}
	</ProductCard>
```
