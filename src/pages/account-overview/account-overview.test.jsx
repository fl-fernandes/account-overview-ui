import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';

const mockAccountOverviewData = {
  supportContact: {
    name: 'John Smith',
    email: 'john.smith@feefo.com',
    phone: '020 3362 4208',
  },
  salesOverview: {
    successfulUploads: 3,
    uploadsAttempted: 10,
    linesAttempted: 20,
    linesSaved: 4,
  }
};

describe('Test suit for the Account Overview page', () => {
  beforeEach(() => {
    render(<AccountOverview data={mockAccountOverviewData} />)
  });

  it('should render the PageTitle component', () => {
    const element = screen.getByTestId('page-title');
    expect(element).toBeInTheDocument();
  }); 

  it('should render the PersonalInformation component', () => {
    const element = screen.getByTestId('personal-info');
    expect(element).toBeInTheDocument();
  }); 

  it('should render the SalesOverview component', () => {
    const element = screen.getByTestId('sales-overview');
    expect(element).toBeInTheDocument();
  }); 
});
