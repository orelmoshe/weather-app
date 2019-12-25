import * as React from 'react';
import { Container, Logo,} from './Header.styles';
import Images from '../../../assets/images/images';
import Logout from './Logout/Logout';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
	return (
		<Container>
			<Logo src={Images.logo} />
			<Logout/>
		</Container>
	);
};

export default Header;
