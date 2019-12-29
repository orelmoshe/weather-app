import AjaxService from './ajax.service';
import _ from 'lodash';
/*AGtT3X7NHATH97gYUwMC9Oj6cVn5sk8G *//*XGgsVXXQGkY6xcFFypdRUmVJHktvZarE - mekory *//*3EJpKcLSBzrz4AQxGQlD6eAs3I71x29s *//*sfMnWo3qvk3juneOb76NeuLw5yQIXkwD */
const prefix = 'http://dataservice.accuweather.com';
const apikey = 'AGtT3X7NHATH97gYUwMC9Oj6cVn5sk8G';
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
    getAutoCompleteCities = async (nameCity:string)=>{
		const response = await this.ajaxService.get(
			ApiRoutes.AUTOCOMPLETE_SEARCH + `?apikey=${apikey}&language=en-us&q=${nameCity}`,
			{},
		);
		return response;
	}

	getTemperatureCurrentCity = async (locationKey:string)=>{
		const response = await this.ajaxService.get(
			ApiRoutes.CURRENT_CONDITIONS + `${locationKey}?apikey=${apikey}&language=en-us`,
			{},
		);
		return response;
	}

	getDailyForecasts = async (locationKey:string)=>{
		const response = await this.ajaxService.get(
			ApiRoutes.FIVE_DAYS_OF_DAILY_FORECASTS + `${locationKey}?apikey=${apikey}&language=en-us`,
			{},
		);
		return response;
	}
}
