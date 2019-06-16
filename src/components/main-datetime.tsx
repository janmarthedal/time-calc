import { h, Component } from 'preact';
import { DateTime } from 'luxon';
import Menu from './menu';
import DateInput from './date-input';
import DateOutput from './date-output';

export default class MainDateTime extends Component<{}, { datetime: DateTime }> {
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
