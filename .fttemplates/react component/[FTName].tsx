import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './[FTName].module.scss';

interface [FTName]Props {
    className?: string;
}

export const [FTName]: React.FC<[FTName]Props> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.[FTName | lowercase], {}, [className])}>

        </div>
    );
};
