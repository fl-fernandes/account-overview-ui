import { render, screen } from '@testing-library/react';
import PageTitle from './page-title';

describe('Test suit for the PageTitle component', () => {
  it('should render "Account Overview" title', () => {
    render(<PageTitle />);
    const element = screen.getByText(/Account Overview/);
    expect(element).toBeInTheDocument();
  });
});