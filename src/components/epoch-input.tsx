import { h, Component } from 'preact';
import { DateTime } from 'luxon';

export default class EpochInput extends Component<
	{ onChange: (value: DateTime) => void },
	{ text: string }
> {
	state = {
		text: '',
	}
	render({ onChange }, { text }) {
		const updateState = (text: string) => {
			const e = Number.parseInt(text);
			const dt = Number.isInteger(e) ? DateTime.fromMillis(e) : null;
			onChange(dt);
			this.setState({ text });
		}
		return (
			<form class="pure-form">
				<input
					type="text"
					value={text}
					onInput={e => updateState((e.target as HTMLInputElement).value)}
				/>
			</form>
		);
	}
}
