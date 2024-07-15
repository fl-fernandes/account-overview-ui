import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PicturePlaceholderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #FFC732;
  border-radius: 3px;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`;

const Letter = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

const PicturePlaceholder = ({ size = '60px', letter }) => {
  return (
    <PicturePlaceholderContainer size={size}>
      <Letter>{letter}</Letter>
    </PicturePlaceholderContainer>
  );
}

PicturePlaceholder.propTypes = {
  letter: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default PicturePlaceholder;
