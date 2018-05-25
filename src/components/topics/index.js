import { h, Component } from 'preact';
import style from './style';

export default class Profile extends Component {
	state = {
		topics: [],
		currentURL: ''
	};
  
	fetchTopics(path) {
		let pageNumb = 1;
		fetch(`https://node-hnapi.herokuapp.com${path}?page=${pageNumb}`)
			.then(res => res.json())
			.then(data => this.setState({ topics: data, currentURL: path }));
	}
  
	whichURL(path) {
		let chosenPath = '';
		switch (path) {
			case '/':
				chosenPath = '/news';
				break;
			default:
				chosenPath = path;
				break;
		}
		return chosenPath;
	}
  
	calcTime(time) {
		let currentTime = new Date();
		time = new Date(time * 1000);
		return Math.floor(((currentTime - time) / 1000 / 60 / 60));
	}

	componentDidMount() {
		const { pathname } = window.location;
		let path = this.whichURL(pathname);
		this.fetchTopics(path);
	}
  
	shouldComponentUpdate() {
		const { pathname } = window.location;
		let path = this.whichURL(pathname);
		const { currentURL } = this.state;
		if ( path !== currentURL ) {
			// console.log('Called Inside');
			// this.setState({ currentURL: pathname });
			return this.fetchTopics(path);
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
						<span class={style.count}> {count++}. </span>
						<a href={topic.url} class={style.title}>{topic.title}</a>
						<section class={style.meta}>
							<span class={style.topic_points}>{topic.points} by {topic.user} {this.calcTime(topic.time)}</span>
							<a href={`/item/${topic.id}`} class={style.comment_count}>{topic.comments_count}</a>
						</section>
					</li>)
					)}
				</ul>
			</div>
		);
	}
}
