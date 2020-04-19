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
			<div className="pure-form pure-g">
				<label className="pure-u-1">Input epoch</label>
				<EpochInput onChange={dt => this.setState({ datetime: dt })} />
				<label className="pure-u-1">Output ISO datetime</label>
				<DateOutput datetime={ datetime } />
			</div>
		);
	}
}
