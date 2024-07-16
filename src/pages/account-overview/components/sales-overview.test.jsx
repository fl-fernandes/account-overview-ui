import { render, screen } from '@testing-library/react';
import SalesOverview from './sales-overview';

const mockSalesOverview = {
  successfulUploads: 3,
  uploadsAttempted: 10,
  linesAttempted: 20,
  linesSaved: 4,
};

describe('Test suit for the SalesOverview component', () => {
  beforeEach(() => {
    render(
      <SalesOverview
        successfulUploads={mockSalesOverview.successfulUploads}
        uploadsAttempted={mockSalesOverview.uploadsAttempted}
        linesAttempted={mockSalesOverview.linesAttempted}
        linesSaved={mockSalesOverview.linesSaved}
      />
    );
  });

  it('should render an upload icon', () => {
    const element = screen.getByTestId('upload-icon');
    expect(element).toBeInTheDocument();
  });

  it('should render an info icon', () => {
    const element = screen.getByTestId('info-icon');
    expect(element).toBeInTheDocument();
  });

  it('should render the text "Sales"', () => {
    const element = screen.getByText(/Sales/);
    expect(element).toBeInTheDocument();
  });

  it('should render the text "You had 3 uploads and 4 lines added."', () => {
    const element = screen.getByTestId("uploads-and-lines-row");
    expect(element.textContent).toBe('You had 3 uploads and 4 lines added.');
  });

  it('should render the text "30%" because of the successful uploads percentage', () => {
    const element = screen.getByText("30%");
    expect(element).toBeInTheDocument();
  });

  it('should render the text "20%" because of the saved lines percentage', () => {
    const element = screen.getByText("20%");
    expect(element).toBeInTheDocument();
  });

  it('should render the text "UPLOAD SUCCESS"', () => {
    const element = screen.getByText(/upload success/i);
    expect(element).toBeInTheDocument();
  });

  it('should render the text "LINES SAVED"', () => {
    const element = screen.getByText(/lines saved/i);
    expect(element).toBeInTheDocument();
  });
});