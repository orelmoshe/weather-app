import { RouteInterface } from './route.state';
import { AutocompleteSearchInterface } from './autocompleteSearch.state';
import { DailyForcecastsInterface } from './dailyForcecasts.state';
import { CurrentConditionsInterface } from './currentConditions.state';
import { MyFavoritesInterface } from './myFavorites.state';

export interface IAppState {
	currentPage: RouteInterface;
	citys:AutocompleteSearchInterface,
	initialDailyForcecastsState:DailyForcecastsInterface,
	currentCity:CurrentConditionsInterface,
	myFavoritesCitys:MyFavoritesInterface
}
