import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid black;

	padding: 10px;
	div {
		flex: 1;
	}
	.information {
		display: flex;
		justify-content: space-between;
	}
	.buttons {
		display: flex;
		justify-content: space-between;
	}
	img {
		width: 25%;
		margin-left: 20px;
	}
`;
