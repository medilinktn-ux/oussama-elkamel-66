import React from 'react';

interface InputProps {
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  readOnly?: boolean;
}

const Input = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  className = '',
  style = {},
  disabled = false,
  readOnly = false
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      style={style}
      disabled={disabled}
      readOnly={readOnly}
    />
  );
};

export default Input;