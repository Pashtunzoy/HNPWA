import { h, Component } from 'preact';
// import CommentView from './commentView';
import recursiveComments from '../../../utils/commentRecursion';
import style from './style';

export default class Comments extends Component {

  state = {
  	topic: {
  	  comments: []
  	}
  };

  fetchTopic() {
  	fetch(`https://node-hnapi.herokuapp.com${window.location.pathname}`)
  		.then(res => res.json())
  		.then(data => {
  			this.setState({ topic: data });
  		});
  }

  componentDidMount() {
  	this.fetchTopic();
  }

  render() {
  	const { topic } = this.state;
  	const { title, domain, user, time_ago: timeAgo, comments_count: commentsCount } = topic;
  	let flattendComments = [];

  	if (topic.comments.length >= 1) {
  		flattendComments = recursiveComments(topic);
  	}

  	return (
  		<section class={style[`comments-view`]}>
  			<header class={style[`comments-header`]}>
  				<h1>{title}</h1>
  				<span> ({domain}) </span>
  				<span>{user}</span>
  				<span>{timeAgo}</span>
  				<span class={style[`comments-count`]}> | comments {commentsCount}</span>
  			</header>
  			<ul class={style[`comments-list`]}>
  				{/* flattenedComments is an array & within it contains the comments for each comment section */}
  				{ flattendComments.length >= 1 && flattendComments.map(cm =>
  					cm.map(comment => {
  						let levelStyle = style[`level${comment.level}`];
  						return (
  							<li class={levelStyle}>
  								<span class={style[`comment-info`]}>{ comment.user } { comment.time_ago }</span>
  								<p dangerouslySetInnerHTML={{ __html: comment.content }} />
  							</li>
  						);
  					})
  				)}
  			</ul>
  		</section>
  	);
  }
}
