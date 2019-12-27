export interface CurrentConditionsInterface {
  currentCity: {
    LocalizedName: string;
    KeyCity: string;
  };
}

const initialCurrentConditionsState: CurrentConditionsInterface = {
  currentCity: { LocalizedName: "Tel Aviv", KeyCity: "215854" }
};

export default initialCurrentConditionsState;
