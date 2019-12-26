import AjaxService from './ajax.service';
import _ from 'lodash';

const prefix = 'http://dataservice.accuweather.com';
const apikey = 'XGgsVXXQGkY6xcFFypdRUmVJHktvZarE';
const ApiRoutes = {
	AUTOCOMPLETE_SEARCH: `${prefix}/locations/v1/cities/autocomplete`,
	CURRENT_CONDITIONS:   `${prefix}/currentconditions/v1/`,
	FIVE_DAYS_OF_DAILY_FORECASTS: `${prefix}/forecasts/v1/daily/5day/`,
};

export default class DataService {
	constructor() {
		if (DataService.instance) {
			return DataService.instance;
		}
		DataService.instance = this;
		this.ajaxService = new AjaxService();
	}
	static instance;
	ajaxService;
    getAutoCompleteCitys = async (nameCity:string)=>{
		const response = await this.ajaxService.get(
			ApiRoutes.AUTOCOMPLETE_SEARCH + `?apikey=${apikey}&language=en-us&q=${nameCity}`,
			{},
		);
		return response;
	}

	getTemperaturCurrentCity = async (loctionKey:string)=>{
		const response = await this.ajaxService.get(
			ApiRoutes.CURRENT_CONDITIONS + `${loctionKey}?apikey=${apikey}&language=en-us`,
			{},
		);
		return response;
	}

	getDailyForecasts = async (loctionKey:string)=>{
		const response = await this.ajaxService.get(
			ApiRoutes.FIVE_DAYS_OF_DAILY_FORECASTS + `${loctionKey}?apikey=${apikey}&language=en-us`,
			{},
		);
		return response;
	}
}
