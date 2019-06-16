import { h, Component } from 'preact';
import { DateTime } from 'luxon';
import Menu from './menu';
import EpochInput from './epoch-input';
import DateOutput from './date-output';

export default class MainEpoch extends Component<
	{ baseUrl: string }, { datetime: DateTime }
> {
	state = {
		datetime: null
	}
	render({ baseUrl }, { datetime }) {
		return (
			<div>
				<Menu baseUrl={baseUrl} page={2} />
				<h2>Input</h2>
				<EpochInput onChange={dt => this.setState({ datetime: dt })} />
				<h2>Output</h2>
				{datetime ?
					<DateOutput datetime={ datetime } />
					: <span>No legal epoch</span>
				}				
			</div>
		);
	}
}
