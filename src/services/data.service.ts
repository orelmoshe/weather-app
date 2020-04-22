import AxiosService from './axios.service';


const prefix = 'http://dataservice.accuweather.com';
const apikey = process.env.API_KEY;
const ApiRoutes = {
	AUTOCOMPLETE_SEARCH: `${prefix}/locations/v1/cities/autocomplete`,
	CURRENT_CONDITIONS: `${prefix}/currentconditions/v1/`,
	FIVE_DAYS_OF_DAILY_FORECASTS: `${prefix}/forecasts/v1/daily/5day/`
};

export default class DataService {

	public static instance;
	private axiosService;

	public constructor() {
		if (DataService.instance) {
			return DataService.instance;
		}
		DataService.instance = this;
		this.axiosService = new AxiosService();
	}
	
	public getAutoCompleteCities = async (nameCity: string) => {
		const response = await this.axiosService.get(
			ApiRoutes.AUTOCOMPLETE_SEARCH + `?apikey=${apikey}&language=en-us&q=${nameCity}`,
			{}
		);
		return response;
	};

	public	getTemperatureCurrentCity = async (locationKey: string) => {
		const response = await this.axiosService.get(
			ApiRoutes.CURRENT_CONDITIONS + `${locationKey}?apikey=${apikey}&language=en-us`,
			{}
		);
		return response;
	};

	public getDailyForecasts = async (locationKey: string) => {
		const response = await this.axiosService.get(
			ApiRoutes.FIVE_DAYS_OF_DAILY_FORECASTS + `${locationKey}?apikey=${apikey}&language=en-us`,
			{}
		);
		return response;
	};
}
