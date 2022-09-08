import { useState } from "react";

import MultiStepProgressBar from "./components/MultiStepProgressBar";
import { questions } from "./Questions";
import MultiStepForm from "./components/MultiStepForm";
import styled from "styled-components";

const App = () => {
  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalPagesCount = questions?.length || 0;
  // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}
  const [pagesAnswers, setPagesAnswers] = useState({});

  const nextButton = () => {
    if (index - 4) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      // clear the form on submit
      setPagesAnswers({});
      setSubmitted(true);
    }
  };

  const onPageAnswerUpdate = (step, answersObj) => {
    setPagesAnswers({ ...pagesAnswers, [step]: answersObj });
  };

  const handleStart = () => {
    setIndex(1);
    setSubmitted(false);
  };
  return (
    <AppStyle>
      <Container>
        <ProgBar>
          <MultiStepProgressBar step={index} />
        </ProgBar>
        <div className='card'>
          <div className='card-body'>
            <MultiStepForm
              list={questions}
              step={index}
              onPageUpdate={onPageAnswerUpdate}
              pagesAnswers={pagesAnswers}
            />
          </div>
          <div className='card-button'>
            <button onClick={nextButton}>
              {index == totalPagesCount ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </Container>
    </AppStyle>
  );
};

export default App;

const AppStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;

  .card {
    margin: 5rem 0rem;
    width: 400px;
  }
  .card-body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-button {
    text-align: center;
    margin: 1.5rem 0rem;
  }
  button {
    width: 70%;
    padding: 1rem 6rem;
    border: none;
    background-color: #654de4;
    color: white;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
  .card {
    margin: 3rem 0rem;
    width: 300px;
  }
`;

const ProgBar = styled.div`
  width: 300px;
  margin: 3rem 0 0 0;

  @media (max-width: 768px) {
    width: 200px;
  }
`;
