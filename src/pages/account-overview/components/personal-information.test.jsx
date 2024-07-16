import { render, screen } from '@testing-library/react';
import PersonalInformation from './personal-information';

const mockSupportContactData = {
  name: 'John',
  email: 'john@mail.com',
  phone: '111 1111 1111',
};

describe('Test suit for PersonalInformation component', () => {
  beforeEach(() => {
    render(
      <PersonalInformation
        name={mockSupportContactData.name}
        email={mockSupportContactData.email}
        contactNumber={mockSupportContactData.phone}
      />
    );
  });

  it('should render "your feefo support contact"', () => {
    const element = screen.getByText(/your feefo support contact/i);
    expect(element).toBeInTheDocument();
  });

  it('should render the support name', () => {
    const element = screen.getByText(mockSupportContactData.name);
    expect(element).toBeInTheDocument();
  });

  it('should render the support email', () => {
    const element = screen.getByText(mockSupportContactData.email);
    expect(element).toBeInTheDocument();
  });

  it('should render the support contact number', () => {
    const element = screen.getByText(mockSupportContactData.phone);
    expect(element).toBeInTheDocument();
  });

  it('should render a picture placeholder with the first letter of the support name', () => {
    const element = screen.getByText(mockSupportContactData.name.charAt(0));
    expect(element).toBeInTheDocument();
  });
  
  it('should render an envelope icon', () => {
    const element = screen.getByTestId("envelope-icon");
    expect(element).toBeInTheDocument();
  });
});
