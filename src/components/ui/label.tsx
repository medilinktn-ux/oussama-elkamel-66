import React from 'react';

interface LabelProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  htmlFor?: string;
}

const Label = ({ text, className = '', style = {}, htmlFor }: LabelProps) => {
  return (
    <label className={className} style={style} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default Label;