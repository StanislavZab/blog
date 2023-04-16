import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> = memo((props) => {
    const {
        className,
        block,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articlecodeblockcomponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
