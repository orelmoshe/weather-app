export interface MyFavoritesInterface {
	favoriteCities: {
		LocalizedName: string;
		KeyCity: string;
		temperature: string;
		descriptionWeather: string;
	}[];
}

const favoriteCitiesInitialState: MyFavoritesInterface = {
	favoriteCities: []
};

export default favoriteCitiesInitialState;
