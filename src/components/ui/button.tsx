import React from 'react';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
}

const Button = ({
  type = 'button',
  onClick,
  children,
  disabled = false,
  className = '',
  variant = 'primary',
  size = 'medium',
  loading = false
}: ButtonProps) => {
  const classes = [
    'button',
    variant,
    size,
    disabled ? 'disabled' : '',
    loading ? 'loading' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={classes}>
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
