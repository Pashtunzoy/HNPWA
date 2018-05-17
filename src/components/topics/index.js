import { h, Component } from 'preact';
import style from './style';

export default class Profile extends Component {
	state = {
		data: []
	};
  
	render({ topic }) {
		return (
			<div class={style.profile}>
				<h2>{this.props.path}</h2>
				<ul>
					<li>
						<span>1</span>
						<a href={`/`}>Title</a>
						<a href={`/`}>14</a>
						<span>1212 points by john_dov 1h</span>
					</li>
				</ul>
			</div>
		);
	}
}
