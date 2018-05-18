import { h, Component } from 'preact';
import style from './style';

export default class Profile extends Component {
	state = {
		topics: [],
		currentURL: ''
	};
  
	fetchTop(path) {
		let pageNumb = 1;
		fetch(`http://node-hnapi.herokuapp.com/${path}?page=${pageNumb}`)
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
			return this.fetchTop(path);
		}
		return false;
	}
  
	render({ path }) {
		const { topics } = this.state;
		let count = 1;
		return (
			<div class={style.topic_list}>
				<ul>
					{topics.map(topic => (<li>
						<span class={style.count}> {count++} </span>
						<a href={`/`} class={style.title}>{topic.title}</a>
						<span class={style.topic_points}>{topic.points} by {topic.user} 1h</span>
						<a href={`/`} class={style.comment_count}>{topic.comments_count}</a>
					</li>)
					)}
				</ul>
			</div>
		);
	}
}
