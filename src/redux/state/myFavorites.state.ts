export interface MyFavoritesInterface {
	favoriteCities: {
		LocalizedName: string;
		KeyCity: string;
		temperature: string;
		iconWeather: string;
	}[];
}

const favoriteCitiesInitialState: MyFavoritesInterface = {
	favoriteCities: []
};

export default favoriteCitiesInitialState;
