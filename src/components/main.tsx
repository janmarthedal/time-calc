import { h, Component } from 'preact';
import Router from 'preact-router';
import { DateTime } from 'luxon';
import DateInput from './date-input';
import DateOutput from './date-output';
import EpochInput from './epoch-input';

class Menu extends Component<{ page: number }> {
	render({ page }) {
		return (
			<div>
				{page === 1
					? <button class="pure-button pure-button-disabled pure-button-primary">DateTime</button>
					: <a class="pure-button" href="/">DateTime</a>}
				{page === 2
					? <button class="pure-button pure-button-disabled pure-button-primary">Epoch</button>
					: <a class="pure-button" href="/epoch">Epoch</a>}
				{page === 3
					? <button class="pure-button pure-button-disabled pure-button-primary">Duration</button>
					: <a class="pure-button" href="/duration">Duration</a>}
			</div>
		);
	}
}

class MainDateTime extends Component<{}, { datetime: DateTime }> {
	state = {
		datetime: null
	}
	render({}, { datetime }) {
		return (
			<div>
				<Menu page={1} />
				<h2>Input</h2>
				<DateInput onChange={dt => this.setState({ datetime: dt })} />
				<h2>Output</h2>
				{datetime ?
					<div>
						<DateOutput datetime={ datetime } />
						<p>Epoch (ms): {datetime.toMillis()}</p>
					</div>
					: <span>No legal date</span>
				}				
			</div>
		);
	}
}

class MainEpoch extends Component<{}, { datetime: DateTime }> {
	state = {
		datetime: null
	}
	render({}, { datetime }) {
		return (
			<div>
				<Menu page={2} />
				<h2>Input</h2>
				<EpochInput onChange={dt => this.setState({ datetime: dt })} />
				<h2>Output</h2>
				{datetime ?
					<div>
						<DateOutput datetime={ datetime } />
					</div>
					: <span>No legal epoch</span>
				}				
			</div>
		);
	}
}

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
