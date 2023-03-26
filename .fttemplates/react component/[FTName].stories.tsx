import { ComponentStory, ComponentMeta } from '@storybook/react';
import { [FTName] } from './[FTName]';

export default {
    title: 'shared/[FTName]',
    component: [FTName],
    argTypes: {},
} as ComponentMeta<typeof [FTName]>;

const Template: ComponentStory<typeof [FTName]> = (args) => <[FTName] {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
