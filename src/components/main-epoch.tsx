import { h, Component } from 'preact';
import { DateTime } from 'luxon';
import EpochInput from './epoch-input';
import DateOutput from './date-output';

export default class MainEpoch extends Component<{}, { datetime: DateTime }> {
	state = {
		datetime: null
	}
	render({}, { datetime }) {
		return (
			<div>
				<h3>Input</h3>
				<EpochInput onChange={dt => this.setState({ datetime: dt })} />
				<h3>Output</h3>
				{datetime ?
					<DateOutput datetime={ datetime } />
					: <span>No legal epoch</span>
				}				
			</div>
		);
	}
}
