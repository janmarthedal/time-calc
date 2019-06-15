import { DateTime } from 'luxon';
import { h, Component } from 'preact';
import InputReadOnly from './input-readonly';


export default class Main extends Component {
	state = {
		datetime: null
	}
	render({}, { datetime }) {
		return (
			<main>
				<h1>Time Converter</h1>
				<h2>Input</h2>
				<DateInput onChange={dt => this.setState({ datetime: dt })} />
				<h2>Output</h2>
				<DateOutput datetime={ datetime } />
			</main>
		);
	}
}


const localZone = DateTime.local().zone.name;

class TimeZone extends Component<{
	zone: string, onChange: (value: string) => void, disabled?: boolean
}> {
	render({ zone, onChange, disabled }) {
		return (
			<input 
				type="text"
				value={zone}
				onInput={e => onChange((e.target as HTMLInputElement).value)}
				disabled={disabled}
			/>
		);
	}
}

class DateInput extends Component<
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

class DateOutput extends Component<{ datetime: DateTime }, { zone: string }> {
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
