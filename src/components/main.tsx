import { h, Component } from 'preact';
import MainDateTime from './main-datetime';
import MainEpoch from './main-epoch';
import { zoneLocal, zoneUTC } from '../lib/globals';

const timezones = [zoneLocal, zoneUTC];

export default class Main extends Component {
	render() {
		return (
			<main>
				<h1>Time Calculator</h1>
				<h2>Datetime</h2>
				<MainDateTime />
				<h2>Epoch</h2>
				<MainEpoch />
				<datalist id="timezones">
					{timezones.map(tz => <option>{tz}</option>)}
				</datalist>	  
			</main>
		);
	}
}
