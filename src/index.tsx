import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';
import { ArrowButton } from './components/arrow-button';
import { ArticleStateType } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);


const App = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [settings, setSettings] = useState(defaultArticleState);

	// Обработчик для "Применить"
	const handleApply = (newSettings: ArticleStateType) => {
	  setSettings(newSettings);
	  setIsFormOpen(false); // Закрываем форму после применения
	};
  
	// Обработчик для "Сбросить"
	const handleReset = () => {
	  setSettings(defaultArticleState);
	};

	const getCurrentStyles = () => {
		return {
		  '--font-family': settings.fontFamilyOption.value,
		  '--font-size': settings.fontSizeOption.value,
		  '--font-color': settings.fontColor.value,
		  '--container-width': settings.contentWidth.value,
		  '--bg-color': settings.backgroundColor.value,
		} as CSSProperties;
	  };

	// Обработчик открытия/закрытия формы
	const toggleForm = () => {
		setIsFormOpen(!isFormOpen);
	  };
	
	  // Обработчик закрытия при клике вне формы
	  const handleCloseForm = (e: React.MouseEvent) => {
		const formElement = document.querySelector(`.${styles.container}`);
		if (formElement && !formElement.contains(e.target as Node)) {
		  setIsFormOpen(false);
		}
	  };

	  console.log("app:", settings);

	return (
		<div
			className={clsx(styles.main)}
			style={getCurrentStyles()} // Применяем текущие настройки
		>
			<ArrowButton 
				onClick={() => toggleForm()}
				isOpen={isFormOpen}
			/>
			<ArticleParamsForm 
				isOpened={isFormOpen}
				onApply={handleApply}
				onReset={handleReset}
				currentSettings={settings}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
