import { useState } from 'react';
import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';

type OnClick = () => void;
type ArrowButtonProps = {
  onClick: OnClick;
  isOpen: boolean;
};

export const ArrowButton = ({ onClick, isOpen }: ArrowButtonProps) => {
  return (
    <div
      role='button'
      aria-label={isOpen ? 'Закрыть форму параметров статьи' : 'Открыть форму параметров статьи'}
      tabIndex={0}
      className={clsx(styles.container, {
        [styles.arrow_open]: isOpen
      })}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <img
        src={arrow}
        alt='иконка стрелочки'
        className={clsx(styles.arrow, {
          [styles.arrowOpen]: isOpen,
        })}
      />
    </div>
  );
};