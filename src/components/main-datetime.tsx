import { h, Component } from 'preact';
import { DateTime } from 'luxon';
import DateInput from './date-input';
import DateOutput from './date-output';
import InputReadonly from './input-readonly';

export default class MainDateTime extends Component<{}, { datetime: DateTime }> {
	state = {
		datetime: null
	}
	render({}, { datetime }) {
		return (
			<div className="pure-form pure-g">
				<label className="pure-u-1">Input ISO datetime</label>
				<DateInput onChange={dt => this.setState({ datetime: dt })} />
				<label className="pure-u-1">Output ISO datetime</label>
				<DateOutput datetime={ datetime } />
				<label className="pure-u-1">Output epoch (ms)</label>
				<InputReadonly
					value={datetime ? datetime.toMillis() : 'Invalid input'}
					disable={!datetime}
				/>
			</div>
		);
	}
}
