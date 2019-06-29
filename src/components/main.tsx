import { h, Component } from 'preact';
import Router from 'preact-router';
import MainDateTime from './main-datetime';
import MainEpoch from './main-epoch';
import { zoneLocal, zoneUTC } from '../lib/globals';

const baseUrl = window.location.pathname;

const timezones = [zoneLocal, zoneUTC];

export default class Main extends Component {
	render() {
		return (
			<main>
				<h1>Time Calculator</h1>
				<Router>
					<MainDateTime baseUrl={baseUrl} path={baseUrl} />
					<MainEpoch baseUrl={baseUrl} path={baseUrl + 'epoch'} />
				</Router>
				<datalist id="timezones">
					{timezones.map(tz => <option>{tz}</option>)}
				</datalist>	  
			</main>
		);
	}
}
