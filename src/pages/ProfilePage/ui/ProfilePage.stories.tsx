import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currents } from '@/entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            first: 'Stas',
            lastname: 'Zbr',
            age: 38,
            country: Country.Russia,
            city: 'Chelaybinsk',
            currency: Currents.RUB,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            first: 'Stas',
            lastname: 'Zbr',
            age: 38,
            country: Country.Russia,
            city: 'Chelaybinsk',
            currency: Currents.RUB,
        },
    },
})];

export const DarkNoEdit = Template.bind({});
DarkNoEdit.args = {};
DarkNoEdit.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            first: 'Stas',
            lastname: 'Zbr',
            age: 38,
            country: Country.Russia,
            city: 'Chelaybinsk',
            currency: Currents.RUB,
        },
        readonly: true,
    },
})];
