import React, { useState , useEffect } from "react";
import {Container} from "./WeatherPage.styles";
import Images from "../../../assets/images/images";
import ResultSearch from "./ResultSearch/ResultSearch";
import SearchWrapper from "../../Widgets/Search/SearchWrapper";
interface WeatherPageProps {}

const WeatherPage = ({}: WeatherPageProps) => {
  const [selectedSearchItem, setSelectedSearchItem] = useState(undefined);
  // useEffect();
  return (
    <Container>
      <SearchWrapper
        dbInformation={[1, 2, 3, 4, 5]}
        textPlaceholder="Enter City"
        image={Images.search}
        setSelectedItem={setSelectedSearchItem}
      />
      <ResultSearch />
    </Container>
  );
};

export default WeatherPage;
