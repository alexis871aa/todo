const fetchServer = (method, { id, ...payload } = {}) => {
	let url = 'http://localhost:3000/todos';
	let options = {
		method: method,
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
	};

	if (id !== undefined) {
		url += `${url}/${id}`;
		options.body = JSON.stringify(payload);
	}

	return fetch(url, options).then((jsonData) => jsonData.json());
};

export const createTodo = (newTodo) => fetchServer('POST', newTodo);

export const readTodos = () => fetchServer('GET');

export const updateTodo = (todoData) => fetchServer('PATCH', todoData);

export const deleteTodo = (todoId) => fetchServer('DELETE', { id: todoId });
