import Images from '../assets/images/images';
import DataService from './data.service';
export const getImgByWeather = nameSituation => {
  if (nameSituation.toLowerCase().includes("rain")) {
    return Images.rain;
  } else if(nameSituation.toLowerCase().includes("cloud")){
    return Images.cloudy;
  }
  else{
      return Images.sun;
  }
};


export const getAutoCompleteCitys = async (search) => {
  const ds = new DataService();
    const data = await ds.getAutoCompleteCitys(search);
    const listCitys = new Array();
    data && data.map((item)=>{
              listCitys.push({
            LocalizedName:`${item.LocalizedName}`,//, ${item.Country.LocalizedName}
            KeyCity:item.Key 
          });
    });
return listCitys;
};

export const getTemperaturCity = async (KeyCity:string) =>{
  const ds = new DataService();
    const data = await ds.getTemperaturCurrentCity(KeyCity);
    const temperature = String(data[0].Temperature.Metric.Value);
    const iconWeather = String(data[0].WeatherText);
 
    const dataDays = await ds.getDailyForecasts(KeyCity);
    const listWeatherDays = dataDays.DailyForecasts.map((item)=>{
      return {temperature: String(Math.round((Number(item.Temperature.Minimum.Value) - 32) * 5 / 9)) ,iconWeather:item.Day.IconPhrase };
        });

      return {
              currentCityWeather:{
                temperature:temperature,
                iconWeather:iconWeather
              },
              listWeatherDays:listWeatherDays
             };
}


export const getFavoriteCitysDetails = async (listCitys: {LocalizedName:string,KeyCity:string}[]) =>{
    const ds = new DataService();
    const result = new Array();
    listCitys.map(async (item)=>{
      const data = await ds.getTemperaturCurrentCity(item.KeyCity);
      const temperature = String(data[0].Temperature.Metric.Value);
      const iconWeather = String(data[0].WeatherText);
      result.push({
            LocalizedName:`${item.LocalizedName}`,
            temperature:temperature,
            iconWeather:iconWeather
          });
    });
      return result;
}
