import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BUTTON_SIZES, Button } from '..';
import { ModalHeader } from './modal-header';
import README from './README.mdx';

export default {
  title: 'Components/ComponentLibrary/ModalHeader',
  component: ModalHeader,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    onBack: { action: 'onBack' },
    onClose: { action: 'onClose' },
  },
  args: {
    children: 'ModalHeader',
  },
} as ComponentMeta<typeof ModalHeader>;

const Template: ComponentStory<typeof ModalHeader> = (args) => {
  return <ModalHeader {...args}>ModalHeader</ModalHeader>;
};

export const DefaultStory = Template.bind({});
DefaultStory.storyName = 'Default';

export const Children: ComponentStory<typeof ModalHeader> = (args) => (
  <ModalHeader {...args} />
);

Children.args = {
  children: 'ModalHeader Title',
};

export const OnBack: ComponentStory<typeof ModalHeader> = (args) => (
  <ModalHeader {...args}>OnBack Demo</ModalHeader>
);

export const OnClose: ComponentStory<typeof ModalHeader> = (args) => (
  <ModalHeader {...args}>OnClose Demo</ModalHeader>
);

export const StartAccessory: ComponentStory<typeof ModalHeader> = (args) => (
  <ModalHeader
    startAccessory={<Button size={BUTTON_SIZES.SM}>Demo</Button>}
    {...args}
  >
    StartAccessory
  </ModalHeader>
);

export const EndAccessory: ComponentStory<typeof ModalHeader> = (args) => (
  <ModalHeader
    endAccessory={<Button size={BUTTON_SIZES.SM}>Demo</Button>}
    {...args}
  >
    EndAccessory
  </ModalHeader>
);
