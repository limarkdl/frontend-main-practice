import { fireEvent, screen } from '@testing-library/react';
import Sidebar from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

describe('Sidebar', () => {
    test('Renders without crashing', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Toggle test', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
