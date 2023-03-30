import { memo } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
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
        isLoading,
    } = props;

    const avatar = comment.user.avatar
        || 'https://kartinkin.net/uploads/posts/2022-12/1670475857_12-kartinkin-net-p-kartinki-chelovechkov-vkontakte-13.jpg';

    // if (isLoading) {
    //     return (
    //         <div className={classNames(cls.commentcard, {}, [className])}>
    //             <div className={cls.header}>
    //                 <Skeleton border="50%" height={30} width={30} />
    //                 <Skeleton className={cls.username} height={16} width={150} />
    //             </div>
    //             <Skeleton className={cls.text} height={50} width="100%" />
    //         </div>
    //     );
    // }

    return (
        <div className={classNames(cls.commentcard, {}, [className])}>
            <AppLink className={cls.header} to={`${RoutePath.profile}${comment.user.id}`}>
                <Avatar src={avatar} size={30} />
                <Text className={cls.username} text={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment?.text} />
        </div>
    );
});
