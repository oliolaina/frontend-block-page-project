import { useState } from 'react';

//import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Spacing } from '../spacing';
import { Text } from '../text';
import { Separator } from '../separator';

import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { OptionType, fontSizeOptions, fontFamilyOptions, fontColors, backgroundColors, contentWidthArr } from 'src/constants/articleProps';
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

	  const handleFontColorChange = (selected: OptionType) => {
		setFormState(prev => ({
		  ...prev,
		  fontColor: selected // Сохраняем весь объект OptionType
		}));
	  };
	
	  const handleBackgroundColorChange = (selected: OptionType) => {
		setFormState(prev => ({
		  ...prev,
		  backgroundColor: selected
		}));
	  };

	  const handleContentWidthChange = (selected: OptionType) => {
		setFormState(prev => ({
		  ...prev,
		  contentWidth: selected // Сохраняем весь объект OptionType
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

				<Text size={31} weight={800} uppercase dynamicLite>Задайте параметры</Text>

				<Spacing size = {50} />

				<Select
					title="Шрифт"
					options={fontFamilyOptions}
					selected={formState.fontFamilyOption}
					onChange={handleFontFamilyChange}
					placeholder="Выберите шрифт"
				/>

				<Spacing size = {50} />

				<RadioGroup
					name="font-size"
					title="Размер шрифта"
					options={fontSizeOptions}
					selected={formState.fontSizeOption}
					onChange={(option) => 
						handleFormChange('fontSizeOption', option.value)
					}
					/>

				<Spacing size = {50} />

				<Select
						title="Цвет шрифта"
						options={fontColors}
						selected={formState.fontColor}
						onChange={handleFontColorChange}
						placeholder="Выберите цвет текста"
					/>

				<Spacing size = {50} />
				<Separator/>
				<Spacing size = {50} />

					<Select
						title="Цвет фона"
						options={backgroundColors}
						selected={formState.backgroundColor}
						onChange={handleBackgroundColorChange}
						placeholder="Выберите цвет фона"
					/>

					<Spacing size = {50} />	

					<Select
							title="Ширина контента"
							options={contentWidthArr}
							selected={formState.contentWidth}
							onChange={handleContentWidthChange}
							placeholder="Выберите ширину"
						/>

				<Spacing size = {50} />

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
