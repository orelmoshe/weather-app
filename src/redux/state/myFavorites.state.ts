export interface MyFavoritesInterface {
    myFavoritesCitys:{
        LocalizedName: string;
        KeyCity: string;
      }[],
}

const initialMyFavoritesState: MyFavoritesInterface = {
    myFavoritesCitys: null,
};

export default initialMyFavoritesState;