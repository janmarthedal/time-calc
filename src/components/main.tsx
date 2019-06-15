import { h, Component } from 'preact';
import DateInput from './date-input';
import DateOutput from './date-output';

export default class Main extends Component {
	state = {
		datetime: null
	}
	render({}, { datetime }) {
		return (
			<main>
				<h1>Time Calculator</h1>
				<h2>Input</h2>
				<DateInput onChange={dt => this.setState({ datetime: dt })} />
				<h2>Output</h2>
				<DateOutput datetime={ datetime } />
			</main>
		);
	}
}
