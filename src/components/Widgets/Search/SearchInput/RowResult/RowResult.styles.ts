import styled from 'styled-components';
import { constColors } from '../../../../../consts/colors.const';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	&:hover {
		font-weight: bold;
		background-color: ${constColors.ORANGE_PALE};
		box-shadow: ${constColors.BOX_SHADOW_DROP_DOWN_ITEM};
	}
`;
