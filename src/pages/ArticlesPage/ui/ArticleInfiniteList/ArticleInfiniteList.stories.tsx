import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
    title: 'pages/Article/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {},
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
