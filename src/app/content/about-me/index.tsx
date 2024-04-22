import classes from './AboutMe.module.scss';
import { Card, Image } from 'antd';
import meAndDogs from '../../../images/me_and_dogs.jpeg';

export const AboutMe = () => (
	<div className={classes.aboutMe}>
		<Card>
			<div>
				<Image src={meAndDogs} width="40%" />
			</div>
		</Card>
	</div>
);
