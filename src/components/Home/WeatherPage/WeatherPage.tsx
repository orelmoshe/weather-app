import React, { useState , useEffect } from "react";
import {Container} from "./WeatherPage.styles";
import Images from "../../../assets/images/images";
import ResultSearch from "./ResultSearch/ResultSearch";
import SearchWrapper from "../../Widgets/Search/SearchWrapper";

interface WeatherPageProps {

}

const WeatherPage = ({}: WeatherPageProps) => {
  const [selectedSearchItem, setSelectedSearchItem] = useState(undefined);
  const [selectedCity, setSelectedCity] = useState({LocalizedName:'Tel Aviv',KeyCity:'215854' });
  console.log(selectedCity)
  return (
    <Container>
      <SearchWrapper
        textPlaceholder="Enter City"
        image={Images.search}
        rightImage = {Images.clear}
        setSelectedItem={setSelectedSearchItem}
        setSelectedCity={setSelectedCity}
      />
      <ResultSearch />
    </Container>
  );
};

export default WeatherPage;
