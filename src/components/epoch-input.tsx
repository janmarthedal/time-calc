import { h, Component, Fragment } from 'preact';
import { DateTime } from 'luxon';

export default class EpochInput extends Component<
	{ onChange: (value: DateTime) => void },
	{ text: string, unit: string }
> {
	state = {
		text: '',
		unit: 'ms'
	}
	render({ onChange }, { text, unit }) {
		const updateState = (text: string, unit: string) => {
			const e = Number.parseInt(text);
			const factor = unit === 's' ? 1000 : 1;
			const dt = Number.isInteger(e) ? DateTime.fromMillis(e * factor) : null;
			onChange(dt);
			this.setState({ text, unit });
		}
		return (
			<Fragment>
				<input
					class="pure-u-1 pure-u-md-3-5"
					type="text"
					value={text}
					onInput={e => updateState((e.target as HTMLInputElement).value, unit)}
				/>
				<select
					class="pure-u-1 pure-u-md-2-5"
					value={unit}
					onChange={e => updateState(text, (e.target as HTMLSelectElement).value)}
				>
					<option value="ms">milliseconds</option>
					<option value="s">seconds</option>
				</select>
			</Fragment>
		);
	}
}
