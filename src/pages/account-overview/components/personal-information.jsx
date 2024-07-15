import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PicturePlaceholder from '../../../components/picture-placeholder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const PersonalInformationContainer = styled.div`
  grid-area: personal-info;

  display: grid;
  grid-template-rows: 2fr 3fr;
  grid-template-areas:
    'section-title'
    'support-info';
`;

const SectionTitle = styled.div`
  grid-area: section-title;
  
  display: flex;
  align-items: flex-end;

  text-transform: uppercase;
`;

const SupportInfo = styled.div`
  grid-area: support-info;
  height: 60px;

  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-areas: 'picture support-data';
`;

const Picture = styled(PicturePlaceholder)`
  grid-area: picture;
`;

const SupportData = styled.div`
  grid-area: support-data;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'support-name'
    'support-contact-data';
`;

const SupportNameContainer = styled.div`
  grid-area: support-name;

  display: flex;
  align-items: flex-end;

  font-weight: bold;
`;

const SupportContactData = styled.div`
  grid-area: support-contact-data;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'support-email support-contact-number';
`;

const SupportEmailContainer = styled.div`
  grid-area: support-email;
`;

const SupportEmail = styled.span`
  margin-left: 10px;
`;

const SupportContactNumber = styled.span`
  grid-area: support-contact-number;
`;

const PersonalInformation = ({ name, email, contactNumber }) => {
  const derivePictureLetter = () => {
    return name.trim().charAt(0);
  }

  return (
    <PersonalInformationContainer>
      <SectionTitle>
        <h2>Your feefo support contact</h2>
      </SectionTitle>
      <SupportInfo>
        <Picture letter={derivePictureLetter()} />
        <SupportData>
          <SupportNameContainer>
            <span>{name}</span>
          </SupportNameContainer>
          <SupportContactData>
            <SupportEmailContainer>
              <FontAwesomeIcon icon={faEnvelope} />
              <SupportEmail>{email}</SupportEmail>
            </SupportEmailContainer>
            <SupportContactNumber>{contactNumber}</SupportContactNumber>
          </SupportContactData>
        </SupportData>
      </SupportInfo>
    </PersonalInformationContainer>
  );
}

PersonalInformation.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
};

export default PersonalInformation;
