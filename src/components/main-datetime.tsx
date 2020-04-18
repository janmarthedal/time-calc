import { h, Component } from 'preact';
import { DateTime } from 'luxon';
import DateInput from './date-input';
import DateOutput from './date-output';

export default class MainDateTime extends Component<{}, { datetime: DateTime }> {
	state = {
		datetime: null
	}
	render({}, { datetime }) {
		return (
			<div>
				<h3>Input</h3>
				<DateInput onChange={dt => this.setState({ datetime: dt })} />
				<h3>Output</h3>
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
