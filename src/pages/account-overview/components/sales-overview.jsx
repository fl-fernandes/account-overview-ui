import { faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo } from 'react';
import styled from 'styled-components';

const SalesOverviewContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'general-info'
    'detailed-info';

  height: 100%;
  background-color: white;
  border-radius: 3px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .3);
`;

const GeneralInfo = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const SalesRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SalesText = styled.h4`
  display: inline-block;
  margin-left: 10px;
`;

const DetailedInfo = styled.div`
  grid-area: detailed-info;
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'successful-uploads saved-lines';
`;

const SuccessfulUploads = styled.div`
  grid-area: successful-uploads;
`;

const SavedLines = styled.div`
  grid-area: saved-lines;
`;

const PercentageText = styled.span`
  display: block;
  color: green;
  front-weight: bold;
  font-size: 50px;
`;

const PercentageDescription = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

const calculatePorcentage = (value, total) => (value / total) * 100;

const SalesOverview = ({ uploadsAttempted, successfulUploads, linesAttempted, linesSaved }) => {
  const successfulUploadsPercentage = useMemo(
    () => calculatePorcentage(successfulUploads, uploadsAttempted),
    [successfulUploads, uploadsAttempted],
  );
  const linesSavedPercentage = useMemo(
    () => calculatePorcentage(linesSaved, linesAttempted),
    [linesSaved, linesAttempted],
  );
  
  return (
    <SalesOverviewContainer>
      <GeneralInfo>
        <SalesRow>
          <div>
            <FontAwesomeIcon icon={faUpload} data-testid="upload-icon" title="upload" />
            <SalesText>Sales</SalesText>
          </div>
          <FontAwesomeIcon icon={faInfoCircle} data-testid="info-icon" title="info" />
        </SalesRow>
        <span data-testid="uploads-and-lines-row">
          You had <strong>{successfulUploads} uploads</strong> and <strong>{linesSaved} lines</strong> added.
        </span>
      </GeneralInfo>
      <DetailedInfo>
        <SuccessfulUploads>
          <PercentageText>{successfulUploadsPercentage}%</PercentageText>
          <PercentageDescription>Upload success</PercentageDescription>
        </SuccessfulUploads>
        <SavedLines>
          <PercentageText>{linesSavedPercentage}%</PercentageText>
          <PercentageDescription>Lines saved</PercentageDescription>
        </SavedLines>
      </DetailedInfo>
    </SalesOverviewContainer>
  );
}

export default SalesOverview;
