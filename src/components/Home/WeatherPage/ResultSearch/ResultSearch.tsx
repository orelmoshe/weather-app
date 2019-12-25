import * as React from 'react';
import { Container} from './ResultSearch.styles';
import HeaderResult from './HeaderResult/HeaderResult';

interface ResultSearchProps {

}

const ResultSearch = ({ }: ResultSearchProps) => {
	return (
		<Container>
            <HeaderResult/>
		</Container>
	);
};

export default ResultSearch;