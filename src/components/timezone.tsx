import { h, Component } from 'preact';

export default class TimeZone extends Component<{
	zone: string, onChange: (value: string) => void, disabled?: boolean
}> {
	render({ zone, onChange, disabled }) {
		return (
			<input 
				type="text"
				value={zone}
				list="timezones"
				onInput={e => onChange((e.target as HTMLInputElement).value)}
				disabled={disabled}
			/>
		);
	}
}
