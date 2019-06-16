import { h, Component } from 'preact';
import Router from 'preact-router';
import MainDateTime from './main-datetime';
import MainEpoch from './main-epoch';

export default class Main extends Component {
	render() {
		return (
			<main>
				<h1>Time Calculator</h1>
				<Router>
					<MainDateTime path='/' />
					<MainEpoch path='/epoch' />
				</Router>
			</main>
		);
	}
}
