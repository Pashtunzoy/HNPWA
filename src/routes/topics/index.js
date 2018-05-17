import { h, Component } from 'preact';
// import { Link } from 'preact-router/match';
import TopicView from '../topics';
import style from './style';

export default class Topics extends Component {
	getData() {
		return;
	}
	render() {
		return (
			<div class={style.profile}>
				<ul>
					<li>
						<span>1</span>
						<a href={`/`}>Title</a>
						<a href={`/`}>14</a>
						<span>1212 points by john_dov 1h</span>
					</li>
				</ul>
				<TopicView />
			</div>
		);
	}
}
