import { memo } from 'react';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { VStack } from '@/shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard: React.FC<CommentCardProps> = memo((props) => {
    const {
        className,
        comment,
    } = props;

    const avatar = comment.user.avatar
        || 'https://kartinkin.net/uploads/posts/2022-12/1670475857_12-kartinkin-net-p-kartinki-chelovechkov-vkontakte-13.jpg';

    return (
        <VStack gap="8" max className={classNames(cls.commentcard, {}, [className])}>
            <AppLink className={cls.header} to={`${RoutePath.profile}${comment.user.id}`}>
                <Avatar src={avatar} size={30} />
                <Text className={cls.username} text={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment?.text} />
        </VStack>
    );
});
