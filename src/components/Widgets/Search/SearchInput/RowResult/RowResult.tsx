import * as React from 'react';
import { Container } from './RowResult.styles';

interface RowResultProps {
	result: any;
	choose: (key) => void;
}

const RowResult = ({ result, choose }: RowResultProps) => (
	<Container onClick={() => choose(result)}>{result}</Container>
);

export default RowResult;
