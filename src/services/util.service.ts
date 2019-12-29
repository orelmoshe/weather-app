import Images from '../assets/images/images';
import DataService from './data.service';
export const getImgByWeather = nameSituation => {
	if (nameSituation.toLowerCase().includes('rain')) {
		return Images.rain;
	} else if (nameSituation.toLowerCase().includes('cloud')) {
		return Images.cloudy;
	} else {
		return Images.sun;
	}
};

export const getAutoCompleteCities = async search => {
	const ds = new DataService();
	const data = await ds.getAutoCompleteCities(search);
	const listCities = new Array();
	data &&
		data.map(item => {
			listCities.push({
				LocalizedName: `${item.LocalizedName}`, //, ${item.Country.LocalizedName}
				KeyCity: item.Key
			});
		});
	return listCities;
};

export const getTemperatureCity = async (KeyCity: string) => {
	const ds = new DataService();
	const data = await ds.getTemperatureCurrentCity(KeyCity);
	const temperature = String(data[0].Temperature.Metric.Value);
	const iconWeather = String(data[0].WeatherText);

	const dataDays = await ds.getDailyForecasts(KeyCity);
	const listWeatherDays = dataDays.DailyForecasts.map(item => {
		return {
			temperature: String(Math.round(((Number(item.Temperature.Minimum.Value) - 32) * 5) / 9)),
			iconWeather: item.Day.IconPhrase
		};
	});

	return {
		currentCityWeather: {
			temperature: temperature,
			iconWeather: iconWeather
		},
		listWeatherDays: listWeatherDays
	};
};

export const getFavoriteCitiesDetails = async (listCities: any[]) => {
	const ds = new DataService();
	const result = new Array();
	listCities.map(async item => {
		const data = await ds.getTemperatureCurrentCity(item.KeyCity);
		const temperature = String(data[0].Temperature.Metric.Value);
		const iconWeather = String(data[0].WeatherText);
		result.push({
			LocalizedName: `${item.LocalizedName}`,
			KeyCity: item.KeyCity,
			temperature: temperature,
			iconWeather: iconWeather
		});
	});
	return result;
};
