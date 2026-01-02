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
  id?: string;
  name?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  step?: number;
}

const Input = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  className = '',
  style = {},
  disabled = false,
  readOnly = false,
  id,
  name,
  autoComplete,
  autoFocus = false,
  required = false,
  pattern,
  minLength,
  maxLength,
  min,
  max,
  step
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
      id={id}
      name={name}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      required={required}
      pattern={pattern}
      minLength={minLength}
      maxLength={maxLength}
      min={min}
      max={max}
      step={step}
    />
  );
};

export default Input;