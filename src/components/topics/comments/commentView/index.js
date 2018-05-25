import { h } from 'preact';
console.log('CommentsView');
export default ({ comments, style }) => (
	comments.map(cm =>
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
