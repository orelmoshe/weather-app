import * as React from 'react';
import { Container } from './SearchResult.styles';

interface SearchResultProps {
	result: { LocalizedName: string; KeyCity: string };
	onChoose: (key) => void;
	setSelectedItem?: (any) => void;
	setSelectedCity?: (any) => void;
}

const SearchResult = ({
	result,
	onChoose,
	setSelectedItem,
	setSelectedCity
}: SearchResultProps) => {
	const handleClick = resultItem => {
		onChoose(resultItem.LocalizedName);
		setSelectedItem(resultItem.LocalizedName);
		setSelectedCity(resultItem);
	};
	return <Container onClick={() => handleClick(result)}>{result.LocalizedName}</Container>;
};

export default SearchResult;
