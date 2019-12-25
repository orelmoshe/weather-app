import * as React from 'react';
import { Container,Text,NavigationContainer,Button,TextButton} from './Header.styles';
import {pageHeaderText} from '../../../consts/text.const';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
	return (
		<Container>
			<Text>{pageHeaderText.HEROLO_WEATHER_TASK}</Text>
			<NavigationContainer>
				<Button>
					<TextButton>{pageHeaderText.HOME}</TextButton>
				</Button>
				<Button>
					<TextButton>{pageHeaderText.FAVORITES}</TextButton>
				</Button>
			</NavigationContainer>
		</Container>
	);
};

export default Header;
