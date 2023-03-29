import { Country, CountrySelect } from 'entities/Country';
import { CurrencySelect, Currents } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currents) => void;
    onChangeCountry?: (value: Country) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке профиля')}
                    theme={TextTheme.ERROR}
                    text={t('Попробуйте обновить страницу') as string}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar
                    && (
                        <div className={cls.avatarWrapper}>
                            <Avatar alt="" src={data?.avatar} />
                        </div>
                    )}
                <Input
                    readonly={readonly}
                    value={data?.first}
                    label={t('Имя') as string}
                    className={cls.input}
                    onChange={onChangeFirstname}
                />
                <Input
                    readonly={readonly}
                    value={data?.lastname}
                    label={t('Фамилия') as string}
                    className={cls.input}
                    onChange={onChangeLastname}
                />
                <Input
                    readonly={readonly}
                    value={data?.age}
                    label={t('Возраст') as string}
                    className={cls.input}
                    onChange={onChangeAge}
                />
                <Input
                    readonly={readonly}
                    value={data?.city}
                    label={t('Город') as string}
                    className={cls.input}
                    onChange={onChangeCity}
                />
                <Input
                    readonly={readonly}
                    value={data?.username}
                    label={t('username') as string}
                    className={cls.input}
                    onChange={onChangeUsername}
                />
                <Input
                    readonly={readonly}
                    value={data?.avatar}
                    label={t('Avatar') as string}
                    className={cls.input}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChang={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChang={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};