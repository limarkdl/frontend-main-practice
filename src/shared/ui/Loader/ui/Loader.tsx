import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.css';

interface LoaderProps {
    className?: string;
}

const Loader = ({ className }: LoaderProps) => (
    <div
        className={classNames('lds-facebook', {}, [className])}
    >
        <div />
        <div />
        <div />
    </div>
);

export default Loader;
