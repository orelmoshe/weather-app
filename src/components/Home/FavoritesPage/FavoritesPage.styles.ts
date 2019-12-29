import styled from 'styled-components';

export const Container = styled.div`
	width: calc(100% - 30px - 30px);
	max-width: 1050px;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	padding: 30px;
	@media (max-width: 760px) {
		height: fit-content;
		width: fit-content;
		justify-content: center;
	}
`;
