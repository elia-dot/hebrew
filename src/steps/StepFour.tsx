import React from 'react';
import styled from 'styled-components';
import BottomPagination from '../BottomPagination';
import Button from '../components/Button';
import CompletedContainer from '../components/CompletedContainer';
import Container from '../components/Container';
import data from '../data/test4';

interface Props {
  setStepFourCorrectAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepFour = (props: Props) => {
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
  const [completed, setCompleted] = React.useState<boolean>(false);

  const handleNext = (answer: {
    id: number;
    text: string;
    correct: boolean;
  }) => {
    if (answer.correct) {
      props.setStepFourCorrectAnswers((prev) => [...prev, answer.id]);
    }
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };
  return !completed ? (
    <Container>
      <h1>זמן עבר</h1>
      <h2>הפוך את הפועל שלפניך לזמן עבר</h2>
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
      <p>סיימת את השלב האחרון</p>
      <Button onClick={() => props.setStep(4)}>חשב את הציון שלי </Button>
    </CompletedContainer>
  );
};

export default StepFour;
