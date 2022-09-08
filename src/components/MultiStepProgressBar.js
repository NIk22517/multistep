import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import styled from "styled-components";

const MultiStepProgressBar = ({ step }) => {
  return (
    <div>
      <ProgressBar percent={((step - 1) * 100) / 3} filledBackground='#654DE4'>
        <Step transition='scale'>
          {({ accomplished }) => (
            <ProgressSteps
              className={`step ${accomplished} ? 'completed' : ''`}
            >
              1
            </ProgressSteps>
          )}
        </Step>
        <Step transition='scale'>
          {({ accomplished }) => (
            <ProgressSteps
              className={`step ${accomplished} ? 'completed' : ''`}
            >
              2
            </ProgressSteps>
          )}
        </Step>
        <Step transition='scale'>
          {({ accomplished }) => (
            <ProgressSteps
              className={`step ${accomplished} ? 'completed' : ''`}
            >
              3
            </ProgressSteps>
          )}
        </Step>

        <Step transition='scale'>
          {({ accomplished }) => (
            <ProgressSteps
              className={`step ${accomplished} ? 'completed' : ''`}
            >
              4
            </ProgressSteps>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};

export default MultiStepProgressBar;

const ProgressSteps = styled.div`
  color: white;
  width: 50px;
  height: 50px;
  font-size: 12px;
  background-color: #654de4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .completed {
    background-color: aqua;
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
