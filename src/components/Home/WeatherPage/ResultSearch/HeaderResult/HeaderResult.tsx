import * as React from 'react';
import { Container ,RightContainer,Icon,ButtonFavorites,Text} from './HeaderResult.styles';
import DetailCity from './DetailCity/DetailCity';
import Images from '../../../../../assets/images/images';
import {pageHeaderResultText} from '../../../../../consts/text.const';

interface HeaderResultProps {
    nameCity?:string;
    degrees?:string;
    iconWeather?:string;
}

const HeaderResult = ({ }: HeaderResultProps) => {

	return (
		<Container>
           <DetailCity nameCity='Tel Aviv' degrees='31' iconWeather={Images.sun} />
           <RightContainer>
               <Icon src={Images.Love_Heart}/>
               <ButtonFavorites>
                   <Text>{pageHeaderResultText.ADD_TO_FAVORITES}</Text>
               </ButtonFavorites>
           </RightContainer>
		</Container>
	);
};

export default HeaderResult;