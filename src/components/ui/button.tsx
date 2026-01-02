import React from 'react';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const Button = ({ type = 'button', onClick, children, disabled = false, className = '' }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>{children}</button>
  );
};

export default Button;
