import React from 'react';
import Button from '../components/Button';
import CompletedContainer from '../components/CompletedContainer';
import data from '../data/test2';
import BottomPagination from '../BottomPagination';
import Container from '../components/Container';

interface Props {
  setStepTwoCorrectAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepTwo = (props: Props) => {
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
  const [completed, setCompleted] = React.useState<boolean>(false);

  const handleNext = (answer: {
    id: number;
    text: string;
    correct: boolean;
  }) => {
    if (answer.correct) {
      props.setStepTwoCorrectAnswers((prev) => [...prev, answer.id]);
    }
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };
  return !completed ? (
    <Container>
      <h1>שורשים</h1>
      <h2>מהו השורש של המשפט שלפניך?</h2>
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
      <p>סיימת את השלב השני</p>
      <Button onClick={() => props.setStep(2)}>לשלב הבא</Button>
    </CompletedContainer>
  );
};

export default StepTwo;
