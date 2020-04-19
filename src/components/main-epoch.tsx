import { h, Component, Fragment } from 'preact';
import { DateTime } from 'luxon';
import EpochInput from './epoch-input';
import DateOutput from './date-output';

export default class MainEpoch extends Component<{}, { datetime: DateTime }> {
	state = {
		datetime: null
	}
	render({}, { datetime }) {
		return (
			<Fragment>
				<label class="pure-u-1">Input epoch (ms)</label>
				<EpochInput onChange={dt => this.setState({ datetime: dt })} />
				<label class="pure-u-1">Output ISO datetime</label>
				<DateOutput datetime={ datetime } />
			</Fragment>
		);
	}
}
