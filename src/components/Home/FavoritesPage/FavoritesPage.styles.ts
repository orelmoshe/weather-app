import styled from 'styled-components';

export const Container = styled.div`
	width: calc(100% - 30px - 30px);
	max-width: 1050px;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	padding: 30px;
	background-color: #F5F8FD;
	@media (max-width: 760px) {
		height: fit-content;
		width: fit-content;
		justify-content: center;
	}
`;

export const Text = styled.div`
	height: fit-content;
	width: 100%;
	text-align: center;
	color: #015369;
	font-family: Poppins;
	font-size: 16px;
	font-weight: 500;
	letter-spacing: -0.07px;
	line-height: 21px;
`;
