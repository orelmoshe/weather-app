import React, { useState, useEffect } from "react";
import { Container} from './FavoritesPage.styles';
import InformationWeatherItem from '../../Widgets/InformationWeatherItem/InformationWeatherItem';
import {getFavoriteCitysDetails} from 'services/util.service';
import { IAppState } from '../../../redux/state/index';
import { connect } from 'react-redux';
import { setMyFavorites } from 'redux/actions/myFavorites.actions';
interface FavoritesPageProps {
    myFavoritesCitysRedux:  {LocalizedName:string,KeyCity:string}[];
	setMyFavoritesCitysRedux: (payload: {LocalizedName:string,KeyCity:string}[]) => void;
}

const FavoritesPage = ({myFavoritesCitysRedux}: FavoritesPageProps) => {
	const [ myFavoritesCityState, setMyFavoritesCitysState] = useState([])
   useEffect(()=>{
      setMyFavoritesCitysState([{
         LocalizedName: 'orel',
         temperature:'31',
         iconWeather: 'cloudy'
      },
      {
         LocalizedName: 'orel',
         temperature:'31',
         iconWeather: 'cloudy'
      },
      {
         LocalizedName: 'orel',
         temperature:'31',
         iconWeather: 'cloudy'
      },{
         LocalizedName: 'orel',
         temperature:'31',
         iconWeather: 'cloudy'
      },{
         LocalizedName: 'orel',
         temperature:'31',
         iconWeather: 'cloudy'
      }]);
	myFavoritesCitysRedux &&
	getFavoriteCitysDetails(myFavoritesCitysRedux).then(res=>{
		setMyFavoritesCitysState(res);
		console.log('dd', myFavoritesCityState)
	})
   },[]);
	return (
		<Container>
            {myFavoritesCityState &&
               myFavoritesCityState.map((item,index)=>{
                   return <InformationWeatherItem 
                                key={`InformationWeatherItem${index}`}
                                name={item.LocalizedName}
                                degrees={item.temperature}
                                textWeather={item.iconWeather}
                                width='190px'
                                height='250px'
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
        setMyFavoritesCitysRedux: (payload: {LocalizedName:string,KeyCity:string}[]) => setMyFavorites(dispatch, payload)	};
};
export default connect(mapStateToProps, mapDispatchToProps)( FavoritesPage);