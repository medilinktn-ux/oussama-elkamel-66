import React from 'react';
import { Card as ShadcnCard } from 'shadcn-ui';

interface CardProps {
  title: string;
  content: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

const Card = ({
  title,
  content,
  className = '',
  style = {},
  onClick,
  variant = 'primary',
  size = 'medium'
}: CardProps) => {
  return (
    <ShadcnCard className={className} style={style} onClick={onClick}>
      <ShadcnCard.Header>{title}</ShadcnCard.Header>
      <ShadcnCard.Body>{content}</ShadcnCard.Body>
    </ShadcnCard>
  );
};

export default Card;
