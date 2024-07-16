import React from 'react';
import styled from 'styled-components';

const PageTitleContainer = styled.div`
  grid-area: title;

  display: flex;
  align-items: center;

  color: #5A5859;

  @media screen and (max-width: 767px) { /* phone devices */
    justify-content: center;
  }
`;

const PageTitle = () => {
  return (
    <PageTitleContainer data-testid="page-title">
      <h1>Account Overview</h1>
    </PageTitleContainer>
  );
}

export default PageTitle;
