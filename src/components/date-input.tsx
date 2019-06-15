import { DateTime } from 'luxon';
import { h, Component } from 'preact';
import TimeZone from './timezone';

const localZone = DateTime.local().zone.name;

export default class DateInput extends Component<
	{ onChange: (value: string) => void },
	{ text: string, zone: string, ownZone: boolean }
> {
	state = {
		text: '',
		zone: localZone,
		ownZone: false
	}
	render({ onChange }, { text, zone, ownZone }) {
		const updateState = (text: string, zone: string, ownZone: boolean) => {
			let dt: DateTime = null;
			const dt0 = DateTime.fromISO(text, { zone: 'UTC' });
			if (dt0.isValid) {
				const dt1 = DateTime.fromISO(text, { zone: 'UTC+1' });
				if (dt0.toMillis() === dt1.toMillis()) {
					dt = DateTime.fromISO(text, { setZone: true });
					zone = dt.zoneName;
					ownZone = true;
				} else {
					// no timezone
					dt = DateTime.fromISO(text, { zone });
					ownZone = false;
				}
			}				
			onChange(dt);
			this.setState({ text, zone, ownZone });
		}
		const updateText = (text: string) => updateState(text, zone, ownZone);
		const updateZone = (zone: string) => updateState(text, zone, ownZone);
		return (
			<form class="pure-form">
				<input
					type="text"
					value={text}
					onInput={e => updateText((e.target as HTMLInputElement).value)}
				/>
				<TimeZone zone={zone} onChange={updateZone} disabled={ownZone}/>
			</form>
		);
	}
}
