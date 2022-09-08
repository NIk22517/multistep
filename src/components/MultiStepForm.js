import { useState, useEffect } from "react";
import styled from "styled-components";
import FormItem from "./FormItem";

const MultiStepForm = (props) => {
  // store index number with the answers?
  const [answers, setAnswers] = useState({ index: props.step });

  useEffect(() => {
    // check if the answers isn't empty
    if (Object.keys(answers).length > 1) {
      // update page answers
      props.onPageUpdate(answers.index, answers);
      // update page number locally
      setAnswers({ index: props.step });
    } else {
      // update page number locally
      setAnswers({ index: props.step });
    }
  }, [props.step]);

  const updateAnswers = (value, category) => {
    setAnswers({ ...answers, [category]: value });
  };

  return (
    <div className='multi-step-form'>
      {props.list[props.step - 1].items?.map((item, index) => {
        return (
          <div key={`${index}_${item.label}`}>
            <Heading>
              <h2>{item.heading}</h2>
              <p>{item.subtitle}</p>
            </Heading>

            <InputForm>
              <FormItem
                item={item}
                onChange={updateAnswers}
                answer={
                  props.pagesAnswers[props.step]
                    ? props.pagesAnswers[props.step][item.value]
                    : null
                }
              />
            </InputForm>
          </div>
        );
      })}
    </div>
  );
};

export default MultiStepForm;

const InputForm = styled.div`
  /* display: flex;
   justify-content: center;
   align-items: center; */
`;

const Heading = styled.div`
  text-align: center;

  p {
    color: rgba(128, 128, 128, 0.5);
  }
`;
