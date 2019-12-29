import React, { useState, useEffect } from "react";
import { Container} from './FavoritesPage.styles';
import InformationWeatherItem from '../../Widgets/InformationWeatherItem/InformationWeatherItem';
import {getFavoriteCitiesDetails} from 'services/util.service';
import { IAppState } from 'redux/state/index';
import { connect } from 'react-redux';
import { setCurrentPage } from 'redux/actions/route.action';
import { setCurrentConditions } from "redux/actions/currentConditions.actions";
import _ from 'lodash';
import { setMyFavorites } from "redux/actions/myFavorites.actions";
interface FavoritesPageProps {
   favoriteRedux:  any[];
   setCurrentConditions: (payload: {LocalizedName: string; KeyCity: string;}) => void;
   setCurrentPageRedux: (payload: string) => void;
   setCurrentFavorites: (payload:any[]) => void;
}

const FavoritesPage = ({favoriteRedux, setCurrentConditions, setCurrentPageRedux,setCurrentFavorites}: FavoritesPageProps) => {
   console.log('RENDER')

   // const [favCityDetails, setFavCityDetails]
   useEffect( ()=> {
      favoriteRedux &&
	   getFavoriteCitiesDetails(favoriteRedux).then(res=>{
         setCurrentFavorites(res);
         console.log('favoriteRedux', favoriteRedux)
	})
   },[]);


   const clickedItemFavorite = (name, KeyCity)=>{
      setCurrentConditions({LocalizedName: name, KeyCity: KeyCity});
      setCurrentPageRedux('Home');
   }

	return ( 
		<Container>
            {favoriteRedux.map((item) => 
                           <InformationWeatherItem 
                                 key={`FULL_INFO_${item.KeyCity}`}
                                 name={item.LocalizedName}
                                 KeyCity={item.KeyCity}
                                 degrees={item.temperature}
                                 textWeather={item.iconWeather}
                                 width='190px'
                                 height='250px'
                                 checked={true}
                                 clickedItemFavorite={clickedItemFavorite}
                          />
                          )}
		 </Container>
	);
};

const mapStateToProps = (state: IAppState) => {
	return {
		favoriteRedux: state.favorite.favoriteCities
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
      setCurrentFavorites: (payload:any) => setMyFavorites(dispatch, payload),
        setCurrentConditions: (payload: {LocalizedName: string;KeyCity: string;}) => setCurrentConditions(dispatch, payload),
        setCurrentPageRedux: (payload: string) => setCurrentPage(dispatch, payload)
   }
};
export default connect(mapStateToProps, mapDispatchToProps)( FavoritesPage);