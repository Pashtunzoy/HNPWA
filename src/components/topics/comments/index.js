import { h, Component } from 'preact';
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

  recursiveComments({ comments = [] }) {
  	// Gets the array returned by the recursive function
  	// console.log(data.comments);
  	return comments.map(c => {
  		let cm = c.comments.slice(0, 1).shift();
  	  let laterArray = {};
  	  laterArray.comments = c.comments.slice(1, c.length);
  	  let initialArr = [];
  	  initialArr.push(c.content);
  	  let finalResult = [];
  	  delete c.comments;
  	  finalResult.push(c);
  	  return this.recursive(cm, initialArr, laterArray, finalResult);
  	});
  }

  // Main recursive algorithm for the comment to traverse through and flatten it
  recursive(cm, arr, laterArr, finalResult) {
  	if (!cm || !cm.comments.length) {
  		cm && cm.content ? arr.push(cm.content) && finalResult.push(cm) : cm;
  		if (laterArr.comments.length) {
  			laterArr.comments = laterArr.comments
  				.filter(arr => arr.length >= 1 || arr.content)
  				.map((c, i) => c[i] || c);
  			return this.recursive(laterArr.comments.shift(), arr, laterArr, finalResult);
  		}
  		return finalResult;
  	}
  	!arr.includes(cm.content) && cm.content ? arr.push(cm.content) && finalResult.push(cm) : arr;
  	let currentCM = cm.comments.shift();
  	if (currentCM.comments.length) {
  		laterArr.comments.unshift(currentCM.comments);
  	}
  	else if (!laterArr.comments.length) {
  		laterArr.comments.unshift(cm.comments);
  	}
  	return this.recursive(currentCM, arr, laterArr, finalResult);
  }

  commentsView(flattendComments) {
  	return flattendComments && flattendComments.map(cArr =>
  		cArr.map(comment => {
        let level = `level${comment.level}`;
        return (
  				<li class={style[`${level}`]}>
            <p dangerouslySetInnerHTML={{ __html: comment.content }}/>
  				</li>
  			)}
  		));
  }

  componentWillMount() {
  	this.fetchTopic();
  }
  // componentDidMount() {
  //   this.fetchTopic();
  //   console.log('DidMount');
  // }

  render() {
    const { topic } = this.state;
  	let flattendComments = null;
  	if (topic.comments.length >= 1) {
  		flattendComments = topic.comments.length && this.recursiveComments(topic);
  	}
  	const { title, domain, user, time_ago, comments } = topic;
  	return (
  		<section>
  			<h1>{title}({domain})</h1>
  			<span>{user}</span>
  			<span>{time_ago}</span>
  			<ul class={style[`comments-list`]}>
  				{/* cArr is an array & withen it contains the comments for each section */}
  				{topic.comments.length >= 1 && this.commentsView(flattendComments)}
  			</ul>
  		</section>
  	);
  }
}
