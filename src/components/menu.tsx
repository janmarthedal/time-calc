import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class Menu extends Component<{ baseUrl: string, page: number }> {
	render({ baseUrl, page }) {
		return (
			<div>
				{page === 1
					? <button class="pure-button pure-button-disabled pure-button-primary">DateTime</button>
					: <Link class="pure-button" href={baseUrl}>DateTime</Link>}
				{page === 2
					? <button class="pure-button pure-button-disabled pure-button-primary">Epoch</button>
					: <Link class="pure-button" href={baseUrl + "epoch"}>Epoch</Link>}
				{page === 3
					? <button class="pure-button pure-button-disabled pure-button-primary">Duration</button>
					: <Link class="pure-button" href={baseUrl + "duration"}>Duration</Link>}
			</div>
		);
	}
}
