import { h, Component } from 'preact';
import CommentView from './commentView';
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
    const { title, domain, user, time_ago: timeAgo } = topic;
    let flattendComments = [];

    if (topic.comments.length >= 1) {
      console.log('Inside function call');
  		flattendComments = recursiveComments(topic);
    }

  	return (
  		<section>
  			<h1>{title}({domain})</h1>
  			<span>{user}</span>
  			<span>{timeAgo}</span>
  			<ul class={style[`comments-list`]}>
  				{/* cArr is an array & withen it contains the comments for each section */}
  				{flattendComments.length >= 1 && <CommentView comments={flattendComments} style={style} />}
  			</ul>
  		</section>
  	);
  }
}
