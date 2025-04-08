// import type { Meta, StoryObj } from '@storybook/react';

// import { ArrowButton } from './ArrowButton';

// const meta: Meta<typeof ArrowButton> = {
// 	component: ArrowButton,
// };

// export default meta;
// type Story = StoryObj<typeof ArrowButton>;

// export const ArrowButtonStory: Story = {
// 	render: () => {
// 		return (
// 			<>
// 				<ArrowButton />
// 			</>
// 		);
// 	},
// };


import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
  title: 'Components/ArrowButton',
  component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

// Базовая история
export const Closed: Story = {
  args: {
    onClick: () => console.log('Button clicked!'),
    isOpen: false,
  },
};

// История для открытого состояния
export const Open: Story = {
  args: {
    onClick: () => console.log('Button clicked!'),
    isOpen: true,
  },
};