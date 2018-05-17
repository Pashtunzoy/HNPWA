import { h, Component } from 'preact';
// import { Link } from 'preact-router/match';
import style from './style';

export default class Topics extends Component {
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
      </div>
    );
  }
}
