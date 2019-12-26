import * as React from 'react';
import SearchInput from './SearchInput/SearchInput';
import { filter } from 'lodash';
import SearchResult from './SearchResult/SearchResult';

interface SearchWrapperProps {
	selectedItem?: any;
	dbInformation: any[];
	textPlaceholder: string;
	borderLabelText?: string;
	image?: any;
	setSelectedItem?: (any) => void;
}

const SearchWrapper = ({
	dbInformation,
	textPlaceholder,
	borderLabelText,
	image,
	setSelectedItem,
	selectedItem,
}: SearchWrapperProps) => {
	const [results, setResults] = React.useState(dbInformation);
	const filterFunction = search => {
		if (!search) {
			setResults(dbInformation);
		}
		const filterResult = filter(dbInformation, result => String(result).startsWith(search));
		setResults(filterResult);
	};

	const renderSearchResult = (object, keyChange) => {
		return <SearchResult result={object} onChoose={keyChange} setSelectedItem={setSelectedItem} />;
	};

	return (
		<SearchInput
			selectedItem={selectedItem}
			results={results}
			filterFunction={filterFunction}
			renderComponent={renderSearchResult}
			image={image}
			textPlaceholder={textPlaceholder}
			showDropDownArrow={true}
			containerHeight='50px'
			containerWidth='812px'
			hideBorder={false}
		/>
	);
};

export default SearchWrapper;
