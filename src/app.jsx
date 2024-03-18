import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const [todos, setTodos] = useState([]);
	return (
		<div className={styles.app}>
			{todos.map((todo) => {
				return <div></div>;
			})}
		</div>
	);
};
