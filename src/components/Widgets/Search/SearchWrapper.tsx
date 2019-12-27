import React, { useState , useEffect } from "react";
import SearchInput from './SearchInput/SearchInput';
import { filter } from 'lodash';
import SearchResult from './SearchResult/SearchResult';
import DataService from 'services/data.service';

interface SearchWrapperProps {
	selectedItem?: any;
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
}: SearchWrapperProps) => {

	const [results, setResults] = useState([]);
	const filterFunction = async search => {
		if (!search) {
			setResults([]);
		}
		const ds = new DataService();
		try {
			const data = await ds.getAutoCompleteCitys(search);
			const listCitys = Array();
			data && data.map((item)=>{
			        	listCitys.push({
							LocalizedName:item.LocalizedName,
							KeyCity:item.Key 
						});
			        });
			setResults(listCitys);
		} catch(e){
            console.log('Error from SearchWrapper component , failed get autocomplete data , Error:', e);
		}
	};

	const renderSearchResult = (object:{LocalizedName:string,KeyCity:string }, keyChange) => {
		return <SearchResult result={object.LocalizedName} onChoose={keyChange} setSelectedItem={setSelectedItem} />;
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
