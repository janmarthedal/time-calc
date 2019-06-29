import { DateTime } from 'luxon';
import { h, Component } from 'preact';
import InputReadOnly from './input-readonly';
import TimeZone from './timezone';
import { zoneLocal } from '../lib/globals';

export default class DateOutput extends Component<
    { datetime: DateTime }, { zone: string }
> {
	state = {
		zone: zoneLocal
	}
	render({ datetime }, { zone }) {
		return (
			<form class="pure-form">
				<InputReadOnly
					value={datetime.setZone(zone).toISO({ suppressMilliseconds: true })}
				/>
				<TimeZone zone={zone} onChange={zone => this.setState({ zone })} />
			</form>
		);
	}
}
