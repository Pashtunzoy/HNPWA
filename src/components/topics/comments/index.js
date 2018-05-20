import { h, Component } from 'preact';
import style from './style';

export default class Comments extends Component {

  state = {
  	topic: {}
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
  	const { title, domain, user, time_ago, comments } = topic;
  	return (
  		<section>
  			<h1>{title}({domain})</h1>
  			<span>{user}</span>
  			<span>{time_ago}</span>
  			<ul>
  				{comments && comments.map(comment => (<li>
  					{comment.content}
  				</li>
  				))}
  			</ul>
  		</section>
  	);
  }
}
