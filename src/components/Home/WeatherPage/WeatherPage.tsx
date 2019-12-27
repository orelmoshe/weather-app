import React, { useState , useEffect } from "react";
import {Container} from "./WeatherPage.styles";
import Images from "../../../assets/images/images";
import ResultSearch from "./ResultSearch/ResultSearch";
import SearchWrapper from "../../Widgets/Search/SearchWrapper";

interface WeatherPageProps {

}

const WeatherPage = ({}: WeatherPageProps) => {
  const [selectedSearchItem, setSelectedSearchItem] = useState(undefined);
  return (
    <Container>
      <SearchWrapper
        textPlaceholder="Enter City"
        image={Images.search}
        setSelectedItem={setSelectedSearchItem}
      />
      <ResultSearch />
    </Container>
  );
};

export default WeatherPage;
