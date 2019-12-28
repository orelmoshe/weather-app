import Images from '../assets/images/images';
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
