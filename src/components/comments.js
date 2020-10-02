import React from 'react';

const Comment = (props) => {
	const { todos, removeComment } = props;

	return(
		<div className="comments">
			{todos.comments.map(item => item.user !== '' ?
					<div className="comment"
						key={item.id}
						>
						<p> {item.user + ':'} </p>
						<p> {item.comment} </p>
						<small> {item.date} </small>
						<button className="comment__button" title="delete" onClick={ev => removeComment(item.id)}>
						  Удалить
						</button>
					</div> :
					null)
			}
		</div>
	);
}


export default Comment;