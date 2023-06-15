import { render, fireEvent, screen } from '@testing-library/react';
import Button, { ButtonTheme } from './Button';

describe('Button', () => {
    test('renders without crashing', () => {
        const { getByRole } = render(<Button />);
        const button = getByRole('button');
        expect(button).toBeInTheDocument();
        screen.debug();
    });

    test('applies custom class', () => {
        const { getByRole } = render(<Button className="customClass" />);
        const button = getByRole('button');
        expect(button).toHaveClass('customClass');
        screen.debug();
    });

    test('applies theme class', () => {
        const { getByRole } = render(<Button theme={ButtonTheme.CLEAR} />);
        const button = getByRole('button');
        expect(button).toHaveClass('clear');
        screen.debug();
    });

    test('renders children', () => {
        const { getByText } = render(<Button>Test Button</Button>);
        expect(getByText('Test Button')).toBeInTheDocument();
        screen.debug();
    });

    test('handles click events', () => {
        const handleClick = jest.fn();
        const { getByRole } = render(<Button onClick={handleClick} />);
        const button = getByRole('button');

        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
        screen.debug();
    });

    test('is disabled when disabled prop is true', () => {
        const { getByRole } = render(<Button disabled />);
        const button = getByRole('button');
        expect(button).toBeDisabled();
        screen.debug();
    });
});
