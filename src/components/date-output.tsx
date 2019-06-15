import { DateTime } from 'luxon';
import { h, Component } from 'preact';
import InputReadOnly from './input-readonly';
import TimeZone from './timezone';

const localZone = DateTime.local().zone.name;

export default class DateOutput extends Component<
    { datetime: DateTime }, { zone: string }
> {
	state = {
		zone: localZone
	}
	render({ datetime }, { zone }) {
		return datetime	? (
			<form class="pure-form">
				<InputReadOnly
				value={datetime.setZone(zone).toISO({ suppressMilliseconds: true })}
				/>
				<TimeZone zone={zone} onChange={zone => this.setState({ zone })} />
				<p>Epoch (ms): {datetime.toMillis()}</p>
			</form>
		) : (
		<span>No legal date</span>
		);
	}
}
