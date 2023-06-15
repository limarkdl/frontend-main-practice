import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.css';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <h1 className={cls.name}>{t('NameLogo')}</h1>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/" className={cls.mainLink}>{t('MainLink')}</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about" className={cls.aboutLink}>{t('AboutLink')}</AppLink>
                <LangSwitcher />
            </div>

        </div>
    );
};

export default Navbar;
