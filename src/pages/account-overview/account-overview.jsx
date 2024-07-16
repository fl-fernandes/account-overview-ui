import React from 'react';
import styled from 'styled-components';
import PageTitle from './components/page-title';
import PersonalInformation from './components/personal-information';
import SalesOverview from './components/sales-overview';
import PropTypes from 'prop-types';

const AccountOverviewContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #F2F2F2;

  display: grid;
  grid-template-rows: 2fr 3fr;
  grid-template-areas: 
    'header'
    'sales-overview';
`;

const HeaderContainer = styled.div`
  grid-area: header;

  display: grid;

  @media screen and (max-width: 767px) { /* phone devices */
    padding: 10px;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
      'title'
      'personal-info';
  }

  @media screen and (min-width: 768px) { /* except phone devices */
    padding: 50px;
    grid-template-columns: 3fr 4fr;
    grid-template-areas: 'title personal-info';
  }
`;

const SalesOverviewContainer = styled.div`
  grid-area: sales-overview;

  @media screen and (min-width: 768px) { /* except phone devices */
    padding: 50px;
  }
`;

const AccountOverview = ({ data }) => {
  const { supportContact, salesOverview } = data;

  return (
    <AccountOverviewContainer>
      <HeaderContainer>
        <PageTitle />
        <PersonalInformation
          name={supportContact.name}
          email={supportContact.email}
          contactNumber={supportContact.phone}
        />
      </HeaderContainer>
      <SalesOverviewContainer>
        <SalesOverview
          successfulUploads={salesOverview.successfulUploads}
          uploadsAttempted={salesOverview.uploadsAttempted}
          linesSaved={salesOverview.linesSaved}
          linesAttempted={salesOverview.linesAttempted}
        />
      </SalesOverviewContainer>
    </AccountOverviewContainer>
  )
}

AccountOverview.propTypes = {
  data: PropTypes.objectOf(() => ({
    supportContact: PropTypes.objectOf(() => ({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })).isRequired,
    salesOverview: PropTypes.objectOf(() => ({
      successfulUploads: PropTypes.number.isRequired,
      uploadsAttempted: PropTypes.number.isRequired,
      linesSaved: PropTypes.number.isRequired,
      linesAttempted: PropTypes.number.isRequired,
    })).isRequired,
  })).isRequired,
}

export default AccountOverview;