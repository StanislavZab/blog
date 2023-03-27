import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'shared/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {},
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
