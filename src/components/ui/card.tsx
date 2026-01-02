import React from 'react';
import { Card as ShadcnCard } from 'shadcn-ui';

interface CardProps {
  title: string;
  content: string;
}

const Card = ({ title, content }: CardProps) => {
  return (
    <ShadcnCard>
      <ShadcnCard.Header>{title}</ShadcnCard.Header>
      <ShadcnCard.Body>{content}</ShadcnCard.Body>
    </ShadcnCard>
  );
};

export default Card;
