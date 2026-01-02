import React from 'react';
import { Card as ShadcnCard } from 'shadcn-ui';

interface CardProps {
  title: string;
  content: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  footer?: React.ReactNode;
}

const Card = ({
  title,
  content,
  className = '',
  style = {},
  onClick,
  variant = 'primary',
  size = 'medium',
  footer
}: CardProps) => {
  return (
    <ShadcnCard className={className} style={style} onClick={onClick}>
      <ShadcnCard.Header>{title}</ShadcnCard.Header>
      <ShadcnCard.Body>{content}</ShadcnCard.Body>
      {footer && <ShadcnCard.Footer>{footer}</ShadcnCard.Footer>}
    </ShadcnCard>
  );
};

export default Card;
