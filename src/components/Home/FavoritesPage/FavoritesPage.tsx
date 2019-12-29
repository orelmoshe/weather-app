import React, { useState, useEffect } from "react";
import { Container} from './FavoritesPage.styles';
import InformationWeatherItem from '../../Widgets/InformationWeatherItem/InformationWeatherItem';
import {getFavoriteCitysDetails} from 'services/util.service';
import { IAppState } from 'redux/state/index';
import { connect } from 'react-redux';
import { setCurrentPage } from 'redux/actions/route.action';
import { setCurrentConditions } from "redux/actions/currentConditions.actions";
interface FavoritesPageProps {
    myFavoritesCitysRedux:  {LocalizedName:string,KeyCity:string}[];
   setCurrentConditions: (payload: {LocalizedName: string; KeyCity: string;}) => void;
   setCurrentPageRedux: (payload: string) => void;

}

const FavoritesPage = ({myFavoritesCitysRedux,setCurrentConditions,setCurrentPageRedux}: FavoritesPageProps) => {
	const [ myFavoritesCityState, setMyFavoritesCitysState] = useState([]);
   useEffect(()=>{
	myFavoritesCitysRedux &&
	getFavoriteCitysDetails(myFavoritesCitysRedux).then(res=>{
		setMyFavoritesCitysState(res);
	})
   },[]);

   const clickedItemFavorite = (name,KeyCity)=>{
      setCurrentConditions({LocalizedName:name ,KeyCity:KeyCity});
      setCurrentPageRedux('Home');
   }
	return (
		<Container>
            { myFavoritesCitysRedux &&
               myFavoritesCityState.map((item,index)=>{
                   return <InformationWeatherItem 
                                key={`InformationWeatherItem_${index}`}
                                name={item.LocalizedName}
                                KeyCity={item.KeyCity}
                                degrees={'item.temperature'}
                                textWeather={'item.iconWeather'}
                                width='190px'
                                height='250px'
                                checked={true}
                                clickedItemFavorite={clickedItemFavorite}
                         />
               })
            }
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
        setCurrentConditions: (payload: {LocalizedName: string;KeyCity: string;}) => setCurrentConditions(dispatch, payload),
        setCurrentPageRedux: (payload: string) => setCurrentPage(dispatch, payload)
   }
};
export default connect(mapStateToProps, mapDispatchToProps)( FavoritesPage);