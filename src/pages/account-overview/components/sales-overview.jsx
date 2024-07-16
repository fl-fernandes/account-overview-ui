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
  padding: 20px;
`;

const SalesRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SalesText = styled.h4`
  display: inline-block;
  margin-left: 10px;
  margin-top: 0;
  color: #686868;
`;

const DetailedInfo = styled.div`
  grid-area: detailed-info;
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'successful-uploads saved-lines';
  border-top: 3px solid #F2F2F2;
`;

const SuccessfulUploads = styled.div`
  grid-area: successful-uploads;
  padding: 20px;
  border-right: 3px solid #F2F2F2;
`;

const SavedLines = styled.div`
  grid-area: saved-lines;
  padding: 20px;
`;

const PercentageText = styled.span`
  display: block;
  color: #00A152;
  front-weight: bold;
  font-size: 50px;
`;

const PercentageDescription = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  color: #918D8D;
`;

const UploadsAndLinesText = styled.span`
  color: #686868;
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
    <SalesOverviewContainer data-testid="sales-overview">
      <GeneralInfo>
        <SalesRow>
          <div>
            <FontAwesomeIcon
              icon={faUpload}
              data-testid="upload-icon"
              title="upload"
              color="#00A9E4"
            />
            <SalesText>Sales</SalesText>
          </div>
          <FontAwesomeIcon 
            data-testid="info-icon"
            icon={faInfoCircle}
            title="info"
            color="#B7B2B3"
          />
        </SalesRow>
        <UploadsAndLinesText data-testid="uploads-and-lines-row">
          You had <strong>{successfulUploads} uploads</strong> and <strong>{linesSaved} lines</strong> added.
        </UploadsAndLinesText>
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
