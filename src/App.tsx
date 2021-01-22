import { useState } from 'react';
import { useQuery } from 'react-query';

//components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Item } from './Item/Item';

//styles
import { Wrapper,StyledButton } from './App.styles';
import { cartItemType } from './types';

const getProducts = async (): Promise<cartItemType[]> =>
	await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
	const [cartOpen,setCartOpen] = useState(false);
	const [cartItems,setCartItems] = useState([] as cartItemType[])
	const { data, isLoading, error } = useQuery<cartItemType[]>('products', getProducts);
	console.log('--data--', isLoading, data);

	const getTotalItems = (items: cartItemType[]) => items.reduce((acc:number,_eachItem)=>acc+_eachItem.amount,0);
	const handleAddToCart = (item: cartItemType) => null;
	const handleRemoveFromCart = () => null;

	if (isLoading) return <LinearProgress />;
	if (error) return <div> someting wrong here </div>;
	return (
		<Wrapper>
			<Drawer anchor="right" open={cartOpen} onClose={()=> setCartOpen(false)}>
			cart goes here
			</Drawer>
			<StyledButton onClick={() => setCartOpen(true)}>
				<Badge badgeContent={getTotalItems(cartItems)} color="error"> 
				 <AddShoppingCartIcon />
				</Badge>
			</StyledButton>
			<Grid container spacing={3}>
				{data?.map((_eachItem) => (<Grid item  key={_eachItem.id} xs={12} sm={4}> <Item item={_eachItem} handleAddToCart={handleAddToCart} /></Grid>))}
			</Grid>
			
		</Wrapper>
	);
};

export default App;