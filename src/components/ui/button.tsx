import React from 'react';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

const Button = ({
  type = 'button',
  onClick,
  children,
  disabled = false,
  className = '',
  variant = 'primary',
  size = 'medium'
}: ButtonProps) => {
  const classes = [
    'button',
    variant,
    size,
    disabled ? 'disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};

export default Button;
