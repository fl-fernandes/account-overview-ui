import React from 'react';
import styled from 'styled-components';

const PageTitleContainer = styled.div`
  grid-area: title;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageTitle = () => {
  return (
    <PageTitleContainer>
      <h1>Account Overview</h1>
    </PageTitleContainer>
  );
}

export default PageTitle;
