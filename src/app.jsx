import styles from './app.module.css';
import { useEffect, useState } from 'react';
import { Todo } from './components/index.js';

export const App = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedResponse) => loadedResponse.json())
			.then((loadedTodos) => setTodos(loadedTodos));
	}, []);

	return (
		<div className={styles.app}>
			{todos.map(({ id, title, completed }) => (
				<Todo key={id} title={title} completed={completed} />
			))}
		</div>
	);
};
