import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (

        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK
                ? (
                    <>
                        <FontAwesomeIcon
                            icon={faLightbulb}
                            style={{ opacity: 0.5 }}
                        />
                    &nbsp;|&nbsp;
                        <FontAwesomeIcon
                            icon={faMoon}
                        />
                    </>
                )
                : (
                    <>
                        <FontAwesomeIcon
                            icon={faLightbulb}
                        />
                    &nbsp;|&nbsp;
                        <FontAwesomeIcon
                            icon={faMoon}
                            style={{ opacity: 0.5 }}
                        />
                    </>
                )}
        </Button>
    );
};

export default ThemeSwitcher;
