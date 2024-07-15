import { render, screen } from '@testing-library/react';
import PicturePlaceholder from './picture-placeholder';

describe('Test suit for the PicturePlaceholder component', () => {
  it.each`
    letter
    ${'s'}
    ${'n'}
    ${'t'}
  `('should render the received letter', ({ letter }) => {
    render(<PicturePlaceholder letter={letter} />);
    const element = screen.getByText(letter);
    expect(element).toBeInTheDocument();
  });
});