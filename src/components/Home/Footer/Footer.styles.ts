import styled from 'styled-components';

export const Container = styled.div`
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 24px 0 24px;
	background-color: #ffffff;
	box-shadow: 0 5px 5px 5px rgba(25, 148, 192, 0.15);
`;

export const Text = styled.div`
	color: #4f9ff7;
	font-family: Poppins;
	font-size: 15px;
	letter-spacing: -0.06px;
`;

interface DoneProps {
	width?: string;
}

export const Done = styled.div<DoneProps>`
	height: 44.37px;
	width:  ${props => props.width};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background-color: #96d764;
	cursor: pointer;
`;

export const TextDone = styled.div`
	color: #ffffff;
	font-family: Poppins;
	font-size: 16px;
	font-weight: bold;
	letter-spacing: 0.2px;
	text-align: center;
`;
