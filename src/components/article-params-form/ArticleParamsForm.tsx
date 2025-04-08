import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';

interface ArticleParamsFormProps {
	isOpened: boolean; // Принимаем состояние извне
  }

export const ArticleParamsForm = ({ isOpened }: ArticleParamsFormProps) => {
	return (
		<>
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpened
				  })}
				  onClick={(e) => e.stopPropagation()}>
				<form className={styles.form}>
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
