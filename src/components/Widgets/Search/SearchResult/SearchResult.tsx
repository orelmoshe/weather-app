import * as React from 'react';
import { Container } from './SearchResult.styles';

interface SearchResultProps {
	result: any;
	onChoose: (key) => void;
	setSelectedItem?: (any) => void;
}

const SearchResult = ({ result, onChoose, setSelectedItem }: SearchResultProps) => {
	const handleClick = resultItem => {
		onChoose(resultItem);
		setSelectedItem(resultItem);
	};
	return <Container onClick={() => handleClick(result)}>{result}</Container>;
};

export default SearchResult;
