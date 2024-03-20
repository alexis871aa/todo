import styles from './todo.module.css';
import { useState } from 'react';
import { Button } from '../button/button.jsx';
import { updateTodo, deleteTodo } from '../../api/index.js';

export const Todo = ({ id, completed, title }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(title);

	const onTitleChange = ({ target }) => {
		setNewTitle(target.value);
	};

	const onTodoEdit = () => {
		setIsEditing(true);
	};

	const onTodoSave = () => {
		setIsEditing(false);
		updateTodo({ id, title: newTitle });
	};

	const onTodoRemove = () => {
		deleteTodo(id);
	};

	return (
		<div className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed}
				readOnly
			/>
			<div className={styles.title}>
				{isEditing ? (
					<input type="text" value={newTitle} onChange={onTitleChange} />
				) : (
					<div onClick={onTodoEdit}>{title}</div>
				)}
			</div>
			<div>
				{isEditing ? (
					<Button onClick={onTodoSave}>✎</Button>
				) : (
					<Button onClick={onTodoRemove}>✖</Button>
				)}
			</div>
		</div>
	);
};
