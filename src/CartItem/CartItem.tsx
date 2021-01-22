import Button from '@material-ui/core/Button';
//Types
import { cartItemType } from '../types';
//styles

import { Wrapper } from './CartItem.style';

type CartItem = {
	item: cartItemType;
	addToCart: (item: cartItemType) => void;
	removeFromCart: (id: number) => void;
};

export const CartItem: React.FC<CartItem> = ({ item, addToCart, removeFromCart }) => (
	<Wrapper>
		<div>
			<h3>{item.title}</h3>
			<div className="information">
				<p>Price:${item.price}</p>
				<p>Total: ${item.amount * item.price}</p>
			</div>
			<div className="buttons">
				<Button size="small" variant="contained" onClick={() => removeFromCart(item.id)}>
					-
				</Button>
				<p>{item.amount}</p>
				<Button size="small" variant="contained" onClick={() => addToCart(item)}>
					+
				</Button>
			</div>
		</div>
		<img src={item.image} alt={item.title} />
	</Wrapper>
);
