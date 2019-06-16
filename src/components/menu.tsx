import { h, Component } from 'preact';

export default class Menu extends Component<{ baseUrl: string, page: number }> {
	render({ baseUrl, page }) {
		return (
			<div>
				{page === 1
					? <button class="pure-button pure-button-disabled pure-button-primary">DateTime</button>
					: <a class="pure-button" href={baseUrl}>DateTime</a>}
				{page === 2
					? <button class="pure-button pure-button-disabled pure-button-primary">Epoch</button>
					: <a class="pure-button" href={baseUrl + "epoch"}>Epoch</a>}
				{page === 3
					? <button class="pure-button pure-button-disabled pure-button-primary">Duration</button>
					: <a class="pure-button" href={baseUrl + "duration"}>Duration</a>}
			</div>
		);
	}
}
