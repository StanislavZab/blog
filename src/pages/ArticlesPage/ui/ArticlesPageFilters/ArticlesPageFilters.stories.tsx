import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
    title: 'pages/Article/ArticlesPageFilters',
    component: ArticlesPageFilters,
    argTypes: {},
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
