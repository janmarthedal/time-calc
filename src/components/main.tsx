import { h, Component } from 'preact';
import Router from 'preact-router';
import MainDateTime from './main-datetime';
import MainEpoch from './main-epoch';

const baseUrl = window.location.pathname;

export default class Main extends Component {
	render() {
		return (
			<main>
				<h1>Time Calculator</h1>
				<Router>
					<MainDateTime baseUrl={baseUrl} path={baseUrl} />
					<MainEpoch baseUrl={baseUrl} path={baseUrl + 'epoch'} />
				</Router>
			</main>
		);
	}
}
