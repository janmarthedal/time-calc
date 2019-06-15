import { DateTime } from 'luxon';
import { h, Component } from "preact";


export default class App extends Component {
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


const parseTime = (t: string, zone?: string) => {
	const dt = DateTime.fromISO(t, {
		zone: zone || undefined
	});
	return dt.isValid ? dt : null;	
};

const localZone = DateTime.local().zone.name;

class TimeZone extends Component<{zone: string, onChange: (value: string) => void}> {
	render({ zone, onChange }) {
		return (
			<input 
				type="text"
				value={zone}
				onInput={e => onChange((e.target as HTMLInputElement).value)}
			/>
		);
	}
}

class DateInput extends Component<{ onChange: (value: string) => void }> {
	state = {
		text: '',
		zone: localZone
	}
	render({ onChange }, { text, zone }) {
		const updateText = (text: string) => {
			this.setState({ text });
			onChange(parseTime(text, zone));
		};
		return (
			<form class="pure-form">
				<input
					type="text"
					value={text}
					onInput={e => updateText((e.target as HTMLInputElement).value)}
				/>
				<TimeZone zone={zone} onChange={_ => {}}/>
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
				<TimeZone zone={zone} onChange={zone => this.setState({ zone })} />
				<p>ISO: {datetime.setZone(zone).toISO({ suppressMilliseconds: true })}</p>
				<p>Epoch: {datetime.toMillis()}</p>
			</form>
		) : (
      <span>No legal date</span>
    );
	}
}
