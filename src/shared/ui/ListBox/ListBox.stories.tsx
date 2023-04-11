import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {},
    decorators: [
        (Story) => <div style={{ padding: '200px' }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    items: [
        { content: 'asdsad', value: 'asdsad' },
        { content: 'asdsad', value: 'asdsad', disabled: true },
        { content: 'asdsad', value: 'asdsad' },
    ],
    value: '123',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    items: [
        { content: 'asdsad', value: 'asdsad' },
        { content: 'asdsad', value: 'asdsad', disabled: true },
        { content: 'asdsad', value: 'asdsad' },
    ],
    direction: 'top left',
    value: '123',
};

export const TopRight = Template.bind({});
TopRight.args = {
    items: [
        { content: 'asdsad', value: 'asdsad' },
        { content: 'asdsad', value: 'asdsad', disabled: true },
        { content: 'asdsad', value: 'asdsad' },
    ],
    direction: 'top right',
    value: '123',
};

export const BottonLeft = Template.bind({});
BottonLeft.args = {
    items: [
        { content: 'asdsad', value: 'asdsad' },
        { content: 'asdsad', value: 'asdsad', disabled: true },
        { content: 'asdsad', value: 'asdsad' },
    ],
    direction: 'bottom left',
    value: '123',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    items: [
        { content: 'asdsad', value: 'asdsad' },
        { content: 'asdsad', value: 'asdsad', disabled: true },
        { content: 'asdsad', value: 'asdsad' },
    ],
    direction: 'bottom right',
    value: '123',
};
