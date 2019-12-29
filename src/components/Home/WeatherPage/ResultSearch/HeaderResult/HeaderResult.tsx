import React, { useState } from "react";
import { Container ,RightContainer,Icon,ButtonFavorites,Text} from './HeaderResult.styles';
import DetailCity from './DetailCity/DetailCity';
import Images from '../../../../../assets/images/images';
import {pageHeaderResultText} from '../../../../../consts/text.const';
import { IAppState } from '../../../../../redux/state/index';
import { connect } from 'react-redux';
import { setMyFavorites } from '../../../../../redux/actions/myFavorites.actions';
import _ from "lodash";
interface HeaderResultProps {
    nameCity?:string;
    keyCity?: string;
    degrees?:string;
    iconWeather?:string;
    myFavoritesCitysRedux:  {LocalizedName:string,KeyCity:string}[];
	setMyFavoritesCitysRedux: (payload: {LocalizedName:string,KeyCity:string}[]) => void;
}

const HeaderResult = ({ nameCity,keyCity,degrees,iconWeather,myFavoritesCitysRedux,setMyFavoritesCitysRedux}: HeaderResultProps) => {
    const [imageState, setImageState] = useState(false);
    const choosePicture = ()=>{
        if(!isCityNotExistsInMyFavorites(nameCity)) return Images.Love_Heart;
        if(imageState){
            return Images.Love_Heart;
        } else {
          return Images.Love_Heart_hollow;
        }
    }
    const addLocationFavorite = ()=>{
      setImageState(!imageState);
      if(!imageState){
        isCityNotExistsInMyFavorites(nameCity) &&
            addCityToMyFavoritesCitys(nameCity,keyCity);   
      } else{
          removeCityToMyFavoritesCitys(nameCity,keyCity);   
      }
    }

    const addCityToMyFavoritesCitys = (name,key)=>{
            const listFavoriteNew = myFavoritesCitysRedux? myFavoritesCitysRedux.map((item)=>{return item;}): [];
            listFavoriteNew.push({LocalizedName:name,KeyCity:key})
            setMyFavoritesCitysRedux(listFavoriteNew);
    }
    
    const removeCityToMyFavoritesCitys = (name,key)=>{
        const listFavoritesCity = myFavoritesCitysRedux? myFavoritesCitysRedux.map((item)=>{return item;}): [];
        _.remove(listFavoritesCity ,(item)=>{
            return item.LocalizedName===name && item.KeyCity===key;
        });
        setMyFavoritesCitysRedux(listFavoritesCity);
    }

    const isCityNotExistsInMyFavorites = (name)=>{
      return  !_.some(myFavoritesCitysRedux, item => item.LocalizedName === name);
    }
	return (
		<Container>
           <DetailCity nameCity={nameCity} degrees={degrees} iconWeather={iconWeather} />
           <RightContainer>
               <Icon src={choosePicture()}/>
               <ButtonFavorites onClick={addLocationFavorite}>
                   <Text>{pageHeaderResultText.ADD_TO_FAVORITES}</Text>
               </ButtonFavorites>
           </RightContainer>
		</Container>
	);
};

const mapStateToProps = (state: IAppState) => {
	return {
		myFavoritesCitysRedux: state.myFavoritesCitys.myFavoritesCitys
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		setMyFavoritesCitysRedux: (payload: {LocalizedName:string,KeyCity:string}[]) => setMyFavorites(dispatch, payload)
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderResult);