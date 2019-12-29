import React, { useState , useEffect } from "react";
import SearchInput from './SearchInput/SearchInput';
import { filter } from 'lodash';
import SearchResult from './SearchResult/SearchResult';
import DataService from 'services/data.service';
import { getAutoCompleteCitys } from "services/util.service";

interface SearchWrapperProps {
	selectedItem?: (any) => void;
	setSelectedCity?: (any) => void;
	textPlaceholder: string;
	borderLabelText?: string;
	image?: string;
	rightImage?: string;
	setSelectedItem?: (any) => void;
}

const SearchWrapper = ({
	textPlaceholder,
	borderLabelText,
	image,
	setSelectedItem,
	selectedItem,
	rightImage,
	setSelectedCity,
}: SearchWrapperProps) => {

	const [results, setResults] = useState([]);
	const filterFunction = async search => {
		if (!search) {
			setResults([]);
		}
		getAutoCompleteCitys(search).then(res => {
			setResults(res);
		  });
	};

	const renderSearchResult = (object:{LocalizedName:string,KeyCity:string }, keyChange) => {
		return <SearchResult result={object} onChoose={keyChange} setSelectedItem={setSelectedItem} setSelectedCity={setSelectedCity} />;
	};

	return (
		<SearchInput
			selectedItem={selectedItem}
			results={results}
			filterFunction={filterFunction}
			renderComponent={renderSearchResult}
			image={image}
			rightImage = {rightImage}
			textPlaceholder={textPlaceholder}
			showDropDownArrow={true}
			containerHeight='50px'
			containerWidth='812px'
			hideBorder={false}
		/>
	);
};

export default SearchWrapper;
