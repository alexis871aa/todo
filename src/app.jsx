import styles from './app.module.css';
import { useEffect, useState } from 'react';
import { Todo, ControlPanel } from './components/index.js';
import { readTodos } from './api';

export const App = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		readTodos().then((loadedTodos) => setTodos(loadedTodos));
	}, []);

	return (
		<div className={styles.app}>
			<ControlPanel />
			{todos.map(({ id, title, completed }) => (
				<Todo key={id} title={title} completed={completed} id={id} />
			))}
		</div>
	);
};
