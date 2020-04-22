import { RouteInterface } from './route.state';
import { CurrentConditionsInterface } from './currentConditions.state';
import { MyFavoritesInterface } from './myFavorites.state';

export interface IAppState {
	currentPage: RouteInterface;
	currentCity: CurrentConditionsInterface;
	favorite: MyFavoritesInterface;
}
