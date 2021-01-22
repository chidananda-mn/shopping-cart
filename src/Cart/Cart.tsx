import { Wrapper } from './Cart.styles';
import { CartItem } from '../CartItem/CartItem';
import { cartItemType } from '../types';

type Cart = {
	cartItems: cartItemType[];
	addToCart: (item: cartItemType) => void;
	removeFromCart: (id: number) => void;
};

export const Cart: React.FC<Cart> = ({ cartItems, addToCart, removeFromCart }) => {
	const calculateTotalItems = (items: cartItemType[]) =>
		items.reduce((acc: number, item) => acc + item.amount * item.price, 0);
	return (
		<Wrapper>
			<h2>shopping cart</h2>
			{cartItems.length === 0 ? <p>No items in cart</p> : null}
			{cartItems.map((_item) => (
				<CartItem key={_item.id} item={_item} addToCart={addToCart} removeFromCart={removeFromCart} />
			))}
			<h2>Total:${calculateTotalItems(cartItems)}</h2>
		</Wrapper>
	);
};
