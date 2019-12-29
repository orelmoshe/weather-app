import * as React from "react";
import {Container,Title,TextWeather,Icon,Degrees} from "./InformationWeatherItem.styles";

interface DayProps {
  name: string;
  degrees: string;
  textWeather?: string;
  iconWeather?: string;
  width: string;
  height: string;
  checked?: boolean;
}

const InformationWeatherItem = ({name,degrees,textWeather,iconWeather,width,height,checked}: DayProps) => {
  return (
    <Container width={width} height={height} checked={checked}>
      <Title>{name}</Title>
      {iconWeather && <Icon src={`${iconWeather}`} />}
      {textWeather && <TextWeather>{textWeather}</TextWeather>}

      <Degrees>{degrees}°C</Degrees>
    </Container>
  );
};

export default InformationWeatherItem;
