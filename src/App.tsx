import React, { useEffect } from 'react';
import Pagination from './Pagination';
import Final from './steps/Final';
import StepFour from './steps/StepFour';
import StepOne from './steps/StepOne';
import StepThree from './steps/StepThree';
import StepTwo from './steps/StepTwo';

function App() {
  const [step, setStep] = React.useState(0);
  const [stepOneCorrectAnswers, setStepOneCorrectAnswers] = React.useState<
    number[]
  >([]);
  const [stepTwoCorrectAnswers, setStepTwoCorrectAnswers] = React.useState<
    number[]
  >([]);
  const [stepThreeCorrectAnswers, setStepThreeCorrectAnswers] = React.useState<
    number[]
  >([]);
  const [stepFourCorrectAnswers, setStepFourCorrectAnswers] = React.useState<
    number[]
  >([]);
  const [finalGrades, setFinalGrades] = React.useState<
    { step: string; grade: number }[]
  >([]);

  useEffect(() => {
    setFinalGrades([
      { step: 'זמנים', grade: stepOneCorrectAnswers.length * 10 },
      { step: 'שורשים', grade: stepTwoCorrectAnswers.length * 10 },
      { step: 'פעלים', grade: stepThreeCorrectAnswers.length * 10 },
      { step: 'זמן עבר', grade: stepFourCorrectAnswers.length * 10 },
      {
        step: 'ציון סופי',
        grade:
          (stepOneCorrectAnswers.length * 10 +
            stepTwoCorrectAnswers.length * 10 +
            stepThreeCorrectAnswers.length * 10 +
            stepFourCorrectAnswers.length * 10) /
          4,
      },
    ]);
  }, [
    stepOneCorrectAnswers,
    stepTwoCorrectAnswers,
    stepThreeCorrectAnswers,
    stepFourCorrectAnswers,
  ]);
  return (
    <div>
      {step !== 4 && <Pagination currentPage={step} />}
      {step === 0 && (
        <StepOne
          setStepOneCorrectAnswers={setStepOneCorrectAnswers}
          setStep={setStep}
        />
      )}
      {step === 1 && (
        <StepTwo
          setStepTwoCorrectAnswers={setStepTwoCorrectAnswers}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <StepThree
          setStepThreeCorrectAnswers={setStepThreeCorrectAnswers}
          setStep={setStep}
        />
      )}
      {step === 3 && (
        <StepFour
          setStepFourCorrectAnswers={setStepFourCorrectAnswers}
          setStep={setStep}
        />
      )}
      {step === 4 && <Final finalGrades={finalGrades} />}
    </div>
  );
}

export default App;
