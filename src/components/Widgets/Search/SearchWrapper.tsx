import React, { useState } from 'react';
import SearchInput from './SearchInput/SearchInput';
import SearchResult from './SearchResult/SearchResult';
import DataService from 'services/data.service';

interface SearchWrapperProps {
	selectedItem?: (any) => void;
	setSelectedCity?: (any) => void;
	textPlaceholder: string;
	image?: string;
	rightImage?: string;
	setSelectedItem?: (any) => void;
}

const SearchWrapper = ({
	textPlaceholder,
	image,
	setSelectedItem,
	selectedItem,
	rightImage,
	setSelectedCity
}: SearchWrapperProps) => {
	const [results, setResults] = useState([]);
	const filterFunction = async search => {
		if (!search) {
			setResults([]);
		}
		getAutoCompleteCities(search).then(res => {
			setResults(res);
		});
	};

	const getAutoCompleteCities = async search => {
		const ds = new DataService();
		const data = await ds.getAutoCompleteCities(search);
		const listCities = new Array();
		data &&
			data.map(item => {
				listCities.push({
					LocalizedName: `${item.LocalizedName}`, //, ${item.Country.LocalizedName}
					KeyCity: item.Key
				});
			});
		return listCities;
	};

	const renderSearchResult = (object: { LocalizedName: string; KeyCity: string }, keyChange) => {
		return (
			<SearchResult
				result={object}
				onChoose={keyChange}
				setSelectedItem={setSelectedItem}
				setSelectedCity={setSelectedCity}
			/>
		);
	};

	return (
		<SearchInput
			selectedItem={selectedItem}
			results={results}
			filterFunction={filterFunction}
			renderComponent={renderSearchResult}
			image={image}
			rightImage={rightImage}
			textPlaceholder={textPlaceholder}
			showDropDownArrow={true}
			containerHeight="50px"
			hideBorder={false}
		/>
	);
};

export default SearchWrapper;
