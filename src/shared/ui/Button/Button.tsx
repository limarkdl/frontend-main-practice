import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.css';

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.test, { [cls[theme]]: theme }, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
