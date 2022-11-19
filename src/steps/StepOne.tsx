import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import data from '../data/test1';
import BottomPagination from '../BottomPagination';
import Container from '../components/Container';

const CompletedContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
`;

interface Props {
  setStepOneCorrectAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepOne = (props: Props) => {
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
  const [completed, setCompleted] = React.useState<boolean>(false);

  const handleNext = (answer: {
    id: number;
    text: string;
    correct: boolean;
  }) => {
    if (answer.correct) {
      props.setStepOneCorrectAnswers((prev) => [...prev, answer.id]);
    }
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };
  return !completed ? (
    <Container>
      <h1>זמנים</h1>
      <h2>מהו הזמן של המשפט שלפניך?</h2>
      <h4>"{data[currentQuestion].question}"</h4>
      {data[currentQuestion].answers.map((answer, index) => (
        <Button key={index} onClick={() => handleNext(answer)}>
          {answer.text}
        </Button>
      ))}
      <BottomPagination currentAnswer={currentQuestion} />
    </Container>
  ) : (
    <CompletedContainer>
      {' '}
      <p>סיימת את השלב הראשון</p>
      <Button onClick={() => props.setStep(1)}>לשלב הבא</Button>
    </CompletedContainer>
  );
};

export default StepOne;
