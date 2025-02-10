import React, { useState } from 'react';
import Questions from './Questions';
import { Box, Typography, Button, Container } from '@mui/material';

type QuestionType = {
  question: string;
  questionDescription: string;
  options: string[];
  answer: number[];
  explanation: string;
};

type QuestionVerdictType = {
  index: number;
  isCorrect: boolean;
  selectedOption: number | null;
};

const quizQuestions: QuestionType[] = [
  {
    question:
      'True or False: JavaScript is a statically-typed programming language.',
    questionDescription:
      'Statically-typed languages require variables to be declared with their data types before they can be used.',
    options: ['True', 'False'],
    answer: [1],
    explanation:
      'JavaScript is a dynamically-typed language, which means that variables do not have to be declared with their data types.',
  },
  {
    question:
      'Which of the following code snippets does not correctly declare a variable in JavaScript?',
    questionDescription: 'Consider the variable `x` that needs to be declared.',
    options: ['var x = 10;', 'const x = 10;', 'let x = 10;', 'int x = 10;'],
    answer: [3],
    explanation:
      'In JavaScript, variables can be declared using the `var`, `const`, or `let` keyword. The correct options are `var x = 10;`, `const x = 10;`, and `let x = 10;`.',
  },
  {
    question:
      "What will be the output of the following JavaScript code?\n```javascript\nconsole.log(5 + '5');```",
    questionDescription: 'The code concatenates a number and a string.',
    options: ['55', '10', 'NaN', 'Error'],
    answer: [0],
    explanation:
      'When a number is concatenated with a string in JavaScript, the number is implicitly converted to a string and then concatenated. The correct option is `55`.',
  },
  {
    question:
      'True or False: JavaScript is a case-sensitive programming language.',
    questionDescription:
      'Case-sensitive languages distinguish between uppercase and lowercase letters.',
    options: ['True', 'False'],
    answer: [0],
    explanation:
      'JavaScript is a case-sensitive language, which means that uppercase and lowercase letters are treated differently.',
  },
  {
    question:
      'Which of the following code snippets correctly displays a message on the web page using JavaScript?',
    questionDescription:
      'Consider the HTML element with the id `message`. The JavaScript code should display a message inside this element.',
    options: [
      "document.getElementById('message').innerHTML = 'Hello, World!';",
      "document.querySelector('message').innerHTML = 'Hello, World!';",
      "document.getElementById('#message').innerHTML = 'Hello, World!';",
      "document.querySelector('.message').innerHTML = 'Hello, World!';",
    ],
    answer: [0],
    explanation:
      "To display a message on the web page using JavaScript, we need to select the HTML element with the appropriate id or tag name. The correct options are `document.getElementById('message').innerHTML = 'Hello, World!';` and `document.querySelector('#message').innerHTML = 'Hello, World!';`.",
  },
  {
    question:
      "What will be the output of the following JavaScript code?\n```javascript\nconsole.log(10 < '5');```",
    questionDescription:
      'The code compares a number and a string using the less than operator.',
    options: ['true', 'false', 'NaN', 'Error'],
    answer: [1],
    explanation:
      'When comparing a number and a string in JavaScript, the string is converted to a number before the comparison is made. If the string cannot be converted to a valid number, the result is `NaN`. The correct option is `false`.',
  },
  {
    question:
      'True or False: JavaScript is an interpreted programming language.',
    questionDescription:
      'Interpreted languages execute code directly without compilation.',
    options: ['True', 'False'],
    answer: [0],
    explanation:
      'JavaScript is an interpreted language, which means that code is executed directly without the need for compilation.',
  },
  {
    question:
      'Which of the following code snippets does not correctly define a function in JavaScript?',
    questionDescription:
      'Consider the function `multiply` that takes two parameters `a` and `b` and returns their product.',
    options: [
      'function multiply(a, b) { return a * b; }',
      'var multiply = function(a, b) { return a * b; };',
      'const multiply = (a, b) => { return a * b; };',
      'int multiply(int a, int b) { return a * b; };',
    ],
    answer: [3],
    explanation:
      'In JavaScript, functions can be defined using the `function` keyword or as arrow functions. The correct options are `function multiply(a, b) { return a * b; }`, `var multiply = function(a, b) { return a * b; };`, and `const multiply = (a, b) => { return a * b; };`.',
  },
];

export default function StartAttempt() {
  const [questions] = useState<Array<QuestionType>>(quizQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [questionAttemptVerdictArray, setQuestionAttemptVerdictArray] =
    useState<QuestionVerdictType[]>([]);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);

  function answerQuestion(index: number) {
    const isCorrect = questions[currentQuestionIndex]?.answer.includes(index);
    setQuestionAttemptVerdictArray((arr) => [
      ...arr,
      { index: currentQuestionIndex, isCorrect, selectedOption: index },
    ]);
    setShowFeedback(true);
  }

  function goToNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((idx) => idx + 1);
      setShowFeedback(false);
    } else {
      setShowResults(true);
    }
  }

  return (
    <Container maxWidth="md">
      {!showResults ? (
        <>
          <Box mt={2} textAlign="right">
            <Typography variant="h6">
              Correct Answers:{' '}
              <span data-testid="quiz-answer-counter">
                {questionAttemptVerdictArray.filter((q) => q.isCorrect).length}
              </span>{' '}
              / {questions.length}
            </Typography>
          </Box>

          <Box mt={4}>
            <Typography variant="h6">
              Question: {currentQuestionIndex + 1}
            </Typography>
            <Questions
              {...questions[currentQuestionIndex]}
              answerQuestion={answerQuestion}
              showFeedback={showFeedback}
            />

            {showFeedback && (
              <Box mt={2}>
                <Typography
                  color={
                    questionAttemptVerdictArray[currentQuestionIndex].isCorrect
                      ? 'success.main'
                      : 'error.main'
                  }
                >
                  {questionAttemptVerdictArray[currentQuestionIndex].isCorrect
                    ? 'Correct!'
                    : 'Incorrect!'}
                </Typography>
                <Typography variant="body2">
                  <strong>Explanation:</strong>{' '}
                  {questions[currentQuestionIndex].explanation}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={goToNextQuestion}
                  sx={{ mt: 2 }}
                >
                  {currentQuestionIndex === questions.length - 1
                    ? 'Show Results'
                    : 'Next Question'}
                </Button>
              </Box>
            )}
          </Box>
        </>
      ) : (
        <Box textAlign="center" mt={6}>
          <Typography variant="h4">Final Score</Typography>
          <Typography
            variant="h2"
            fontWeight="bold"
            data-testid="final-answer-counter"
          >
            {questionAttemptVerdictArray.filter((q) => q.isCorrect).length} /{' '}
            {questions.length}
          </Typography>
        </Box>
      )}
    </Container>
  );
}
