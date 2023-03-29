import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList: React.FC<CommentListProps> = memo((props) => {
    const {
        className,
        comments,
        isLoading,
    } = props;

    return (
        <div className={classNames(cls.commentlist, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard className={cls.comment} isLoading={isLoading} comment={comment} />
                ))
                : <Text text="Комментарии отсутствуют" />}
        </div>
    );
});
