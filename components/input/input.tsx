import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({ id, placeholder, type, required, className, ...rest }) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      required={required}
      className={className}
      {...rest}
    />
  );
}

export default Input;
