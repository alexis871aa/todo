import styles from './control-panel.module.css';
import { useState } from 'react';
import { Button } from '../button/button.jsx';

export const ControlPanel = () => {
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isSorting, setIsSorting] = useState(false);

	const onSearchPhraseChange = ({ target }) => {
		setSearchPhrase(target.value);
	};

	const onSortingChange = ({ target }) => {
		setIsSorting(target.checked);
	};

	const onTodoAdd = () => {};

	return (
		<div className={styles.controlPanel}>
			<input
				className={styles.search}
				type="text"
				value={searchPhrase}
				placeholder="Поиск"
				onChange={onSearchPhraseChange}
			/>
			<input
				className={styles.sortingButton}
				type="checkbox"
				checked={isSorting}
				onChange={onSortingChange}
			/>
			<Button onClick={onTodoAdd}>✚</Button>
		</div>
	);
};
