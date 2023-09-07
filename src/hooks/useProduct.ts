import { useEffect, useState } from 'react';
import { InitialValues, Product, onChangeArgs } from '../interfaces';

type useProductArgs = {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
};

/**
 *
 * @param onChange > como es opcional, le indicamos que si no viene le ponga 0
 * @param value > como es opcional, le indicamos que si no viene le ponga 0
 * @returns
 */
const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs) => {
	//? inicializamos nuestro estado, dándole prioridad al initialValues
	const [counter, setCounter] = useState<number>(initialValues?.count || value);

	const increaseBy = (value: number) => {
		// console.log('🚀 ~ file: useProduct.ts:22 ~ useProduct ~ isControlled:', isControlled.current);

		//? Math.max > toma el max de los dos valores, en caso de ser negativo el de la izq devolverá 0
		let newValue = Math.max(counter + value, 0);

		// ? establecemos el max del counter
		if (initialValues?.maxCount) {
			//?  Math.min > toma el mínimo de los dos valores, si el valor de la derecha es mayor que el de la der, retorna el de la der
			newValue = Math.min(newValue, initialValues.maxCount);
		}

		setCounter(newValue);

		//? cuando el counter cambia se manda a llamar la funcion onChange
		onChange && onChange({ product, count: newValue }); // * como onChange es opcional, puede venir undefined
	};

	const reset = () => {
		setCounter(initialValues?.count || value);
	};

	//? forzamos que cuando se emita un onChange, se re-dibuje los valores
	useEffect(() => {
		setCounter(initialValues?.count || value);
	}, [value, initialValues]);

	return {
		counter,
		isMaxCountReached: !!initialValues?.count && initialValues?.count === counter,
		maxCount: initialValues?.maxCount,

		reset,
		increaseBy,
	};
};

export { useProduct };
