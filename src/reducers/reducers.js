
//создаем функцию получения текущей даты
function formatDate(date) {
	return date.toLocaleDateString() + ' || ' + date.toLocaleTimeString();
}

const todos = (state, action) => {
	//создаем копию массива текущего состояния объекта
	let comments = [...state.comments];

	switch (action.type) {
		case 'ADD_COMMENT':
			//добавляем новые значения в копию массива
			comments.push({
				id: action.id,
				user: action.user,
				comment: action.comment,
				date: formatDate(new Date())
			});
			//записываем массив данных в LocalStorage
			localStorage.setItem('comments', JSON.stringify(comments));
			return {
			comments,
			newComments: {newUser: '', newComment: ''}};

		case 'REMOVE_COMMENT':
			//вытаскиваем в массив из LocalStorage все существующие данные
			let arr = JSON.parse(localStorage.getItem('comments'));
			//исключаем из массива значение, которое будем удалять
			comments = arr.filter(item => item.id !== action.id);
			//переписываем массив в LocalStorage
			localStorage.setItem('comments', JSON.stringify(comments));
			// //обновляем состояния
			return {...state, comments};

		default:
			return state;
	}

}

export default todos;