import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.css';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('NotFoundPageText')}
        </div>
    );
};

export default NotFoundPage;
