import React from 'react';

const AddComment = (props) => {
	const {addComment} = props;
	let input
	let textarea

  return (
    <form onSubmit={ev => {
			ev.preventDefault();
			addComment(input.value, textarea.value);
			input.value = '';
			textarea.value = ''}}
			>
				<input
					type="text"
					name="newUser"
					ref={node => (input = node)}
					placeholder="Введите Ваше имя"
					required
				 />
				<textarea
					name="newComment"
					ref={node => (textarea = node)}
					placeholder="Введите комментарий"
					required
				/>
				<button type="submit">
					Добавить
				</button>
		</form>
  )
}

export default AddComment;