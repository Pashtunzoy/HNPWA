import { h, Component } from 'preact';
import style from './style';

export default class Profile extends Component {
	state = {
		topics: [],
		currentURL: ''
	};
  
	fetchTop(path) {
		console.log(path);
		fetch(`https://api.hnpwa.com/v0/${path}/1.json`)
			.then(res => res.json())
			.then(data => this.setState({ topics: data, currentURL: path }));
	}
  
	whichURL(path) {
		let chosenPath = '';
		switch (path) {
			case '/':
				chosenPath = 'news';
				break;
			default:
				chosenPath = path;
				break;
		}
		return chosenPath;
	}

	componentDidMount() {
		const { pathname } = window.location;
		let path = this.whichURL(pathname);
		this.fetchTop(path);
	}
  
	shouldComponentUpdate() {
		const { pathname } = window.location;
		let path = this.whichURL(pathname);
		const { currentURL } = this.state;
		if ( path !== currentURL ) {
			console.log('Called Inside');
			// this.setState({ currentURL: pathname });
			this.fetchTop(path);
		}
	}
  
	render({ path }) {
		const { topics } = this.state;
		let count = 1;
		return (
			<div class={style.profile}>
				<h2>{this.props.path}</h2>
				<ul>
					{topics.map(topic => (<li>
						<span>{count++}</span>
						<a href={`/`}>{topic.title}</a>
						<a href={`/`}>{topic.comments_count}</a>
						<span>{topic.points} by {topic.user} 1h</span>
					</li>)
					)}
				</ul>
			</div>
		);
	}
}
