import React from 'react';
import BottomPagination from '../BottomPagination';
import Button from '../components/Button';
import CompletedContainer from '../components/CompletedContainer';
import Container from '../components/Container';
import data from '../data/test3';


interface Props {
    setStepThreeCorrectAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepThree = (props: Props) => {
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
  const [completed, setCompleted] = React.useState<boolean>(false);

  const handleNext = (answer: {
    id: number;
    text: string;
    correct: boolean;
  }) => {
    if (answer.correct) {
      props.setStepThreeCorrectAnswers((prev) => [...prev, answer.id]);
    }
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };
  return !completed ? (
    <Container>
      <h1>פעלים</h1>
      <h2>מהו הפועל בהמשפט שלפניך?</h2>
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
      <p>סיימת את השלב השלישי</p>
      <Button onClick={() => props.setStep(3)}>לשלב הבא</Button>
    </CompletedContainer>
  );
};

export default StepThree;
