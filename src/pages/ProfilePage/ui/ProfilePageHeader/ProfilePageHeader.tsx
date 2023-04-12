import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'features/editableProfileCard';
import { getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDiapatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    if (authData?.id !== profileData?.id) {
        return (
            <HStack max justify="between" className={classNames('', {}, [className])}>
                <Text title={t('Профиль') as string} />
            </HStack>
        );
    }

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Профиль') as string} />
            {readonly
                ? (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <HStack gap="8">
                        <Button
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancelEdit}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSave}
                        >
                            {t('Сохранить')}
                        </Button>
                    </HStack>
                )}
        </HStack>
    );
};
