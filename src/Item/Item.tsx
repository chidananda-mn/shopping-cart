import Button from '@material-ui/core/Button';

import { cartItemType } from '../types';

import { Wrapper } from './Item.style';

type Item = {
	item: cartItemType;
	handleAddToCart: (item: cartItemType) => void;
};

export const Item: React.FC<Item> = ({ item, handleAddToCart }) => (
	<Wrapper>
		<img src={item.image} alt={item.title} />
		<div>
			<h3>{item.title}</h3>
			<p>{item.description}</p>
			<h3>${item.price}</h3>
		</div>
		<Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
	</Wrapper>
);
