import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

import cls from './Sidebar.module.css';

interface SidebarProps {
    className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);

    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >

            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                {t('SidebarToggleBt')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
