import React from 'react';
import styled from 'styled-components';

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
  grid-template-columns: 2fr 3fr;
  grid-template-areas: title, personal-info;
`;

const DashboardContainer = styled.div`
  grid-area: dashboard;
`;

const AccountOverview = ({data}) => {
  console.log(data);

  return (
    <AccountOverviewContainer>
      <HeaderContainer/>
      <DashboardContainer/>
    </AccountOverviewContainer>
  )
}

export default AccountOverview;