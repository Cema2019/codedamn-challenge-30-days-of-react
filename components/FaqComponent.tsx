import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionItem {
  question: string;
  answer: string;
}

const faqItems: AccordionItem[] = [
  {
    question: 'What is the return policy for online orders?',
    answer:
      'Our return policy allows customers to return products within 30 days of purchase. Items must be in their original condition, unused, and with all tags and packaging intact. To initiate a return, please contact our customer service team for instructions. Shipping fees are non-refundable, and the customer is responsible for the cost of return shipping unless the item is defective or damaged.',
  },
  {
    question: 'How do I track my order?',
    answer:
      "Once your order is shipped, you will receive a confirmation email containing a tracking number. You can use this tracking number on our website or the carrier's website (e.g., UPS, FedEx) to monitor the status of your shipment. If you have any issues with tracking, feel free to contact our support team.",
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we offer international shipping to most countries. Delivery times and shipping fees vary depending on your location and the carrier. During checkout, you can view the available shipping options for your destination. Please note that customs duties and taxes may apply, and it is the responsibility of the customer to cover these additional charges.',
  },
  {
    question: "Can I change or cancel my order after it's been placed?",
    answer:
      "We process orders quickly to ensure fast delivery, which means we're unable to modify or cancel orders once they have been submitted. If you need to make changes, please contact our customer service team as soon as possible, and we will try to assist you. If your order has already shipped, you may need to initiate a return once it arrives.",
  },
];

export default function FAQAccordion() {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (index: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? index : false);
    };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {faqItems.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
