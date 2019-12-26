import * as React from 'react';
import { Container,Text,NavigationContainer,Button,TextButton} from './Header.styles';
import {pageHeaderText} from '../../../consts/text.const';

interface HeaderProps {
	currentPage:string;
	setCurrentPage:(payload: string) => void;
}

const Header = ({setCurrentPage,currentPage}: HeaderProps) => {
	const changePage = (namePage:string)=>{
		setCurrentPage(namePage);
	}
	return (
		<Container>
			<Text>{pageHeaderText.HEROLO_WEATHER_TASK}</Text>
			<NavigationContainer>
				<Button onClick={()=>{changePage('Home')}} clicked={currentPage === 'Home'}>
					<TextButton>{pageHeaderText.HOME}</TextButton>
				</Button>
				<Button onClick={()=>{changePage('Favorites')}} clicked={currentPage === 'Favorites'}>
					<TextButton>{pageHeaderText.FAVORITES}</TextButton>
				</Button>
			</NavigationContainer>
		</Container>
	);
};

export default Header;
