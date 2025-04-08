import { useState } from 'react';

import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { RadioGroup } from '../radio-group';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { fontSizeOptions } from 'src/constants/articleProps';
import { ArticleStateType } from '../../constants/articleProps';

interface ArticleParamsFormProps {
	isOpened: boolean; // Принимаем состояние извне
	onApply: (settings: ArticleStateType) => void;
	onReset: () => void;
	currentSettings: ArticleStateType;

  }

  export const ArticleParamsForm = ({ isOpened, onApply, onReset, currentSettings }: ArticleParamsFormProps)  => {
	const [formState, setFormState] = useState(currentSettings);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onApply(formState);
	};

	const handleFormChange = (key: keyof ArticleStateType, value: string) => {
		setFormState(prev => ({ ...prev, [key]: fontSizeOptions.find(x => x.value === value) }));
		console.log("changed: ", key, value);
		setTimeout(() => { console.log("changed: ", formState); }, 1000);
	};

	return (
		<>
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpened
				  })}
				  onClick={(e) => e.stopPropagation()}>
				<form className={styles.form} onSubmit={handleSubmit} onReset={onReset}>

				<RadioGroup
					name="font-size"
					title="Размер шрифта"
					options={fontSizeOptions}
					selected={formState.fontSizeOption}
					onChange={(option) => 
						handleFormChange('fontSizeOption', option.value)
					}
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
						/>
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
