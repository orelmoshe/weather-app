import React, { useState } from "react";
import {Container,SearchInputContainer,SearchInput,IconSearch} from "./WeatherPage.styles";
import Images from "../../../assets/images/images";
import { pageWeatherText } from "../../../consts/text.const";
import ResultSearch from "./ResultSearch/ResultSearch";
import SearchWrapper from "../../Widgets/Search/SearchWrapper";
interface WeatherPageProps {}

const WeatherPage = ({}: WeatherPageProps) => {
  const [selectedSearchItem, setSelectedSearchItem] = useState(undefined);
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
