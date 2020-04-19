import { Fragment } from 'preact';
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
			<Fragment>
				<InputReadOnly
					value={datetime ? datetime.setZone(zone).toISO({ suppressMilliseconds: true }) : 'Invalid input'}
					disable={!datetime}
				/>
				{
					datetime &&
					<TimeZone zone={zone} onChange={zone => this.setState({ zone })} />
				}
			</Fragment>
		);
	}
}
