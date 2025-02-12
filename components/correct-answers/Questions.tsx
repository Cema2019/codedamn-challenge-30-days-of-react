import { Box, Typography, Button, Card, CardContent } from '@mui/material';

type QuestionType = {
  question: string;
  questionDescription: string;
  options: string[];
  answerQuestion: (index: number) => void;
  showFeedback: boolean;
};

export default function Questions({
  question,
  questionDescription,
  options,
  answerQuestion,
  showFeedback,
}: QuestionType) {
  return (
    <Card sx={{ mb: 3, p: 2 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {question}
        </Typography>
        <Typography variant="body1" mb={2}>
          {questionDescription}
        </Typography>

        <Box>
          {options.map((option, index) => (
            <Button
              key={index}
              variant="outlined"
              fullWidth
              sx={{ mb: 1, textAlign: 'left' }}
              onClick={() => answerQuestion(index)}
              disabled={showFeedback}
            >
              {option}
            </Button>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
