import React, { useState } from "react";
import { Container ,RightContainer,Icon,ButtonFavorites,Text} from './HeaderResult.styles';
import DetailCity from './DetailCity/DetailCity';
import Images from '../../../../../assets/images/images';
import {pageHeaderResultText} from '../../../../../consts/text.const';

interface HeaderResultProps {
    nameCity?:string;
    degrees?:string;
    iconWeather?:string;
}

const HeaderResult = ({ nameCity,degrees,iconWeather}: HeaderResultProps) => {
    const [imageState, setImageState] = useState(false);
    const addLocationFavorite = ()=>{
          if(imageState){
              return Images.Love_Heart;
          } else {
            return Images.Love_Heart_hollow;
          }
    }
	return (
		<Container>
           <DetailCity nameCity={nameCity} degrees={degrees} iconWeather={iconWeather} />
           <RightContainer>
               <Icon src={addLocationFavorite()}/>
               <ButtonFavorites onClick={()=>{ setImageState(!imageState);}}>
                   <Text>{pageHeaderResultText.ADD_TO_FAVORITES}</Text>
               </ButtonFavorites>
           </RightContainer>
		</Container>
	);
};

export default HeaderResult;