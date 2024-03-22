import { useEffect, useState } from 'react';
import { Todo, ControlPanel } from './components/index.js';
import { createTodo, readTodos, updateTodo, deleteTodo } from './api';
import {
	addTodoInTodos,
	findTodo,
	setTodoInTodos,
	removeTodoInTodos,
} from './utils/index.js';
import styles from './app.module.css';
import { NEW_TODO_ID } from './const';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isAlphabetSorting, setIsAlphabetSorting] = useState(false);

	const onTodoAdd = () => {
		setTodos(addTodoInTodos(todos));
	};

	const onTodoSave = (todoId) => {
		const { title, completed } = findTodo(todos, todoId) || {};

		if (todoId === NEW_TODO_ID) {
			createTodo({ title, completed }).then((id) => {
				let updateTodos = setTodoInTodos(todos, {
					id: NEW_TODO_ID,
					isEditing: false,
				});
				updateTodos = removeTodoInTodos(updateTodos, NEW_TODO_ID);
				updateTodos = addTodoInTodos(updateTodos, { id, title, completed });
				setTodos(updateTodos);
			});
		} else {
			updateTodo({ id: todoId, title, completed }).then(() =>
				setTodos(setTodoInTodos(todos, { id: todoId, isEditing: false })),
			);
		}
	};

	const onTodoEdit = (id) => {
		setTodos(setTodoInTodos(todos, { id, isEditing: true }));
	};

	const onTodoTitleChange = (id, newTitle) => {
		setTodos(setTodoInTodos(todos, { id, title: newTitle }));
	};

	const onCompletedChange = (id, newCompleted) => {
		const { title } = findTodo(todos, id) || {};

		updateTodo({ id, title, completed: newCompleted }).then(() =>
			setTodos(setTodoInTodos(todos, { id, completed: newCompleted })),
		);
	};

	const onTodoRemove = (id) => {
		deleteTodo(id).then(() => setTodos(removeTodoInTodos(todos, id)));
	};

	useEffect(() => {
		readTodos(searchPhrase, isAlphabetSorting).then((loadedTodos) =>
			setTodos(loadedTodos),
		);
	}, [searchPhrase, isAlphabetSorting]);

	return (
		<div className={styles.app}>
			<ControlPanel
				onTodoAdd={onTodoAdd}
				onSearch={setSearchPhrase}
				onSorting={setIsAlphabetSorting}
			/>
			{todos.map(({ id, title, completed, isEditing = false }) => (
				<Todo
					key={id}
					title={title}
					completed={completed}
					id={id}
					isEditing={isEditing}
					onEdit={() => onTodoEdit(id)}
					onTitleChange={(newTitle) => onTodoTitleChange(id, newTitle)}
					onCompletedChange={(newCompleted) =>
						onCompletedChange(id, newCompleted)
					}
					onSave={() => onTodoSave(id)}
					onRemove={() => onTodoRemove(id)}
				/>
			))}
		</div>
	);
};
