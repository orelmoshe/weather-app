import * as React from 'react';
import { Container} from './FavoritesPage.styles';
import { IAppState } from '../../../redux/state/index';
import { connect } from 'react-redux';
import { setMyFavorites } from 'redux/actions/myFavorites.actions';
import InformationWeatherItem from '../../Widgets/InformationWeatherItem/InformationWeatherItem';
import DataService from 'services/data.service';
import { useState } from 'react';
interface FavoritesPageProps {
    myFavoritesCitysRedux:  {LocalizedName:string,KeyCity:string}[];
	setMyFavoritesCitysRedux: (payload: {LocalizedName:string,KeyCity:string}[]) => void;
}

const FavoritesPage = ({myFavoritesCitysRedux}: FavoritesPageProps) => {
    const [situationState, setSituationeState] = useState({temperature:'' ,iconWeather:'' });
	const getTemperaturCity = async (KeyCity:string) =>{
		const ds = new DataService();
		try { 
			const data = await ds.getTemperaturCurrentCity(KeyCity);
			const temperature = String(data[0].Temperature.Metric.Value);
			const iconWeather = String(data[0].WeatherText);
			setSituationeState({temperature:temperature,iconWeather:iconWeather});		
		} catch(e){
            console.log('Error from ResultSearch component , failed get get Temperatur current city , Error:', e);
		}
	}

	
	return (
		<Container>
            {myFavoritesCitysRedux &&
               myFavoritesCitysRedux.map((item,index)=>{
                   getTemperaturCity(item.KeyCity);
                   return <InformationWeatherItem 
                                key={`InformationWeatherItem${index}`}
                                name={item.LocalizedName}
                                degrees={situationState.temperature}
                                textWeather={situationState.iconWeather}
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