import { useState } from 'react';

//import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { OptionType, fontSizeOptions, fontFamilyOptions  } from 'src/constants/articleProps';
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
		//console.log("changed: ", key, value);
		//setTimeout(() => { console.log("changed: ", formState); }, 1000);
	};

	const handleFontFamilyChange = (selected: OptionType) => {
		setFormState(prev => ({
		  ...prev,
		  fontFamilyOption: selected // Сохраняем весь объект OptionType
		}));
	  };

	return (
		<>
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpened
				  })}
				  onClick={(e) => e.stopPropagation()}>
				<form className={styles.form} onSubmit={handleSubmit} onReset={onReset}>

				<Select
					title="Шрифт"
					options={fontFamilyOptions}
					selected={formState.fontFamilyOption}
					onChange={handleFontFamilyChange}
					placeholder="Выберите шрифт"
				/>

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
