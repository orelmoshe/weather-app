import * as React from 'react';
import { Container,TextDay , Icon,Degrees} from './Day.styles';
import Images from '../../../../../../assets/images/images';
interface DayProps {
	nameDay: string;
	degrees:string;
}

const Day = ({nameDay,degrees }: DayProps) => {
	return (
		<Container>
			<TextDay>{nameDay}</TextDay>
			<Icon src={`${Images.sun}`}/>
			<Degrees>{degrees}°C</Degrees>
		</Container>
	);
};

export default Day;