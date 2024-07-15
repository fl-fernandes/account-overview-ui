import React from 'react';
import styled from 'styled-components';
import PageTitle from './components/page-title';
import PersonalInformation from './components/personal-information';

const AccountOverviewContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: lightblue;

  display: grid;
  grid-template-rows: 2fr 3fr;
  grid-template-areas: 
    'header'
    'dashboard';
`;

const HeaderContainer = styled.div`
  grid-area: header;

  display: grid;
  grid-template-columns: 3fr 4fr;
  grid-template-areas: 'title personal-info';
`;

const DashboardContainer = styled.div`
  grid-area: dashboard;
`;

const AccountOverview = ({data}) => {
  const { supportContact } = data;

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
      <DashboardContainer/>
    </AccountOverviewContainer>
  )
}

export default AccountOverview;