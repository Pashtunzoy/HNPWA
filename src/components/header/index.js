import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<span class={style.logo}>HN</span>
        <span class={style.brand}>Hacker News</span>
				<nav>
					<Link activeClassName={style.active} href="/">Top</Link>
					<Link activeClassName={style.active} href="/newest">New</Link>
					<Link activeClassName={style.active} href="/show">Show</Link>
					<Link activeClassName={style.active} href="/ask">Ask</Link>
					<Link activeClassName={style.active} href="/jobs">Jobs</Link>
					{/* <Link activeClassName={style.active} href="/profile">Me</Link>
					<Link activeClassName={style.active} href="/profile/john">John</Link> */}
				</nav>
			</header>
		);
	}
}
