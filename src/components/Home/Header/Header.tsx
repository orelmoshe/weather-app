import * as React from 'react';
import { Container,ContainerMiddle,Text,NavigationContainer,Button,TextButton} from './Header.styles';
import {pageHeaderText} from 'consts/text.const';

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
			<ContainerMiddle>
			<Text>{pageHeaderText.WEATHER_APP}</Text>
			<NavigationContainer>
				<Button onClick={()=>{changePage('Home')}} clicked={currentPage === 'Home'}>
					<TextButton>{pageHeaderText.HOME}</TextButton>
				</Button>
				<Button onClick={()=>{changePage('Favorites')}} clicked={currentPage === 'Favorites'}>
					<TextButton>{pageHeaderText.FAVORITES}</TextButton>
				</Button>
			</NavigationContainer>
			</ContainerMiddle>
		</Container>
	);
};

export default Header;
