import * as React from 'react';
import { Container,TextDay , Icon,Degrees} from './Day.styles';
import Images from '../../../../../../assets/images/images';

interface DayProps {
	nameDay: string;
	degrees: string;
	iconWeather: string;
}

const Day = ({nameDay,degrees,iconWeather }: DayProps) => {
	return (
		<Container>
			<TextDay>{nameDay}</TextDay>
			<Icon src={`${iconWeather}`}/>
			<Degrees>{degrees}°C</Degrees>
		</Container>
	);
};

export default Day;