import React, { useState } from 'react';

interface FormField {
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'checkbox' | 'radio';
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options?: { value: string; label: string }[];
}

interface FormProps {
  title: string;
  fields: FormField[];
  onSubmit: (data: { [key: string]: string }) => void;
}

const Form = ({ title, fields, onSubmit }: FormProps) => {
  const [formData, setFormData] = useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {fields.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          {field.type === 'checkbox' || field.type === 'radio' ? (
            <div>
              {field.options?.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input
                    type={field.type}
                    name={field.name}
                    value={option.value}
                    checked={formData[field.name] === option.value}
                    onChange={handleChange}
                  />
                  <span>{option.label}</span>
                </div>
              ))}
            </div>
          ) : (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ''}
              onChange={handleChange}
            />
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;