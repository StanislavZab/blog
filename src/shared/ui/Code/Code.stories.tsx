import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {},
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'import { ComponentStory, ComponentMeta } from \'@storybook/react\';\n'
        + 'import { Code } from \'./Code\';\n'
        + '\n'
        + 'export default {\n'
        + '    title: \'shared/Code\',\n'
        + '    component: Code,\n'
        + '    argTypes: {},\n'
        + '} as ComponentMeta<typeof Code>;\n'
        + '\n'
        + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
        + '\n'
        + 'export const Primary = Template.bind({});\n',
};
