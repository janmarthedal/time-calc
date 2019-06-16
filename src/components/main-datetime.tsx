import { h, Component } from 'preact';
import { DateTime } from 'luxon';
import Menu from './menu';
import DateInput from './date-input';
import DateOutput from './date-output';

export default class MainDateTime extends Component<
    { baseUrl: string }, { datetime: DateTime }
> {
	state = {
		datetime: null
	}
	render({ baseUrl }, { datetime }) {
		return (
			<div>
				<Menu baseUrl={baseUrl} page={1} />
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
