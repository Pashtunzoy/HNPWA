import { h } from 'preact';
export default ({ comments, style }) => (
  comments.length >= 1 && comments.map(cm =>
  	cm.map(comment => {
      let levelStyle = style[`level${comment.level}`];
			return (
				<li class={levelStyle}>
					<p dangerouslySetInnerHTML={{ __html: comment.content }} />
				</li>
			);
		})
	)
);
