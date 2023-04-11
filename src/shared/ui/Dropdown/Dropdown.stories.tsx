import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {},
    decorators: [
        (Story) => <div style={{ padding: '200px' }}><Story /></div>,
    ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ],
    direction: 'top left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ],
    direction: 'top right',
};

export const BottonLeft = Template.bind({});
BottonLeft.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ],
    direction: 'bottom left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ],
    direction: 'bottom right',
};
